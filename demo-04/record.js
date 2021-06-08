/**
 * Arquivo: demo-04/tweet.js
 * Data: 01/05/2021
 * Descrição: arquivo responsável por realizar a demo gravando as telas usando com o Playwright
 * Autora: Glaucia Lemos
 * Twitter: <@glaucia_lemos86>
 */

const { chromium, firefox, webkit } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });

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
