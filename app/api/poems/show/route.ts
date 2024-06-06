import { NextRequest, NextResponse } from 'next/server';
import api from '@/app/lib/api';

export async function GET( request: NextRequest) {
               const id=  request.nextUrl.searchParams.get('id')

  try {
    const response = await api.get(`/poems/detailed/${id}`);

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 });
  }
}
