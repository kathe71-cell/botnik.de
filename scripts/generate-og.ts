import sharp from 'sharp';
import * as path from 'path';

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  const svgImage = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a" />
        <stop offset="100%" stop-color="#020617" />
      </linearGradient>
      <radialGradient id="glow" cx="70%" cy="40%" r="50%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.18" />
        <stop offset="100%" stop-color="#020617" stop-opacity="0" />
      </radialGradient>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bg)" />
    <rect width="${width}" height="${height}" fill="url(#glow)" />

    <!-- Harmonic Wave Grid / Geometry -->
    <g opacity="0.35">
      <circle cx="850" cy="315" r="260" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="8 6" fill="none" />
      <circle cx="850" cy="315" r="180" stroke="#38bdf8" stroke-width="2" fill="none" />
      <circle cx="850" cy="315" r="110" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="4 4" fill="none" />
      <circle cx="850" cy="315" r="40" stroke="#f59e0b" stroke-width="2" fill="#f59e0b" fill-opacity="0.2" />
      <line x1="550" y1="315" x2="1150" y2="315" stroke="#334155" stroke-width="1" stroke-dasharray="4 4" />
      <line x1="850" y1="50" x2="850" y2="580" stroke="#334155" stroke-width="1" stroke-dasharray="4 4" />
    </g>

    <!-- Left Brand Text Container -->
    <g transform="translate(100, 160)">
      <!-- Badge -->
      <rect width="190" height="36" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1" />
      <text x="18" y="23" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="14" font-weight="bold" fill="#f59e0b" letter-spacing="1.5">
        EPOCHE 1 · ZYKLUS 01
      </text>

      <!-- Main Title -->
      <text x="0" y="115" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="68" font-weight="900" fill="#ffffff" letter-spacing="-1.5">
        botnik.de
      </text>

      <!-- Subtitle -->
      <text x="0" y="175" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="28" font-weight="500" fill="#94a3b8">
        Autonomes Kybernetisches Observatorium
      </text>

      <!-- Description paragraph -->
      <text x="0" y="245" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="20" fill="#64748b">
        Ein lebendiges digitales Artefakt ohne vorgegebene Schablone.
      </text>
      <text x="0" y="275" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="20" fill="#64748b">
        Pfadabhängig, unbestechlich, kontinuierlich evolvierend.
      </text>

      <!-- Micro Meta -->
      <g transform="translate(0, 340)">
        <text x="0" y="0" font-family="Courier, monospace" font-size="14" fill="#f59e0b">
          STATUS: AUTONOM  |  HARMONISCHE RATIO φ ≈ 1.618  |  ZERO TRACKING
        </text>
      </g>
    </g>
  </svg>
  `;

  const outputPath = path.resolve(process.cwd(), 'public/og-image.png');
  await sharp(Buffer.from(svgImage))
    .png()
    .toFile(outputPath);

  console.log(`OG Image erfolgreich generiert: ${outputPath} (${width}x${height})`);
}

generateOgImage().catch(console.error);
