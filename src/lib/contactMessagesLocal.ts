export type LocalContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  sourcePath: string;
  createdAt: string;
  status: 'new' | 'done';
};

const STORAGE_KEY = 'contact-messages-local';

function safeParse(raw: string | null): LocalContactMessage[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as LocalContactMessage[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function getLocalContactMessages(): LocalContactMessage[] {
  if (typeof window === 'undefined') return [];
  const rows = safeParse(window.localStorage.getItem(STORAGE_KEY));
  return rows.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function appendLocalContactMessage(
  payload: Omit<LocalContactMessage, 'id' | 'createdAt' | 'status'>
): LocalContactMessage {
  if (typeof window === 'undefined') {
    throw new Error('Local contact message storage is available only in browser.');
  }

  const next: LocalContactMessage = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: 'new',
    ...payload,
  };

  const rows = getLocalContactMessages();
  rows.unshift(next);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
  return next;
}

export function saveLocalContactMessages(rows: LocalContactMessage[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
}

export function updateLocalContactMessage(
  id: string,
  updates: Partial<Pick<LocalContactMessage, 'name' | 'email' | 'message' | 'status'>>
): boolean {
  if (typeof window === 'undefined') return false;
  const rows = getLocalContactMessages();
  const index = rows.findIndex((row) => row.id === id);
  if (index < 0) return false;
  rows[index] = { ...rows[index], ...updates };
  saveLocalContactMessages(rows);
  return true;
}

export function deleteLocalContactMessage(id: string): boolean {
  if (typeof window === 'undefined') return false;
  const rows = getLocalContactMessages();
  const next = rows.filter((row) => row.id !== id);
  if (next.length === rows.length) return false;
  saveLocalContactMessages(next);
  return true;
}
