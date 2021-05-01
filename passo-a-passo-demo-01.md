## Passo a Passo - Demo 01 - 

1 - Instalar o Node.js

2 - Depois criar um arquivo padrão do 'package.json':   
    > npm init -y
    
3 - Instalar o Playwright
    > npm i playwright

4 - Criar, claro, o arquivo .gitignore

5 - Seguir o código fonte da abertura do site do npmjs.com, mostrando o screenshot que o Playwright fez da página

6 - Explicar linha a linha o que foi feito! ;)

```js
const { firefox, chromium, webkit, devices } = require('playwright');

(async () => {
  const browser = await firefox.launch({ headless: false });
  const page = await browser.newPage({ ...devices['iPhone 11 Pro'] });

  await page.goto('https://npmjs.com');
  await page.fill('[placeholder="Search packages"]', 'playwright');
  await page.keyboard.press('Enter');
  await page.click('text=playwright');
  await page.waitForLoadState();

  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
```

7 - Mostrar que também pode fazer o uso do Playwright também para testar devices (usando o examplo do iPhone 11 Pro)
obs.: mudar para webkit. Ex.:

```js

 (async () => {
  const browser = await webkit.launch({ headless: false });
  const page = await browser.newPage({ ...devices['iPhone 11 Pro'] });
```

8 - Para executar o código basta ir até a pasta do projeto e digitar
  > node <nome-do-arquivo>
