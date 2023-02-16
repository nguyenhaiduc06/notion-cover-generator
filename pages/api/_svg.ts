// pages/api/_svg.ts
export default function getSvg(title: string, footer: string): string {
  const svg = `
<svg width="1500" height="300" viewBox="0 0 1500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      .title { font: bolder 72px Helvetica; color: #252A31; height: 100%; display: flex; align-items: center; justify-content: center; }
    </style>
<rect width="1500" height="300" fill="#D9D9D9"/>
    <foreignObject x="0" y="0" width="1500" height="300">
      <div class="title" xmlns="http://www.w3.org/1999/xhtml">
        ${title}
      </div>
    </foreignObject>
</svg>
  `;

  return svg;
}
