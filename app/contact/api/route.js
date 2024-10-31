import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();
    console.log('Received:', { name, email, subject, message });

    return NextResponse.json({ message: 'Message received successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
