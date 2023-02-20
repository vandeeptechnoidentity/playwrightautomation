import { test, expect, type Page } from '@playwright/test';
import { getSum, login } from '../../utils/helpers';
import ENV from '../../utils/env';

test.beforeEach(async ({ page }) => {
  login(page);
});


test.describe('Verify', () => {
  test('Transactions History', async ({ page }) => {
    await expect(page.locator('a[href="#menu"]')).toBeVisible();
    await page.locator('div#dasboard-container', { has: page.getByText('Transaction & Revenue Lifecycle') }).click();
    await expect(page.locator('div.container', { has: page.getByText('EZ Tags') })).toBeVisible();
    var sum1 = await page.locator('div.container tspan>>nth=19').textContent();
    let n1 = Number(sum1?.toString().replace('M', ''));
    var sum2 = await page.locator('div.container tspan>>nth=23').textContent();
    let n2 = Number(sum2?.toString().replace('M', ''));
    let sum = getSum(n1, n2);
    await expect(page.locator('h2.sub-header', { hasText: sum })).toBeVisible();
    await expect(page.locator('h2.sub-header')).toContainText(sum);
  });
});

