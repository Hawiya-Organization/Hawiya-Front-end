import { NextRequest, NextResponse } from 'next/server';
import api from '@/app/lib/api';

export async function GET( request: NextRequest) {

  try {
    const response = await api.get(`/authors`);

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Index error:', error);
    return NextResponse.json({ error: 'Index failed' }, { status: 500 });
  }
}
