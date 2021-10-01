import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    const firstName = "Jonathon";
    const lastName = "LeVitre";
    const address = "1743 Country Springs Drive";
    const city = "Bountiful";
    const state = "Utah";
    const zip = "84010";
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const addressInput = screen.getByLabelText(/Address/i);
    const cityInput = screen.getByLabelText(/City:/i);
    const stateInput = screen.getByLabelText(/State:/i);
    const zipInput = screen.getByLabelText(/Zip:/i);
    userEvent.type(firstNameInput, firstName);
    userEvent.type(lastNameInput, lastName);
    userEvent.type(addressInput, address);
    userEvent.type(cityInput, city);
    userEvent.type(stateInput, state);
    userEvent.type(zipInput, zip);
    const button = screen.getByRole("button");
    userEvent.click(button);
    const successMessage = screen.getByTestId("successMessage");
    expect(successMessage).toHaveTextContent(/You have ordered some plants! Woo-hoo! 🎉Your new green friends will be shipped to:Jonathon LeVitre1743 Country Springs DriveBountiful, Utah 84010/i);
    
});
