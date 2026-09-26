import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-ssr/entry-server.js');

// Alle definierten Routen für vollständige SSG-Abdeckung
const routesToPrerender = [
  '/',
  '/chronik',
  '/resonanz',
  '/manifest',
  '/impressum',
  '/datenschutz'
];

console.log('--- Starte Static Site Generation (SSG) Pre-rendering ---');

for (const url of routesToPrerender) {
  try {
    const { html: appHtml } = render(url);
    const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    let filePath;
    if (url === '/') {
      filePath = toAbsolute('dist/index.html');
    } else {
      const routeDir = toAbsolute(`dist${url}`);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      filePath = path.join(routeDir, 'index.html');
    }

    fs.writeFileSync(filePath, html);
    console.log(`✓ Vorgerendert: ${url} -> ${filePath}`);
  } catch (err) {
    console.error(`✗ Fehler beim Rendern von ${url}:`, err);
    process.exit(1);
  }
}

console.log('--- SSG Pre-rendering erfolgreich abgeschlossen ---');
