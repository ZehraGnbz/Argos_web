import { NextRequest, NextResponse } from 'next/server';
import { getContactMessages } from '@/lib/adminLogStore';

export async function GET(request: NextRequest) {
  try {
    const status = (request.nextUrl.searchParams.get('status') || 'all').trim().toLowerCase();
    const from = request.nextUrl.searchParams.get('from');
    const to = request.nextUrl.searchParams.get('to');

    const fromDate = from ? new Date(from) : null;
    const toDate = to ? new Date(`${to}T23:59:59.999Z`) : null;

    const rows = (await getContactMessages()).filter((row) => {
      const rowDate = new Date(row.createdAt);
      if (status !== 'all' && row.status !== status) return false;
      if (fromDate && !Number.isNaN(fromDate.getTime()) && rowDate < fromDate) return false;
      if (toDate && !Number.isNaN(toDate.getTime()) && rowDate > toDate) return false;
      return true;
    });

    return NextResponse.json({ rows });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch message logs.' }, { status: 500 });
  }
}
