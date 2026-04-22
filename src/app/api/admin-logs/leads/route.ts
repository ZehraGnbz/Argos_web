import { NextRequest, NextResponse } from 'next/server';
import { getDownloadLeads } from '@/lib/adminLogStore';

export async function GET(request: NextRequest) {
  try {
    const productKey = (request.nextUrl.searchParams.get('product') || '').trim().toLowerCase();
    const from = request.nextUrl.searchParams.get('from');
    const to = request.nextUrl.searchParams.get('to');

    const fromDate = from ? new Date(from) : null;
    const toDate = to ? new Date(`${to}T23:59:59.999Z`) : null;

    const rows = (await getDownloadLeads()).filter((lead) => {
      const leadDate = new Date(lead.createdAt);
      if (productKey && lead.productKey.toLowerCase() !== productKey) return false;
      if (fromDate && !Number.isNaN(fromDate.getTime()) && leadDate < fromDate) return false;
      if (toDate && !Number.isNaN(toDate.getTime()) && leadDate > toDate) return false;
      return true;
    });

    return NextResponse.json({ rows });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch lead logs.' }, { status: 500 });
  }
}
