
export const getBasicForm = async (page) => {
  return page.locator("nb-card").filter({ hasText: "Basic form" });
};

export const fillForm = async (form, email, password) => {
  const emailField = form.getByRole("textbox", { name: "Email" });
  const passwordField = form.getByRole("textbox", { name: "Password" });
  await emailField.fill(email);
  await passwordField.fill(password);
  await form.locator("nb-checkbox").click();
  await form.getByRole("button").click();
  return emailField;
};
