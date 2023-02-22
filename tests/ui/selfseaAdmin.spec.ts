import { test, expect, type Page } from '@playwright/test';
import { getSum, login, logout } from '../../utils/helpers';
import ENV from '../../utils/env';

test.beforeEach(async ({ page }) => {
  login(page);
  await page.waitForSelector("//h2/button[@type='button']");
});

// test.afterEach (async ({ page }) => {
//   logout(page);
// });

  test('verify sections available for admin', async ({ page }) => {
  //await page.waitForSelector("//h2/button[@type='button']");
  //const text1  = await page.locator("(//h2/button[@type='button'])[1]").textContent();
  //const allSections  = await page.$$("//h2/button[@type='button']");
  const allSections  = await page.locator("//h2/button[@type='button']").allTextContents();
  console.log(allSections);
  expect(allSections[0]).toBe('Users');
  expect(allSections[1]).toBe('Moderation Queue');
  expect(allSections[2]).toBe('Conversations');
  expect(allSections[3]).toBe('My Account');
  await page.waitForSelector("//a[contains(text(),'Log Out')]");
  await page.locator("//a[contains(text(),'Log Out')]").click();
  console.log("**** Test Case1 is passed *******")
  });

