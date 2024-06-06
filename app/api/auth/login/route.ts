import { NextResponse } from 'next/server';
import api from '@/app/lib/api';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { email, password} = formData;

    const response = await api.post('/auth/login', {
        email: email,
        password: password,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
