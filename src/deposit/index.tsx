import React, {useState} from 'react';
import { currencyFormatter } from '../withdrawal';
import Image from '../withdrawal/bg';
import { getDepositIntent, postPaymentConfirmation } from '../api';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import {FiCopy} from 'react-icons/fi';
// import { useSearchParams } from 'react-router-dom';

type DepositModalProps = {
  minDeposit: any;
};

type depositDataProps = {
  bank_name: string;
  amount_to_pay: bigint;
  account_number: string | any;
  phoneNumber: string;
  narration: string;
  memo: string;
  fee: string;
  amount: bigint;
  message: string;
} | any;

export const copyToClipboard = (text: string)=>{
  navigator.clipboard.writeText(text);
}

const DepositModal= ({minDeposit}:DepositModalProps) => {
  const url = (new URL(window.location.href)).searchParams;
  const transaction_id = url.get("transaction_id")
  const [isLoading, setIsLoading] = useState(false)
  const [next, setNext] = useState(1);
  const [form, setForm] = useState({
    address: '',
    amount:'',
    bank:'',
    description:'',
  });
  const [isExpired, setIsExpired] = useState(false)
  const [error, setError] = useState("")
  const [errorAsset, setErrorAsset] = useState([])
  const [depositData, setDepositData] = useState<depositDataProps>()
  const [paymentMsg, setPaymentMsg] = useState("")
  const [copyData, setCopyData] = useState({
    account_number: 'Copy',
    NGNALLOW: 'Copy',
    NGNLICENSE: 'Copy',
    NGN: 'Copy'
  });

  const mappable = [
    {
        id: 1,
        type:"text",
        name:"address",
        placeholder:"Wallet Address",
        value: form.address,
        test_id: "form"
    },
    {
        id: 2,
        type:"text",
        name:"amount",
        placeholder:"Deposit Amount",
        value:form.amount,
        test_id: "form"
    },
    {
      id: 3,
      type:"text",
      name:"bank",
      placeholder:"Deposit Bank Name",
      value:form.bank,
      test_id: "form"
    },
    {
      id: 4,
      type:"text",
      name:"description",
      placeholder:"Transaction Description",
      value:form.description,
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
  setError("")
  setErrorAsset([])
    setNext(prev => prev - 1)
}



const handleConfirmation=()=>{
  const data = {
    bank_name: depositData?.bank_name,
    amount: depositData?.amount_to_pay.toString(),
    account_number:depositData?.account_number,
    phone_number:depositData?.phoneNumber,
    blockchain_address: form?.address,
    transaction_narration:depositData?.narration,
    memo:depositData?.memo,
  }
  // console.log(data, "payment details")
  postPaymentConfirmation(data).then((res:any)=>{
    console.log(res, "payment confirmation")
    if (res?.error){
      if (typeof res?.error === "string") {
        setError(res?.error)
        console.log(res)
      }
    }
    else{
      setPaymentMsg(res?.message)
    }
  })
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

const handleDepositIntent = ()=>{
  setError("")
  setErrorAsset([])
  setIsLoading(true)
  getDepositIntent(form, transaction_id).then((res:any)=>{
    setIsLoading(false)
    if (res?.error){
      if (typeof res?.error === "string") {
        setError(res?.error)
        console.log(res)
      }
      if (res?.assets){
        setErrorAsset(res?.assets)
      }
    }
    else{
      // console.log(res)
      setDepositData(res)
      setNext(3)
    }
  });

}
  return (
    <>
    <div className="bg-white w-[100%]  md:w-[35%] py-4 px-[2.5%] rounded">

        <div className="w-full p-3 flex flex-row bg-[#062638] rounded-lg">
          <div className="flex text-sm flex-col justify-start">
          <p className="text-white font-thin mb-2 text-left">Make Deposit</p>
            <p className="text-white font-thin text-left md:text-xs text-[0.7rem]">
              {next === 1 && "Please kindly fill in the necessary details for your deposit below."}
              {next === 2 && "Please confirm the details inputted for your deposit below."}
              {next === 3 && "You can buy your cowry token by depositing into the IFP account below."}
            </p>
          </div>
          <Image />
        </div>
        {error !== "" && <p className="text-xs  rounded  my-2 p-2 text-center bg-[#FCF4EA] text-[#818181]">{error}</p>}
        {errorAsset?.length >0 &&
          errorAsset?.map(({code, issuer})=>{
            return (
              <div key={code} className="flex flex-row justify-between items-center px-2 rounded bg-[#FCF4EA] w-full">
                <p className=" text-xs font-thin text-[#818181]">{code}:</p>
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
              className={`px-4 border-1 h-[45px] ${name ==="amount" && minDeposit !== null  && parseFloat(minDeposit) > parseFloat(form.amount)? "bg-[#FBE1E1]" : "bg-[#EDEDED]"} text-black w-full md:w-[100%] text-xs  font-thin rounded`}
            />
            {name === "amount" && parseInt(form.amount) < 1000 }
            <p className="text-[9px] text-[#414141] absolute top-[-0.9rem] px-1 left-0 md:left-0 bg-transparent">{placeholder}</p>
            {name ==="amount" && minDeposit !== null  && parseFloat(minDeposit) > parseFloat(form.amount) &&
            <p className="text-[9px] px-1 text-right mr-8 mb-[-1rem] bg-white text-[#E50808]">
              Sorry! you have to enter amount no less than {currencyFormatter.format(1000)}
            </p>
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
            <p className=" text-xs font-thin text-[#414141]">Total Payable</p>
            <p className=" text-xs font-medium">{currencyFormatter.format(parseFloat(form?.amount) + 200)}</p>
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <p className=" text-xs font-thin text-[#414141]">Wallet Address to Credit</p>
            <p className=" text-xs font-medium text-[#21C460]">{form?.address?.substring(0, 5)}...{form?.address?.substring(form?.address?.length - 4)}</p>
            
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <p className=" text-xs font-thin text-[#414141]">Paying Bank</p>
            <p className=" text-xs font-medium ">{form?.bank}</p>
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
        className={`${minDeposit !== null && parseFloat(minDeposit) > parseFloat(form.amount) || form.bank === '' || form.description === '' ? "bg-gray-300 text-black" :"bg-[#062638] mt-2 text-white"} rounded px-4 py-2 text-xs`}
        disabled={minDeposit !== null && parseFloat(minDeposit) > parseFloat(form.amount) || form.bank === '' || form.description === ''  ? true: false} 
        onClick={()=>{
          if (next === 1){
            setNext(2)
          }
          else if (next === 2) {handleDepositIntent()}
        }}
        >
          {next === 1 && "Proceed"}
          {next === 2 && !isLoading && "Confirm Deposit"}
          {next === 2 && isLoading && "Confirming..."}
        </button>
        {minDeposit !== null && parseFloat(minDeposit) <= parseFloat(form.amount) &&
        <p className="font-thin text-xs text-[#818181]">You will receive <span className="text-[#062638] font-medium">{currencyFormatter.format(parseFloat(form.amount))}</span> into your Wallet </p>
        }
        </>
      }
      {next == 3 && 
        <>
        <p className="text-xs my-2 bg-[#E4F8EC] text-[#818181] p-2 rounded">{paymentMsg !== "" && paymentMsg}</p>
        <div className="border-[1px] border-[#F2F2F2] rounded-xl w-full p-4">
          {paymentMsg === "" && 
            <p className="text-xs my-2 bg-[#E4F8EC] text-[#818181] p-2 rounded">{depositData?.message}</p>
          }
          <div className="flex flex-col justify-center items-center my-1">
            <p className=" text-xs font-thin text-[#414141]">Total Payable Amount</p>
            <p className=" text-lg font-medium">{currencyFormatter.format((depositData?.amount_to_pay || 0))}</p>
            <div className="flex flex-row justify-center items-center">
              <p className=" mr-2 font-thin text-[9px] text-[#818181]">Amount: <span className="text-[#21C460]">{currencyFormatter.format((depositData?.amount|| 0))}</span></p> 
              <span className="text-[#818181] text-xs">|</span>
              <p className=" ml-2 font-thin text-[9px] text-[#818181]">Transaction fee: <span className="text-[#21C460]">{currencyFormatter.format((parseFloat(depositData?.fee)|| 0))}</span></p>
            </div>

          </div>
          <div className="flex flex-row justify-between items-center my-1">
            <p className=" text-xs font-thin text-[#414141]">IFP Account No</p>
            <p className=" text-xs font-medium flex flex-row items-center">
              <FiCopy id="account_number" data-tooltip-content={copyData.account_number}  className="mr-1" 
              onClick={()=>{
                copyToClipboard(depositData?.account_number)
                handleTooltip("account_number")
              }}/>
              {depositData?.account_number}
            </p>
            <ReactTooltip anchorId="account_number" />
          </div>
          <div className="flex flex-row justify-between items-center my-1">
            <p className=" text-xs font-thin text-[#414141]">Memo</p>
            <p className=" text-xs font-medium">{depositData?.memo}</p>
          </div>
          <div className="flex flex-row justify-between items-center my-1">
            <p className=" text-xs font-thin text-[#414141]">Description/Narration</p>
            <p className=" text-xs font-medium ">{depositData?.narration}</p>
          </div>
          <div className="flex flex-row justify-between items-center my-1">
            <p className=" text-xs font-thin text-[#414141]">Bank Name</p>
            <p className=" text-xs font-medium ">{depositData?.bank_name}</p>
          </div>
          <div className="flex flex-row justify-between items-center my-1">
            <p className=" text-xs font-thin text-[#414141]">Provider Number</p>
            <p className=" text-xs font-medium ">{depositData?.phoneNumber}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center my-1">
          {isExpired ? 
          <p className="font-thin text-xs text-red-400">Oops! You have to try again</p>
          :
            paymentMsg === "" &&
            <>
              <button 
              className="border-[#21C460] border mt-2 mr-2 rounded px-4 py-2 text-xs text-[#21C460]"
              onClick={()=>null}
            >
              Report Problem
            </button>
            <button 
              data-testid="final_submit_btn"
              className="bg-[#21C460] mt-2 ml-2 rounded px-4 py-2 text-xs text-white"
              onClick={handleConfirmation}
            >
              Payment Made
            </button>
            </>
            
          }
        </div>
        {/* {paymentMsg === "" && !isExpired &&
        <div className="flex flex-col justify-center items-center mt-2">
          <CountdownTimer  timer={timer} setIsExpired={setIsExpired}/>
          <p className="font-thin text-[9px] text-[#818181]">Transaction ETA</p>
        </div>
        } */}
        </>
      }
      {next !== 1  && <p className='cursor-pointer text-[#818181] font-thin text-sm' onClick={handleBack}>Back</p>}
      </div>
    </div>
    <footer className=' text-[#062638] text-xs mt-4'>
      Powered by  {' '} © {' '}
      
      <a href='https://cowryprotocol.io/'>
        Cowry Protocol  {new Date().getFullYear()}
      </a>
    </footer>
  </>
  );
}


export default DepositModal;
