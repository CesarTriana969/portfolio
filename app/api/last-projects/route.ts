import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';
import { Projects, ProjectsResponse } from '@/app/types/projects';

export async function GET() {
  try {
    const jsonPath = path.join(process.cwd(), 'app/data/projects.json');
    const fileContents = await fs.readFile(jsonPath, 'utf8');
    const data = JSON.parse(fileContents);

    const projects = data.projects
      .sort((a: Projects, b: Projects) => b.id - a.id)
      .slice(0, 3);

    return NextResponse.json(projects, {
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