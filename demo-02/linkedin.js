/**
 * Arquivo: demo-02/tweet.js
 * Data: 01/05/2021
 * Descrição: arquivo responsável por realizar a demo automatizando posts no Linkedin
 *  usando o Playwright
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

  await page.goto("https://www.linkedin.com/login/pt?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin");
  await page.fill('input[type="text"]', "<include-your-email-here>");
  await page.fill('input[type="password"]', "<include-your-password-here>");
  await page.click('button[data-litms-control-urn="login-submit"]');

  // Agora vamos fazer um postagem automatizada no Linkedin usando o Playwright:

  // await browser.close();
})();
