const sharp = require('sharp');
const fs = require('fs');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#102921" />
      <stop offset="100%" stop-color="#1d3d32" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d4af37" />
      <stop offset="100%" stop-color="#997327" />
    </linearGradient>
  </defs>
  
  <!-- Outer Ring with Subtle Compass Accents -->
  <circle cx="256" cy="256" r="230" fill="none" stroke="url(#grad)" stroke-width="7" opacity="0.95" />
  <circle cx="256" cy="256" r="214" fill="none" stroke="url(#goldGrad)" stroke-width="2" opacity="0.6" />
  
  <!-- Cardinal Tick Marks -->
  <line x1="256" y1="16" x2="256" y2="38" stroke="url(#goldGrad)" stroke-width="3.5" stroke-linecap="round" />
  <line x1="256" y1="474" x2="256" y2="496" stroke="url(#goldGrad)" stroke-width="3.5" stroke-linecap="round" />
  <line x1="16" y1="256" x2="38" y2="256" stroke="url(#goldGrad)" stroke-width="3.5" stroke-linecap="round" />
  <line x1="474" y1="256" x2="496" y2="256" stroke="url(#goldGrad)" stroke-width="3.5" stroke-linecap="round" />
  
  <!-- Subtle Architectural Arch & Solstice Arc -->
  <path d="M 106 360 C 106 200, 256 120, 406 360" fill="none" stroke="url(#grad)" stroke-width="3" stroke-dasharray="4 6" opacity="0.35" />
  <ellipse cx="256" cy="256" rx="160" ry="160" fill="none" stroke="url(#grad)" stroke-width="1.5" opacity="0.25" />

  <!-- Four-Point Subtle Travel Star -->
  <polygon points="256,65 264,95 294,103 264,111 256,141 248,111 218,103 248,95" fill="url(#goldGrad)" opacity="0.9" />

  <!-- Central Luxury Monogram 'R' -->
  <text x="256" y="325" text-anchor="middle" font-family="'EB Garamond', Garamond, 'Times New Roman', serif" font-size="240" font-weight="500" fill="url(#grad)" letter-spacing="-4">R</text>

  <!-- Base Horizon Latitude Line -->
  <line x1="190" y1="355" x2="322" y2="355" stroke="url(#goldGrad)" stroke-width="2.5" stroke-linecap="round" />
  <circle cx="256" cy="355" r="4.5" fill="url(#goldGrad)" />
</svg>`;

fs.writeFileSync('public/images/roam/logo.svg', svg);

sharp(Buffer.from(svg))
  .png()
  .toFile('public/images/roam/logo.png')
  .then((info) => {
    console.log('Successfully generated public/images/roam/logo.png:', info);
  })
  .catch((err) => {
    console.error('Error generating logo:', err);
  });
