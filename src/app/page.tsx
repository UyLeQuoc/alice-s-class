import fs from 'fs';
import path from 'path';

export default function Page() {
    const filePath = path.join(process.cwd(), 'public', 'landing.html');
    const html = fs.readFileSync(filePath, 'utf8');

    return (
        <div
            className="fixed inset-0 z-[9999] bg-white overflow-auto"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
