import { NextResponse } from 'next/server';
import api from '@/app/lib/api';

export async function GET() {
  try {
    
    const response = await api.get('/poems/saved-poems');

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Fetching error:', error);
    return NextResponse.json({ error: 'fetching failed' }, { status: 500 });
  }
}
