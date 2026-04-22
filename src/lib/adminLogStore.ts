import { randomUUID } from 'crypto';
import { mkdir, readFile, writeFile } from 'fs/promises';
import path from 'path';
import { Redis } from '@upstash/redis';

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

const IS_VERCEL = process.env.VERCEL === '1';
const DATA_DIR = IS_VERCEL ? '/tmp/argoseo-data' : path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'download-leads.json');
const MESSAGES_FILE = path.join(DATA_DIR, 'contact-messages.json');
const REDIS_LEADS_KEY = 'argos:admin-logs:download-leads';
const REDIS_MESSAGES_KEY = 'argos:admin-logs:contact-messages';

const hasRedisEnv = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
);
const redis = hasRedisEnv ? Redis.fromEnv() : null;

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

async function readRows<T>(redisKey: string, filePath: string): Promise<T[]> {
  if (redis) {
    try {
      const rows = await redis.get<T[]>(redisKey);
      return Array.isArray(rows) ? rows : [];
    } catch (error) {
      console.error('[adminLogStore] Redis read failed, using file fallback.', error);
    }
  }
  return readJsonFile<T>(filePath);
}

async function writeRows<T>(redisKey: string, filePath: string, rows: T[]) {
  if (redis) {
    try {
      await redis.set(redisKey, rows);
      return;
    } catch (error) {
      console.error('[adminLogStore] Redis write failed, using file fallback.', error);
    }
  }
  await writeJsonFile(filePath, rows);
}

export async function getDownloadLeads(): Promise<DownloadLead[]> {
  const rows = await readRows<DownloadLead>(REDIS_LEADS_KEY, LEADS_FILE);
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
  await writeRows(REDIS_LEADS_KEY, LEADS_FILE, rows);
  return next;
}

export async function updateDownloadLead(id: string, updates: Partial<Omit<DownloadLead, 'id' | 'createdAt'>>) {
  const rows = await getDownloadLeads();
  const index = rows.findIndex((row) => row.id === id);
  if (index < 0) return false;
  rows[index] = { ...rows[index], ...updates };
  await writeRows(REDIS_LEADS_KEY, LEADS_FILE, rows);
  return true;
}

export async function removeDownloadLead(id: string) {
  const rows = await getDownloadLeads();
  const next = rows.filter((row) => row.id !== id);
  if (next.length === rows.length) return false;
  await writeRows(REDIS_LEADS_KEY, LEADS_FILE, next);
  return true;
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  const rows = await readRows<ContactMessage>(REDIS_MESSAGES_KEY, MESSAGES_FILE);
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
  await writeRows(REDIS_MESSAGES_KEY, MESSAGES_FILE, rows);
  return next;
}

export async function updateContactMessage(id: string, updates: Partial<Omit<ContactMessage, 'id' | 'createdAt' | 'sourcePath'>>) {
  const rows = await getContactMessages();
  const index = rows.findIndex((row) => row.id === id);
  if (index < 0) return false;
  rows[index] = { ...rows[index], ...updates };
  await writeRows(REDIS_MESSAGES_KEY, MESSAGES_FILE, rows);
  return true;
}

export async function removeContactMessage(id: string) {
  const rows = await getContactMessages();
  const next = rows.filter((row) => row.id !== id);
  if (next.length === rows.length) return false;
  await writeRows(REDIS_MESSAGES_KEY, MESSAGES_FILE, next);
  return true;
}
