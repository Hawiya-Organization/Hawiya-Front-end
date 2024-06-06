import { NextResponse } from 'next/server';
import axios from 'axios';
import api from '@/app/lib/api';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { prompt } = formData;
    const response = await api.get('/poems/search', { params:{ prompt: prompt}
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}
