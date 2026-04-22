import { mkdir, readFile, writeFile } from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';

export type DownloadLead = {
  id: string;
  email: string;
  productKey: string;
  productName: string;
  language: 'tr' | 'en';
  sourcePath: string;
  createdAt: string;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  sourcePath: string;
  createdAt: string;
  status: 'new' | 'done';
};

const DATA_DIR = path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'download-leads.json');
const MESSAGES_FILE = path.join(DATA_DIR, 'contact-messages.json');

async function ensureStore() {
  await mkdir(DATA_DIR, { recursive: true });
  try {
    await readFile(LEADS_FILE, 'utf-8');
  } catch {
    await writeFile(LEADS_FILE, '[]', 'utf-8');
  }
  try {
    await readFile(MESSAGES_FILE, 'utf-8');
  } catch {
    await writeFile(MESSAGES_FILE, '[]', 'utf-8');
  }
}

async function readJsonFile<T>(filePath: string): Promise<T[]> {
  await ensureStore();
  const raw = await readFile(filePath, 'utf-8');
  try {
    const parsed = JSON.parse(raw) as T[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeJsonFile<T>(filePath: string, rows: T[]) {
  await ensureStore();
  await writeFile(filePath, JSON.stringify(rows, null, 2), 'utf-8');
}

export async function getDownloadLeads(): Promise<DownloadLead[]> {
  const rows = await readJsonFile<DownloadLead>(LEADS_FILE);
  return rows.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function addDownloadLead(payload: Omit<DownloadLead, 'id' | 'createdAt'>): Promise<DownloadLead> {
  const rows = await getDownloadLeads();
  const next: DownloadLead = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    ...payload,
  };
  rows.unshift(next);
  await writeJsonFile(LEADS_FILE, rows);
  return next;
}

export async function updateDownloadLead(id: string, updates: Partial<Omit<DownloadLead, 'id' | 'createdAt'>>) {
  const rows = await getDownloadLeads();
  const index = rows.findIndex((row) => row.id === id);
  if (index < 0) return false;
  rows[index] = { ...rows[index], ...updates };
  await writeJsonFile(LEADS_FILE, rows);
  return true;
}

export async function removeDownloadLead(id: string) {
  const rows = await getDownloadLeads();
  const next = rows.filter((row) => row.id !== id);
  if (next.length === rows.length) return false;
  await writeJsonFile(LEADS_FILE, next);
  return true;
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  const rows = await readJsonFile<ContactMessage>(MESSAGES_FILE);
  return rows.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function addContactMessage(payload: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>): Promise<ContactMessage> {
  const rows = await getContactMessages();
  const next: ContactMessage = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    status: 'new',
    ...payload,
  };
  rows.unshift(next);
  await writeJsonFile(MESSAGES_FILE, rows);
  return next;
}

export async function updateContactMessage(id: string, updates: Partial<Omit<ContactMessage, 'id' | 'createdAt' | 'sourcePath'>>) {
  const rows = await getContactMessages();
  const index = rows.findIndex((row) => row.id === id);
  if (index < 0) return false;
  rows[index] = { ...rows[index], ...updates };
  await writeJsonFile(MESSAGES_FILE, rows);
  return true;
}

export async function removeContactMessage(id: string) {
  const rows = await getContactMessages();
  const next = rows.filter((row) => row.id !== id);
  if (next.length === rows.length) return false;
  await writeJsonFile(MESSAGES_FILE, next);
  return true;
}
