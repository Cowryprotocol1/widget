import React, {useState} from 'react';
import Image from './bg';
import { getTransactionStatus, getWithdrawalIntent } from '../api';
import { copyToClipboard } from '../deposit/index';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import {FiCopy} from 'react-icons/fi';

type WithdrawModalProps = {
  UserWalletBalance: any;
}
type userDetailsProps = {
  bank_name: string;
  account_number: bigint;
  name_on_acct: string;
  phone_number: string;
  blockchain_address: string;
  transaction_narration: string;
  amount: number;
  expected_amount_with_fee: number;
  eta: string;
}
type withdrawDataProps = {
  user_details: userDetailsProps;
  memo: string;
  amount: any;
  message: string;
  deposit_asset_issuer: string;
  blockchain_address: string;
  deposit_asset_code: string;
} | any

export const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
  });


const WithdrawModal= ({UserWalletBalance}:WithdrawModalProps) => {

  const [isLoading, setIsLoading] = useState(false)
  const [next, setNext] = useState(1);
  const [form, setForm] = useState({
    address: '',
    amount:'',
    bank:'',
    description:'',
    account_number: '',
    account_name: '',
    phone: ''
  });
  const [isExpired, setIsExpired] = useState(false)
  const [error, setError] = useState("")
  const [withdrawData, setWithdrawData] = useState<withdrawDataProps>()
  const [paymentMsg, setPaymentMsg] = useState("")
  const [errorAsset, setErrorAsset] = useState([])
  const [copyData, setCopyData] = useState({
    blockchain_address: 'Copy',
    deposit_asset_issuer:'Copy',
    memo:'Copy',
    NGNALLOW: 'Copy',
    NGNLICENSE: 'Copy',
    NGN: 'Copy'
  });

  const mappable = [
    {
        id: 1,
        type:"text",
        name:"amount",
        placeholder:"Withdraw Amount",
        value: form.amount,
        test_id: "form"
    },
    {
        id: 2,
        type:"text",
        name:"bank",
        placeholder:"Bank Name",
        value:form.bank,
        test_id: "form"
    },
    
    {
      id: 3,
      type:"text",
      name:"description",
      placeholder:"Transaction Description",
      value:form.description,
      test_id: "form"
    },
    {
      id: 4,
      type:"text",
      name:"account_number",
      placeholder:"Account Number",
      value:form.account_number,
      test_id: "form"
    },
    {
      id: 5,
      type:"text",
      name:"account_name",
      placeholder:"Account Name",
      value:form.account_name,
      test_id: "form"
    },
    {
      id: 6,
      type:"text",
      name:"phone",
      placeholder:"Phone Number",
      value:form.phone,
      test_id: "form"
    },
    {
      id: 7,
      type:"text",
      name:"address",
      placeholder:"Wallet Address to withdraw from",
      value:form.address,
      test_id: "form"
    },
]

const handleChange = (e: React.ChangeEvent<HTMLInputElement> | any)=>{
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
}

const handleBack=()=>{
    setNext(prev => prev - 1)
}



const handleTooltip = (id:string)=>{
  setCopyData({
    ...copyData,
    [id]: "Copied!"
  })
  setTimeout(() => {
    setCopyData({
      ...copyData,
      [id]: "Copy!"
    })
  }, 2000);
}

const handleConfirmation=()=>{
  getTransactionStatus(withdrawData?.memo).then((res: any) => {
    setPaymentMsg(res.msg)
  })
  
}
const handleWithdrawIntent =()=>{
  setError("")
  setErrorAsset([])
  setIsLoading(true)
  getWithdrawalIntent(form).then(res=>{
    setIsLoading(false)
    if (res?.error){
      if (typeof res?.error === "string") {
        setError(res?.error)
        // console.log(res)
      }
      if (res?.assets){
        setErrorAsset(res?.assets)
      }
    }
    else{
      // console.log(res)
      setWithdrawData(res)
      setNext(3)
      setPaymentMsg(res?.message)
    }
  })
}

  return (
    <>
    <div className="bg-white  xs:w-[100%]  md:w-[35%] py-4 px-[2.5%] rounded mt-12">

        <div className="w-full p-3 flex flex-row bg-[#062638] rounded-lg">
          <div className="flex text-sm flex-col justify-start">
            <p className="text-white font-thin mb-2 text-left">Request Withdraw</p>
            <p className="text-white font-thin text-left md:text-xs text-[0.7rem]">
              {next === 1 && "You can withdraw from your cowry account by paying into the wallet details given below."}
              {next === 2  && "Please confirm withdrawal details below."}
              {next === 3  && "Please confirm withdrawal details below."}
            </p>
          </div>
          <Image />
        </div>

        {error !== "" && <p className="text-xs rounded  my-2 p-2 text-center bg-[#FCF4EA] text-[#818181]">{error}</p>}
        {errorAsset?.length >0 &&
          errorAsset?.map(({code, issuer})=>{
            return (
              <div key={code} className="flex flex-row justify-between items-center px-2 rounded bg-[#FCF4EA] w-full">
                <p className=" text-[0.65rem] font-thin text-[#818181]">{code}:</p>
                <input
                  type="text" 
                  value={issuer}
                  disabled={true}
                  className="bg-transparent border-1 h-[45px]  border-[#FCF4EA] text-[#818181] w-full md:w-[85%] text-[0.65rem]  font-thin rounded"
                />
                <FiCopy id={code} data-tooltip-content={copyData?.[code]} 
                    onClick={()=>{
                      copyToClipboard(issuer)
                      handleTooltip(code)
                    }} 
                    className="mr-1 text-[#818181]"/>
                    <ReactTooltip anchorId={code} />
                </div>
            )
          })
        }
      
      <div className="flex flex-col items-center gap-6 mt-8  w-[100%]">
        { next ===  1 && mappable.map(({type, placeholder,name, value, id, test_id})=>{
          return (
            <div key={id} className="w-[100%] relative mb-2" >
            <input
              key={id} 
              type={type} 
              name={name}
              placeholder={placeholder}
              value={value || ''}
              data-testid={test_id}
              maxLength={name === "account_number" ? 10 : 100}
              onChange={handleChange}
              className={`px-4 border-1 h-[45px] ${name ==="amount" && UserWalletBalance !== null  && parseFloat(UserWalletBalance) < parseFloat(form.amount)? "bg-[#FBE1E1]" : "bg-[#EDEDED]"} text-black w-full md:w-[100%] text-xs  font-thin rounded`}
            />

            <p className="text-[9px] text-[#414141] absolute top-[-0.9rem] px-1 left-0 md:left-0 bg-transparent">{placeholder}</p>
            {name === "amount" &&
            <p className="text-[9px] text-[#414141]  px-1 text-right mb-[-1rem] bg-white">
              Wallet balance:{UserWalletBalance !== null  ? <span className="text-[#21C460]">
              {currencyFormatter.format(UserWalletBalance)}
              </span>
            :" ₦0.00"}</p>
            }
            </div>
          )
        })
 
      }
      {next == 2 && 
        <>
        <div className="border-[1px] border-[#F2F2F2] rounded-xl w-full p-4">
          
          <div className="flex flex-row justify-between items-center my-2">
            <p className=" text-xs font-thin text-[#414141]">Transaction Amount</p>
            <p className=" text-xs font-thin">{currencyFormatter.format(parseFloat(form?.amount)|| 0.00)}</p>
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <p className=" text-xs font-thin text-[#414141]">Transaction fees</p>
            <p className=" text-xs font-thin">{currencyFormatter.format(200)}</p>
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <p className=" text-xs font-thin text-[#414141]">Total Withrawable</p>
            <p className=" text-xs font-medium">{currencyFormatter.format(parseFloat(form?.amount) + 200)}</p>
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <p className=" text-xs font-thin text-[#414141]">Account Number</p>
            <p className=" text-xs font-medium text-[#21C460]">{form?.account_number}</p>
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <p className=" text-xs font-thin text-[#414141]">Account Name</p>
            <p className=" text-xs font-medium ">{form?.account_name}</p>
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <p className=" text-xs font-thin text-[#414141]">Description</p>
            <p className=" text-xs font-medium ">{form?.description}</p>
          </div>
        </div>
        </>
      }
      

      {next !== 3 &&
        <>
        <button 
        data-testid="submit_btn"
        className={`${UserWalletBalance !== null && parseFloat(UserWalletBalance) < parseFloat(form.amount) || form.bank === '' || form.account_name === '' || form.account_number === '' || form.account_number.length < 10 || form.phone === '' || form.description === '' || form.amount === '' || form.address === '' ? "bg-gray-300 text-black" :"bg-[#062638] mt-2 text-white"} rounded px-4 py-2 text-xs`}
        disabled={UserWalletBalance !== null && parseFloat(UserWalletBalance) < parseFloat(form.amount) || form.bank === '' || form.account_name === '' || form.account_number === '' || form.account_number.length < 10 || form.phone === '' || form.description === '' || form.amount === '' || form.address === '' ? true: false} 
        onClick={()=>{
          if (next === 1){
            setNext(2)
          }
          else if (next === 2) {handleWithdrawIntent()}
        }}
        >
          {next === 1 && "Withdraw"}
          {next === 2 && !isLoading && "Confirm Withdrawal"}
          {next === 2 && isLoading && "Confirming..."}
        </button>
        {UserWalletBalance !== null && parseFloat(UserWalletBalance) >= parseFloat(form.amount) &&
        <p className="font-thin text-xs text-[#818181]">You will receive <span className="text-[#062638] font-medium">{currencyFormatter.format(parseFloat(form.amount))}</span> into your fiat account </p>
        }
        </>
      }
      {next == 3 && 
        <>
        <p className="text-xs my-2 bg-[#E4F8EC] text-[#818181] p-2 rounded">{paymentMsg !== "" && paymentMsg}</p>
        <div className="border-[1px] border-[#F2F2F2] rounded-xl w-full p-4">
        {paymentMsg === "" &&
            <p className="text-xs my-2 bg-[#E4F8EC] text-[#818181] p-2 rounded">{withdrawData?.message}</p>
          }
          <div className="flex flex-col justify-center items-center my-1">
            <p className=" text-xs font-thin text-[#414141]">Total Withdrawable Amount</p>
            <p className=" text-lg font-medium">{currencyFormatter.format((withdrawData?.user_details?.expected_amount_with_fee || 0))}</p>
            <div className="flex flex-row justify-center items-center">
              <p className=" mr-2 font-thin text-[9px] text-[#818181]">Amount: <span className="text-[#21C460]">{currencyFormatter.format((withdrawData?.user_details?.amount || 0))}</span></p> 
              <span className="text-[#818181] text-xs">|</span>
              <p className=" ml-2 font-thin text-[9px] text-[#818181]">Transaction fee: <span className="text-[#21C460]">{currencyFormatter.format(withdrawData?.user_details?.expected_amount_with_fee - withdrawData?.user_details?.amount || 0)}</span></p>
            </div>

          </div>
   
          <div className="flex flex-row justify-between items-center my-2">
            <p className=" text-xs font-thin text-[#414141]">Withdrawal Address</p>
            <p className=" text-xs font-medium flex flex-row items-center">
              <FiCopy id="blockchain_address" data-tooltip-content={copyData?.blockchain_address} 
                onClick={()=>{
                  copyToClipboard(withdrawData?.blockchain_address)
                  handleTooltip("blockchain_address")
                }} 
                className="mr-1"/>
              {withdrawData?.blockchain_address?.substring(0, 5)}...{withdrawData?.blockchain_address?.substring(withdrawData?.blockchain_address?.length - 4)}
            </p>
            <ReactTooltip anchorId="blockchain_address" />
            
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <p className=" text-xs font-thin text-[#414141]">Asset Details (Issuer)</p>
            <p className=" text-xs font-medium flex flex-row items-center">
              <FiCopy id="deposit_asset_issuer" data-tooltip-content={copyData?.deposit_asset_issuer} className="mr-1" 
                onClick={()=>{
                  copyToClipboard(withdrawData?.deposit_asset_issuer)
                  handleTooltip("deposit_asset_issuer")
                }}
              />
              {withdrawData?.deposit_asset_issuer?.substring(0, 5)}...{withdrawData?.deposit_asset_issuer?.substring(withdrawData?.deposit_asset_issuer?.length - 4)}
            </p>
            <ReactTooltip anchorId="deposit_asset_issuer" />
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <p className=" text-xs font-thin text-[#414141]">Asset Code</p>
            <p className=" text-xs font-medium flex flex-row items-center"> 
              {withdrawData?.deposit_asset_code}
            </p>
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <p className=" text-xs font-thin text-[#414141]">Memo</p>
            <p className=" text-xs font-medium flex flex-row items-center"> 
              <FiCopy id="memo" data-tooltip-content={copyData?.memo} className="mr-1" 
                onClick={()=>{
                  copyToClipboard(withdrawData?.memo)
                  handleTooltip("memo")
                }}
              />
              {withdrawData?.memo}
            </p>
            <ReactTooltip anchorId="memo" />
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <p className=" text-xs font-thin text-[#414141]">Depositing Address</p>
            <p className=" text-xs font-medium ">{withdrawData?.user_details?.blockchain_address?.substring(0, 5)}...{withdrawData?.user_details?.blockchain_address.substring(withdrawData?.user_details?.blockchain_address?.length - 4)}</p>
            
          </div>
        </div>
        <div className="flex flex-row justify-between items-center my-1">
          {isExpired ? 
          <p className="font-thin text-xs text-red-400">Oops! You have to try again</p>
          :
          paymentMsg !== "we are updating your balance right away" &&
          <>
            <button 
              className="border-[#21C460] border mt-2 mr-2 rounded px-4 py-2 text-xs text-[#21C460]"
              onClick={()=>null}
            >
              Report Problem
            </button>
            <button 
              className="bg-[#21C460] mt-2 ml-2 rounded px-4 py-2 text-xs text-white"
              onClick={handleConfirmation}
            >
              Payment Made
            </button>
          </>
          }
        </div>
          {/* {paymentMsg !== "we are updating your balance right away" && !isExpired &&
          <div className="flex flex-col justify-center items-center mt-2">
            <CountdownTimer  timer={timer} setIsExpired={setIsExpired}/>
            <p className="font-thin text-[9px] text-[#818181]">Transaction ETA</p>
          </div>
          } */}
        </>
      }
      {next !== 1 && <p className='cursor-pointer text-[#818181] font-thin text-sm' onClick={handleBack}>Back</p>}
      </div>
    </div>
    <footer className='text-[#062638] text-xs mt-4'>
      Powered by  {' '} © {' '}
      
      <a href='https://cowryprotocol.io/'>
        Cowry Protocol  {new Date().getFullYear()}
      </a>
    </footer>
    </>
  );
}


export default WithdrawModal;
