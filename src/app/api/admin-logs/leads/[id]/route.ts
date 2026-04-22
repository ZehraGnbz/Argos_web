import { NextRequest, NextResponse } from 'next/server';
import { removeDownloadLead, updateDownloadLead } from '@/lib/adminLogStore';

export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const body = await request.json();
    const updated = await updateDownloadLead(id, {
      email: body?.email ? String(body.email).trim().toLowerCase() : undefined,
      productKey: body?.productKey ? String(body.productKey).trim() : undefined,
      productName: body?.productName ? String(body.productName).trim() : undefined,
      language: body?.language === 'en' ? 'en' : body?.language === 'tr' ? 'tr' : undefined,
      sourcePath: body?.sourcePath ? String(body.sourcePath).trim() : undefined,
    });
    if (!updated) {
      return NextResponse.json({ error: 'Lead not found.' }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed to update lead.' }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const deleted = await removeDownloadLead(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Lead not found.' }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete lead.' }, { status: 500 });
  }
}
