import { test, expect, type Page } from '@playwright/test';
import ENV from '../../utils/env';

test("create a new user", async ({ request, baseURL }) => {
  const response = await request.post(`${ENV.BASE_API_URL}/authenticate  `, {
    data: {
      username:"user",
      password: "password123"
    },
  });

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  console.log(await response.json());

  const responseBody = JSON.parse(await response.text());
  console.log(responseBody.token);
});

