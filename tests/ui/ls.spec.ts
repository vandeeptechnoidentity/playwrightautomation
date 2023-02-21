import { test, expect, type Page } from '@playwright/test';
import { getSum, login } from '../../utils/helpers';
import ENV from '../../utils/env';

test.beforeEach(async ({ page }) => {
  login(page);
});


test.describe('Verify', () => {
  test('Transactions History', async ({ page }) => {
    await (page.locator('css=img[alt="LICENSE PLATE IMAGE TRANSACTIONS"]')).click();
     await expect(page.getByRole('heading', { name: 'License Plate Image Transactions' })).toBeVisible();
    await page.getByRole('button', { name: 'Filter' }).click();
    await page.locator('#box').selectOption('calendarYear');
    await page.getByRole('button', { name: '2023' }).click();
    await page.getByText('2022').click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.hover(('.highcharts-series > rect:nth-child(1)'));
    const Months_FiscalYear=['Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'];
const Months_CalendarYear=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
[0,1,2,3,4,5,6,7,8,9,10,11].forEach(async k=>{
await page.hover('.highcharts-series > rect:nth-child('+`${k}`+')');
//await page.hover('.highcharts-series > rect>>nth='+`${k}`);
await expect(page.locator('.highcharts-label highcharts-tooltip highcharts-color-undefined')).toHaveText(Months_FiscalYear[k]);
(page.locator('tspan[style="font-weight: bold;"]')).hover();
}) 
  });

});

