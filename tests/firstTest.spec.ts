import { test } from "@playwright/test";

//Hooks are used to run some code before or after each test

test.beforeEach(async ({ page }) => {
  // Navigate to the application before each test
  await page.goto("http://localhost:4200/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layout").click();
});

test("Locator syntax rules", async ({ page }) => {
  // by tag name
  page.locator("", {});
  // by id
  await page.locator("#inputEmail").click();
  // by class name
  page.locator(".shape-rectangle");
  // by text
  page.locator("text=");
  // by role
  page.locator("role=");
  // by placeholder
  page.locator("placeholder=");
  // by attribute
  page.locator("[placeholder]");
  // by class value
  page.locator("[class='form-control']");
  //combination of locators
  page.locator("input#inputEmail.form-control");
  //by Xpath
  page.locator("//input[@id='inputEmail']"); // we can use Xpath as well but it is not recommended because it is not readable and maintainable
  // by partial text
  page.locator("text=Email*"); // we can use partial text as well but it is not recommended because it is not readable and maintainable
  // by exact text
  page.locator("text=Email*"); // we can use exact text as well but it is not recommended because it is not readable and maintainable
});

test("Yser facing locators", async ({ page }) => {
  await page.getByRole("button", { name: "Submit" }).click(); // by role and name
});

test("the second test", async ({ page }) => {
  await page.getByText("Datepicker").click();
});

test.afterEach(async () => {
  // No explicit page close needed; Playwright handles it automatically.
});
