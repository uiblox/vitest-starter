import { render, screen, fireEvent } from "@testing-library/React";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";
import { expect } from "vitest";

test("Page loads with form unchecked", () => {
  render(<SummaryForm />);
  const termsAndConditionsCheckbox = screen.getByRole("checkbox", {
    name: /Terms and Conditions/i,
  });

  expect(termsAndConditionsCheckbox).not.toBeChecked();

  const formConsentButton = screen.getByRole("button", {
    name: /Confirm Order/i,
  });

  expect(formConsentButton).toBeDisabled();
});

test("Checking I agree to terms and conditions checkbox enables form button", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const termsAndConditionsCheckbox = screen.getByRole("checkbox", {
    name: /Terms and Conditions/i,
  });

  const formConsentButton = screen.getByRole("button", {
    name: /Confirm Order/i,
  });

  await user.click(termsAndConditionsCheckbox);
  expect(formConsentButton).toBeEnabled();

  await user.click(termsAndConditionsCheckbox);
  expect(formConsentButton).toBeDisabled();
});

test("Popover is not visible when terms and conditions text is not hovered", () => {
  const popover = screen.queryByText("No ice cream will actually be delivered");
  expect(popover).not.toBeInTheDocument();
});

// test("Popover is visible when terms and conditions text is hovered", () => {});
