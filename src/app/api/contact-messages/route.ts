import { NextRequest, NextResponse } from 'next/server';
import { addContactMessage } from '@/lib/adminLogStore';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body?.name ?? '').trim();
    const email = String(body?.email ?? '').trim().toLowerCase();
    const message = String(body?.message ?? '').trim();
    const sourcePath = String(body?.sourcePath ?? '').trim() || '/';

    if (name.length < 2 || !emailRegex.test(email) || message.length < 3) {
      return NextResponse.json({ error: 'Invalid message payload.' }, { status: 400 });
    }

    const saved = await addContactMessage({
      name,
      email,
      message,
      sourcePath,
    });

    return NextResponse.json({ ok: true, message: saved });
  } catch {
    return NextResponse.json({ error: 'Failed to store message.' }, { status: 500 });
  }
}
