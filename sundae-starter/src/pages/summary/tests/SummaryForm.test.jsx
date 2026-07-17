import { render, screen, fireEvent } from "@testing-library/React";
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

test("Checking I agree to terms and conditions checkbox enables form button", () => {
  render(<SummaryForm />);

  const termsAndConditionsCheckbox = screen.getByRole("checkbox", {
    name: /Terms and Conditions/i,
  });

  const formConsentButton = screen.getByRole("button", {
    name: /Confirm Order/i,
  });

  fireEvent.click(termsAndConditionsCheckbox);
  expect(formConsentButton).toBeEnabled();
});
