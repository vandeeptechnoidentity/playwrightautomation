import { test, expect, type Page } from '@playwright/test';
import { getSum, login } from '../../utils/helpers';
import ENV from '../../utils/env';

test.beforeEach(async ({ page }) => {
  login(page);
});
test('verifying userdashboard', async({page})=>{       
  //Verifying presence of the User Dashboard Elements
  await page.pause();
  await expect(page.getByRole('img', { name: 'Harris County Toll Road Authority' })).toBeVisible();
  await expect(page.getByText('Good')).toBeVisible();
  var card_Icons=['Safety Performance','Transaction & Revenue Lifecycle','Service Performance','FINANCIAL PERFORMANCE','LICENSE PLATE IMAGE TRANSACTIONS','EZ TAG FULFILLMENT PERFORMANCE'];    
  var card_Titles=['Safety Performance','Transaction & Revenue Lifecycle','Service Performance','Financial Performance','License Plate Image Transactions','Ez Tag Fulfillment Performance'];
  var period_labels :string[] =['Previous Month','Fiscal YTD','Previous Month','Fiscal YTD','Fiscal YTD','Current Month'];
  var dashboard_Titles :string[] =['SAFETY PERFORMANCE','TRANSACTION & REVENUE LIFECYCLE','Service Performance','Financial Performance','License Plate Image Transactions','EZ TAG FULFILLMENT PERFORMANCE'];      
    const num = page.locator('.card-body').count();
    for (var i =0; i<await num; i++)
    {
      await expect (page.locator('img[alt="'+card_Icons[i]+'"]')).toBeVisible();
      await expect(page.locator('css=.card-title.pl-15.pt-15').nth(i)).toContainText(card_Titles[i]);
      await expect(page.locator('.text-title.position-absolute.top-0.end-0.me-4.fw-light.label-text').nth(i)).toContainText(period_labels[i]);
      //Verifying post condition by clicking on tiles and chekcing navigation is done to respective screens
      await page.locator('.card-body').nth(i).click();
      await expect(page.locator('.page-title.pdf-margin-top')).toContainText(dashboard_Titles[i]);
      await page.locator('img[src="./Img/Home.svg"]').click();
    }
})