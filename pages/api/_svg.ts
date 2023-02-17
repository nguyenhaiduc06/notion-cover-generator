export default function getSvg(title: string, presetName: string): string {
  const svg = `
  <svg width="1500" height="300" xmlns="http://www.w3.org/2000/svg">
    <style>
      .title { color: #252A31; height: 300px; width: 1500px; display: flex; align-items: center; justify-content: center; }
    </style>
    <defs>
      <linearGradient id="warmFlame" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#fad0c4;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#ff9a9e;stop-opacity:1" />
      </linearGradient>
    </defs>
    <defs>
      <linearGradient id="winterNeva" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#c2e9fb;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#a1c4fd;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="1500" height="300" fill="url(#${presetName})"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="48px">${title}</text>
  </svg>
  `;

  return svg;
}
