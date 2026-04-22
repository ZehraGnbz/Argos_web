import { NextRequest, NextResponse } from 'next/server';
import { addDownloadLead } from '@/lib/adminLogStore';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body?.email ?? '').trim().toLowerCase();
    const productKey = String(body?.productKey ?? '').trim();
    const productName = String(body?.productName ?? '').trim();
    const language = body?.language === 'en' ? 'en' : 'tr';
    const sourcePath = String(body?.sourcePath ?? '').trim() || '/';

    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 });
    }
    if (!productKey || !productName) {
      return NextResponse.json({ error: 'Missing product information.' }, { status: 400 });
    }

    const saved = await addDownloadLead({
      email,
      productKey,
      productName,
      language,
      sourcePath,
    });

    return NextResponse.json({ ok: true, lead: saved });
  } catch {
    return NextResponse.json({ error: 'Failed to store lead.' }, { status: 500 });
  }
}
