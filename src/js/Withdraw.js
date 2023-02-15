import { CLOSE_ICON } from "./assets";
import './index.css'
import ReactDOM from 'react-dom';

// import WithdrawModal from "./withdrawal/index";
import WithdrawModal from "../withdrawal";


class WithdrawalWidget {

  constructor() {
    this.open = false;
    this.initialize();

  }


  async initialize(){

    const dynamicBut = document.createElement("button");
    dynamicBut.classList.add("bg-[#2EC363]" ,"mt-4", "text-white", "rounded", "px-4", "py-2", "text-xs", "openModal");
    dynamicBut.innerHTML = "Withdraw";
    dynamicBut.setAttribute('id', 'withdraw_but')
    this.initialButton = dynamicBut;

    const modalContainer = document.createElement("div");
    modalContainer.style.position = "fixed";
    modalContainer.style.zIndex = "100";
    modalContainer.classList.add("w-full", "h-[100vh]", "bg-[#21C460]", "p-8")
    modalContainer.setAttribute('id', 'modalRoot')
    this.modalContainer = modalContainer;

    const modalInner = document.createElement("div");
    modalInner.classList.add("w-[90%]", "h-[90vh]", "bg-transparent", "flex", "flex-col", "justify-center", "items-center")
    this.modalInner = modalInner;

    const closeIconElement = document.createElement("span");
    closeIconElement.innerHTML = CLOSE_ICON;
    closeIconElement.classList.add("cursor-pointer", "bg-black", "absolute", "right-4", "top-4");
    this.closeIcon = closeIconElement;

    modalContainer.appendChild(this.closeIcon)
    modalContainer.append(modalInner);

    document.body.appendChild(dynamicBut); 
    dynamicBut.addEventListener("click", this.toggleOpen.bind(this));
    closeIconElement.addEventListener("click", this.toggleOpen.bind(this));

  }

  
  toggleOpen() {
    this.open = !this.open;
    
    if (this.open) {
      this.modalContainer.classList.add("absolute", "top-0")
      ReactDOM.render(<WithdrawModal UserWalletBalance="2000"/>, this.modalInner)
      document.body.appendChild(this.modalContainer)

    } else {
      document.body.removeChild(this.modalContainer)
    }
  }

}

export function initializeWithdrawalWidget() {
  return new WithdrawalWidget();
}
