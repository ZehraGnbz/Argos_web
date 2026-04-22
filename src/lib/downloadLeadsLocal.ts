export type LocalDownloadLead = {
  id: string;
  email: string;
  productKey: string;
  productName: string;
  language: 'tr' | 'en';
  sourcePath: string;
  createdAt: string;
};

const STORAGE_KEY = 'download-leads-local';

function safeParse(raw: string | null): LocalDownloadLead[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as LocalDownloadLead[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function getLocalDownloadLeads(): LocalDownloadLead[] {
  if (typeof window === 'undefined') return [];
  const rows = safeParse(window.localStorage.getItem(STORAGE_KEY));
  return rows.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function appendLocalDownloadLead(lead: Omit<LocalDownloadLead, 'id' | 'createdAt'>): LocalDownloadLead {
  if (typeof window === 'undefined') {
    throw new Error('Local lead storage is available only in browser.');
  }

  const next: LocalDownloadLead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...lead,
  };

  const rows = getLocalDownloadLeads();
  rows.unshift(next);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
  return next;
}

export function saveLocalDownloadLeads(rows: LocalDownloadLead[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
}

export function updateLocalDownloadLead(
  id: string,
  updates: Partial<Pick<LocalDownloadLead, 'email' | 'productKey' | 'productName' | 'language' | 'sourcePath'>>
): boolean {
  if (typeof window === 'undefined') return false;
  const rows = getLocalDownloadLeads();
  const index = rows.findIndex((row) => row.id === id);
  if (index < 0) return false;
  rows[index] = { ...rows[index], ...updates };
  saveLocalDownloadLeads(rows);
  return true;
}

export function deleteLocalDownloadLead(id: string): boolean {
  if (typeof window === 'undefined') return false;
  const rows = getLocalDownloadLeads();
  const next = rows.filter((row) => row.id !== id);
  if (next.length === rows.length) return false;
  saveLocalDownloadLeads(next);
  return true;
}
