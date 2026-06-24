const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1336, height: 5000, deviceScaleFactor: 2 });
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

  // Small extra delay to ensure rendering of background gradients and images
  await new Promise(r => setTimeout(r, 2000));

  const slides = await page.$$('.slide');
  console.log(`Found ${slides.length} slides.`);
  for (let i = 0; i < slides.length; i++) {
    console.log(`Capturing slide ${i + 1}...`);
    await slides[i].screenshot({ path: path.join(__dirname, `slide-${i + 1}.png`) });
  }

  await browser.close();
  console.log('Done capturing PNGs.');
})();
