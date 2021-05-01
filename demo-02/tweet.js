
/**
 * Arquivo: demo-02/tweet.js
 * Data: 01/05/2021
 * Descrição: arquivo responsável por realizar a demo automatizando tweets usando o Playwright
 * Autora: Glaucia Lemos
 * Twitter: <@glaucia_lemos86>
 */

const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch(); 
    const page = await browser.newPage();

    await page.goto('https://twitter.com.login');
})