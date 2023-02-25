

// const url = `https://cowry-backend.herokuapp.com`
const url = `http://127.0.0.1:8000`

export const getDepositIntent = async (data: any)=> {
    let rData = {
      amount: parseFloat(data.amount),
      blockchainAddress: data.address,
      bankType: data.bank,
      narration: data.description
    }
    // console.log(JSON.stringify(rData))
    try {
      const response = await fetch(`${url}/deposit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rData),
      })
      let res = response.json()
      return res
    } catch (error) {
      throw error;
    }
  };
 export const postPaymentConfirmation = async (data: any)=> {
    // console.log(JSON.stringify(data))
    try {
      const response = await fetch(`${url}/deposit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      let res = response.json()
      return res
    } catch (error) {
      throw error;
    }
  };

  export const getWithdrawalIntent = async (data: any)=> {
    let wData = {
      amount: parseFloat(data.amount),
      blockchain_address: data.address,
      bank_name: data.bank,
      account_number: data.account_number,
      name_on_acct: data.account_name,
      phone_number: data.phone,
      transaction_narration: data.description
    }
    // console.log(wData)
    try {
      const response = await fetch(`${url}/withdrawal`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(wData),
      })
      let res = response.json()
      return res
    } catch (error) {
      throw error;
    }
};

export  const getTransactionStatus = async (transactionId: string) => {
    // console.log(transactionId)
    let transactionData = {
      transactionId: transactionId,
     
    }
    // console.log(transactionData)
    try {
      const response = await fetch(`${url}/transactionStatus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transactionData),
      })
      let res = response.json()
      // console.log(res)
      return res

    } catch (error) {
      console.log(error)
      throw error;
    }
};