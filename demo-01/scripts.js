
/**
 * Arquivo: demo-01/scripts.js
 * Data: 01/05/2021
 * Descrição: arquivo responsável por realizar a demo automatizando usando o Playwright
 * Autora: Glaucia Lemos
 * Twitter: <@glaucia_lemos86>
 */

const { firefox, chromium, webkit } = require('playwright');

(async () => {
  const browser = await firefox.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://npmjs.com');
  await page.fill('[placeholder="Search packages"]', 'playwright');
  await page.keyboard.press('Enter');
  await page.click('text=playwright');
  await page.waitForLoadState();

  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();