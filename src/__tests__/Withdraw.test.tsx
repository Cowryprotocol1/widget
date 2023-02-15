import { fireEvent, render } from "@testing-library/react";
import WithdrawModal from "../withdrawal";
import React from 'react';
const UserWalletBalance: string = "3000";

describe("Withdrawal Component", () => {
  // defining the component
  const testComponent =()=> render(<WithdrawModal UserWalletBalance={UserWalletBalance}/>)

  it(" ❌ renders Withdrawal Component correctly'", () => {
   const {asFragment} = testComponent();
   expect(asFragment()).toMatchSnapshot();
  });

  it(" ❌ count number of input in the form'", async () => {
    let component = testComponent();
    const formInputs = component.getAllByTestId('form')
    expect(await formInputs).toHaveLength(6);
   });

  it(" ❌ Submit Form Data'", () => {
    const {getByTestId, getByText, getByPlaceholderText} = testComponent();

    const amount:any = getByPlaceholderText('Withdraw Amount')
    fireEvent.change(amount,{target: {value: '1000'}})
    expect(amount.value).toBe('1000');

    const bank:any = getByPlaceholderText('Bank Name')
    fireEvent.change(bank,{target: {value: 'GTB'}})
    expect(bank.value).toBe('GTB');

    const desc:any = getByPlaceholderText('Transaction Description')
    fireEvent.change(desc,{target: {value: 'Test Desc'}})
    expect(desc.value).toBe('Test Desc');

    const accNum:any = getByPlaceholderText('Account Number')
    fireEvent.change(accNum,{target: {value: '0987654321'}})
    expect(accNum.value).toBe('0987654321');

    const accName:any = getByPlaceholderText('Account Name')
    fireEvent.change(accName,{target: {value: 'Daniel Olagunju'}})
    expect(accName.value).toBe('Daniel Olagunju');

    const phone:any = getByPlaceholderText('Phone Number');
    fireEvent.change(phone,{target: {value: '08012345678'}});
    expect(phone.value).toBe('08012345678');

    const button = getByTestId('submit_btn')
    fireEvent.click(button);
    expect(getByText('Confirm Withdrawal')).toBeInTheDocument();
  });
});