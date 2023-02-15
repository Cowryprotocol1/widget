import { fireEvent, render } from "@testing-library/react";
import DepositModal from "../deposit/index";
import React from 'react';
const minDeposit: string = "999";

describe("Withdrawal Component", () => {
  // defining the component
  const testComponent =()=> render(<DepositModal minDeposit={minDeposit}/>)

  it(" ❌ renders DepositModal Component correctly'", () => {
   const {asFragment} = testComponent();
   expect(asFragment()).toMatchSnapshot();
  });

  it(" ❌ count number of input in the form'", async () => {
    let component = testComponent();
    const formInputs = component.getAllByTestId('form')
    expect(await formInputs).toHaveLength(4);
   });

  it(" ❌ Submit Form Data'", async() => {
    const {getByTestId, getByText, getByPlaceholderText} = testComponent();

    const amount: any = getByPlaceholderText("Deposit Amount");
    fireEvent.change(amount, { target: { value: "1000" } });
    expect(amount.value).toBe("1000");

    const bank: any = getByPlaceholderText("Deposit Bank Name");
    fireEvent.change(bank, { target: { value: "GTB" } });
    expect(bank.value).toBe("GTB");

    const desc: any = getByPlaceholderText("Wallet Address");
    fireEvent.change(desc, { target: { value: "GRXISJSJ2DJ4H2N44NK2N2" } });
    expect(desc.value).toBe("GRXISJSJ2DJ4H2N44NK2N2");

    const accNum: any = getByPlaceholderText("Transaction Description");
    fireEvent.change(accNum, { target: { value: "TEST DESCRIPTION" } });
    expect(accNum.value).toBe("TEST DESCRIPTION");

    const button = getByTestId('submit_btn')
    fireEvent.click(button);
    expect(await getByText('Confirm Deposit')).toBeInTheDocument();

  });
});