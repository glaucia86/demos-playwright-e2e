/**
 * Arquivo: demo-02/tweet.js
 * Data: 01/05/2021
 * Descrição: arquivo responsável por realizar a demo automatizando tweets usando o Playwright
 * Autora: Glaucia Lemos
 * Twitter: <@glaucia_lemos86>
 */

const { chromium, webkit, devices } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });

  const context = await browser.newContext({
    recordVideo: {
      dir: "./video-recording",
      size: {
        width: 1024,
        height: 786,
      },
    },
  });
  const page = await context.newPage();

  await page.goto("https://twitter.com/login");
  await page.fill('input[type="text"]', "<include-your-twitter-handler>");
  await page.fill('input[type="password"]', "<include-your-password>");
  await page.click('div[data-testid="LoginForm_Login_Button"]');

  // Agora vamos fazer um tweet automatizado usando o Playwright:

  await page.click(".public-DraftStyleDefault-ltr");
  await page.keyboard.type(
    "Fala Coders! Tweet Automatizado com @playwrightweb & Node.js. Link da demo: https://github.com/glaucia86/demos-playwright-e2e"
  );
  await page.click('div[data-testid="tweetButtonInline"]');
})();
