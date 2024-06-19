import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '6');
    const latest = searchParams.get('latest') === 'true';
    
    let jobs;

    if (latest) {
      jobs = await sql`
        SELECT * 
        FROM oferta 
        ORDER BY id DESC
        LIMIT ${limit}
      `;
    } else {
      const offset = (page - 1) * limit;
      jobs = await sql`
        SELECT * 
        FROM oferta 
        ORDER BY id DESC
        LIMIT ${limit} 
        OFFSET ${offset}
      `;
    }

    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
