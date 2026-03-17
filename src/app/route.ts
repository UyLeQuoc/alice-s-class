import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const filePath = path.join(process.cwd(), 'public', 'landing.html');

    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return new NextResponse(fileContent, {
            headers: {
                'Content-Type': 'text/html',
            },
        });
    } catch (error) {
        return new NextResponse('Landing page not found', { status: 404 });
    }
}
