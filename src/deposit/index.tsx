import React, {useState} from 'react';
import Deposit from '../assets/deposit.png'
import { currencyFormatter } from '../withdrawal';
import { HiOutlineArrowSmLeft} from 'react-icons/hi';

type DepositModalProps = {
  minDeposit: any;
}

const DepositModal= ({minDeposit}:DepositModalProps) => {

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
    setNext(prev => prev - 1)
}



const handleDepositIntent =()=>{
    setNext(3)
  console.log("Deposit Intent", form)
}

  return (
    <div className="bg-white  w-[35%] py-4 px-[2.5%] rounded">

        <div className="w-full p-3 flex flex-row bg-[#062638] rounded-lg">
          <div className="flex text-sm flex-col justify-start">
          <p className="text-white font-thin mb-2 text-left">Make Deposit</p>
            <p className="text-white font-thin text-left md:text-xs text-[0.7rem]">
              {next === 1 && "Please kindly fill in the necessary details for your deposit below."}
              {next === 2 && "Please confirm the details inputted for your deposit below."}
              {next === 3 && "You can buy your cowry token by depositing into the IFP account below."}
            </p>
          </div>
          <img 
            src={Deposit}
            alt="logo_name_c"
            className="w-[65px] md:w-[90px]"
          />
        </div>

      
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
            <p className="text-[9px] text-[#414141] absolute top-[-0.5rem] md:top-[-0.9rem] px-1 left-0 md:left-0 bg-transparent">{placeholder}</p>
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
            <p className=" text-xs font-thin text-[#414141]">Total Withrawable</p>
            <p className=" text-xs font-medium">{currencyFormatter.format(parseFloat(form?.amount) + 200)}</p>
          </div>
          <div className="flex flex-row justify-between items-center my-2">
            <p className=" text-xs font-thin text-[#414141]">Account Number</p>
            <p className=" text-xs font-medium text-brand_primary_green">{form?.account_number}</p>
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
      {next === 2 && <p className='cursor-pointer text-[#818181] font-thin text-sm' onClick={handleBack}>Back</p>}
      </div>
    </div>

  );
}


export default DepositModal;
