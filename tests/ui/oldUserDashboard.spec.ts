import { test, expect, type Page } from '@playwright/test';
import { getSum, login } from '../../utils/helpers';
import ENV from '../../utils/env';

test.beforeEach(async ({ page }) => {
  login(page);
});
test('verifying userdashboard', async({page})=>{          
    //Verifying presence of the old User Dashboard Elements
    await page.pause();
    await expect(page.getByRole('img', { name: 'Harris County Toll Road Authority' })).toBeVisible();
    await expect(page.getByText('Good')).toBeVisible();    
    var card_titles=['Safety Performance','Transaction & Revenue Lifecycle','Service Performance','FINANCIAL PERFORMANCE','LICENSE PLATE IMAGE TRANSACTIONS','EZ TAG FULFILLMENT PERFORMANCE'];    
    var period_labels :string[] =['Previous Month','Fiscal YTD','Previous Month','Fiscal YTD','Fiscal YTD','Current Month'];      
    //await expect(page.locator('.position-absolute.top-0.end-0.me-4.fw-light.label-text2').nth(0)).toHaveText('Previous Month');      
    const num = page.locator('.card-header.py-3').count();
    for (var i =0; i<await num; i++)
    {
      await expect (page.locator('img[alt="'+card_titles[i]+'"]').nth(0)).toBeVisible();
      await expect(page.locator('css=.ms-4.text-uppercase.cards-title-width').nth(i)).toContainText(card_titles[i]);
      await expect(page.locator('.position-absolute.top-0.end-0.me-4.fw-light.label-text2').nth(i)).toContainText(period_labels[i]);      
    }        
  })