/**
 * Arquivo: demo-03/index.ts
 * Data: 01/05/2021
 * Descrição: arquivo responsável por realizar a demo automatizando testes usando o Playwright com TypeScript
 * Autora: Glaucia Lemos
 * Twitter: <@glaucia_lemos86>
 */

import * as playwright from 'playwright';

async function main() {

  const { chromium, firefox, webkit } = playwright;

  for (const browserType of [chromium, webkit, firefox]) {
    // Launch the Browser:
    const browser = await playwright.chromium.launch({
      headless: false
    });

    // Create a await context.close();
    const context = await browser.newContext();

    // Create the Page:
    const page = await context.newPage();

    // Some actions
    await page.goto('https://glaucialemos.netlify.app/');
    await page.screenshot({ path: `demo-03/screenshots/${browserType.name()}.png` });

    // Close the browser:
    await browser.close();
  }
}

main();


