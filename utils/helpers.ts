import { expect } from "@playwright/test";
import ENV from "../utils/env";

export function getSum(value1: number, value2: number): string {
  return (value1 + value2).toString();
}

export async function login(page) {
  await page.goto(ENV.BASE_UI_URL);
  await page.locator('input[name="email"]').fill(ENV.USERNAME);  
  await page.locator('input[name="password"]').fill(ENV.PASSWORD);  
  await page.locator('//button[@type="submit"]').click();
  await page.waitForSelector("//span[contains(text(),'Portal')]");
  const portalText = await  (page.locator("//span[contains(text(),'Portal')]")).textContent();
  console.log(portalText);
  
   
}

export async function logout(page) {
  await page.waitForSelector("//a[contains(text(),'Log Out')]");
  await page.locator("//a[contains(text(),'Log Out')]").click();

}