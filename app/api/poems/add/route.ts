import { NextResponse } from 'next/server';
import axios from 'axios';
import api from '@/app/lib/api';

export async function POST(request: Request) {
  try {
    const poemData = await request.json();
    const response = await api.post('/poems', poemData);

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 });
  }
}
