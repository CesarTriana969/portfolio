import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
  try {
    const jsonPath = path.join(process.cwd(), 'app/data/experiences.json');

    const fileContents = await fs.readFile(jsonPath, 'utf8');

    const data = JSON.parse(fileContents);

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (error) {
    console.error('Error reading work experience:', error);
    return NextResponse.json(
      { error: 'Failed to load work experience data' },
      { status: 500 }
    );
  }
}