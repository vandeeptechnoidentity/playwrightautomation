import ENV from "../utils/env";

export function getSum(value1: number, value2: number): string {
  return (value1 + value2).toString();
}

export async function login(page) {
  await page.goto(ENV.BASE_UI_URL);
  await page.locator('input[name="username"]').fill(ENV.USERNAME);
  await page.locator('input[name="password"]').fill(ENV.PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
}
