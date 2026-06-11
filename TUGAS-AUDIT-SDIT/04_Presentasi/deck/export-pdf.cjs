const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  
  // Set the viewport matching our CSS (1336x750)
  await page.setViewport({ width: 1336, height: 750, deviceScaleFactor: 2 });
  const fileUrl = 'file:///' + path.resolve(__dirname, 'index.html').replace(/\\/g, '/');
  
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  // Wait for iconify-icon web components
  try {
    await page.waitForFunction(() => {
      const icons = Array.from(document.querySelectorAll('iconify-icon'));
      if (icons.length === 0) return true;
      const ready = icons.filter(el => el.shadowRoot && el.shadowRoot.querySelector('svg')).length;
      return ready / icons.length >= 0.98;
    }, { timeout: 60000 });
  } catch (e) {
    console.log('Icon wait threshold not fully met, proceeding anyway.');
  }

  // Inject CSS to remove the gaps and margins when printing so each slide fits perfectly on one page
  await page.addStyleTag({
    content: `
      @page { size: 1336px 750px; margin: 0; }
      body { gap: 0 !important; margin: 0 !important; padding: 0 !important; }
      .slide { margin-top: 0 !important; page-break-after: always; box-shadow: none !important; }
    `
  });

  await new Promise(r => setTimeout(r, 2000));

  console.log(`Exporting to PDF...`);
  await page.pdf({
    path: path.join(__dirname, 'slides.pdf'),
    printBackground: true,
    width: '1336px',
    height: '750px'
  });

  await browser.close();
  console.log('Done exporting PDF.');
})();
