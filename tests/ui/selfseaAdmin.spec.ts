import { test, expect, type Page } from '@playwright/test';
import { getSum, login, login_admin, logout } from '../../utils/helpers';
import { assert } from 'chai';

import ENV from '../../utils/env';

test.beforeEach(async ({ page }) => {
  login_admin(page);
  await page.waitForSelector("//h2/button[@type='button']");
});

// test.afterEach (async ({ page }) => {
//   logout(page);
// });

  test('verify sections available for admin', async ({ page }) => {

  const allSections  = await page.$$("//h2/button[@type='button']");
  const actualSectionText = ['Users','Moderation Queue','Conversations','My Account'];
  let count = 0;
  for (const section of allSections)
  {
    const sectionText = await section.innerText();
    assert.equal(sectionText, actualSectionText[count]);
    count++;
  }
  console.log("**** Test Case1 is passed *******")
  });

