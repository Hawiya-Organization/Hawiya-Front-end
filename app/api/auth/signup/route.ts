import { NextResponse } from 'next/server';
import api from '@/app/lib/api';

export async function POST(request: Request) {
  try {
        const formData = await request.json();
        const { name, email, password, password_confirmation } = formData;


    const response = await api.post('/auth/register', {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      });
  

    console.log('Received response from Laravel:', response.data);

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
