/**
<<<<<<< HEAD
 * Arquivo: demo-04/record.js
=======
 * Arquivo: demo-04/tweet.js
>>>>>>> ecc86026e1becef261eae8f796868f80d324121b
 * Data: 01/05/2021
 * Descrição: arquivo responsável por realizar a demo gravando as telas usando com o Playwright
 * Autora: Glaucia Lemos
 * Twitter: <@glaucia_lemos86>
 */

<<<<<<< HEAD
const { chromium, firefox, webkit } = require('playwright');
=======
const { chromium, firefox, webkit } = require("playwright");
>>>>>>> ecc86026e1becef261eae8f796868f80d324121b

(async () => {
  const browser = await chromium.launch({ headless: false });

<<<<<<< HEAD
  const context = await browser.newContext({ 
    recordVideo: {
      dir: "./video-recording"
    }
  });
  const page = await context.newPage();

  await page.goto("https://playwright.dev/", { waitUntil: "networkidle" })
  await page.goto("https://glaucialemos.netlify.app/", { waitUntil: "networkidle" })
  await page.goto("https://www.typescriptlang.org/", { waitUntil: "networkidle" })
  
  await browser.close();
})();
=======
  const context = await browser.newContext({
    recordVideo: {
      dir: "./video-recording",
    },
  });
  const page = await context.newPage();

  await page.goto("https://playwright.dev/", { waitUntil: "networkidle" });
  await page.goto("https://glaucialemos.netlify.app/", {
    waitUntil: "networkidle",
  });
  await page.goto("https://www.typescriptlang.org/", {
    waitUntil: "networkidle",
  });

  await browser.close();
})();
>>>>>>> ecc86026e1becef261eae8f796868f80d324121b
