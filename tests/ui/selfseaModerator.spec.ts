import { test, expect, type Page, ElementHandle } from '@playwright/test';
import { login_moderator, logout } from '../../utils/helpers';
import { assert } from 'chai';

import ENV from '../../utils/env';

test.beforeEach(async ({ page }) => {
  login_moderator(page);
  await page.waitForSelector("//h2/button[@type='button']");
});

// test.afterEach (async ({ page }) => {
//   logout(page);
// });

  test('verify sections clickable for moderator on admin portal', async ({ page }) => {

  const allSections  = await page.$$("//div[@class='accordion']/div");
  const actualSectionText = ['Communities','Users','Moderation Queue','Conversations','My Account'];
  let count = 0;
  for (const section of allSections)
  {
    const sectionText = await section.textContent();
    const isSectionDisabled = await section.getAttribute('aria-disabled');
    if (count <= 2)
    {      
      assert.equal(isSectionDisabled, `true`);
      console.log("The section: " + actualSectionText[count] + ":" + isSectionDisabled);
    }
    else
    {
      assert.equal(isSectionDisabled, null);
      console.log("The section: " + actualSectionText[count] + ":" + isSectionDisabled);
    }
    
    count++;
  }
  console.log("**** Test Case 2 is passed *******")
  });

