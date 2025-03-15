import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('https://app.go2atlas.com/version-test/account_login?lang=pt_br');
});

test('Teste de login do Atlas', async ({ page }) => {
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL').fill('thalesvicentelopes266@gmail.com');
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_PASSWORD').fill('AAAA!@#a1');
  await page.getByRole('button', { name: 'Aceite tudo' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
});