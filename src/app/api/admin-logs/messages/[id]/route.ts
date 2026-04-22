import { NextRequest, NextResponse } from 'next/server';
import { removeContactMessage, updateContactMessage } from '@/lib/adminLogStore';

export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const updated = await updateContactMessage(id, {
      name: body?.name ? String(body.name).trim() : undefined,
      email: body?.email ? String(body.email).trim().toLowerCase() : undefined,
      message: body?.message ? String(body.message).trim() : undefined,
      status: body?.status === 'done' ? 'done' : body?.status === 'new' ? 'new' : undefined,
    });
    if (!updated) {
      return NextResponse.json({ error: 'Message not found.' }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed to update message.' }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const deleted = await removeContactMessage(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Message not found.' }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete message.' }, { status: 500 });
  }
}
