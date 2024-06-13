import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { rows: business } = await sql`SELECT * FROM usuario`;
    return NextResponse.json(business);
  } catch (error) {
    console.error('Error fetching data:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    } else {
      return NextResponse.json({ error: 'Unknown error occurred' });
    }
  }
}