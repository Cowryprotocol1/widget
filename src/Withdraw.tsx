import { CLOSE_ICON } from "./assets";
import './index.css'
import ReactDOM from 'react-dom';
import WithdrawModal from "./withdrawal";


class WithdrawalWidget {
  open: boolean;
  widgetIcon: any;
  initialButton: any;
  modalContainer: any;
  closeIcon: any;
  widgetContainer: any;
  modalInner : any;
  showButton: boolean;

  constructor() {
    this.open = false;
    this.showButton = false;
    this.initialize();

  }


  async initialize(){

    const dynamicBut: HTMLElement = document.createElement("button");
    dynamicBut.classList.add("bg-[#2EC363]", "hidden" ,"mt-4", "text-white", "rounded", "px-4", "py-2", "text-xs", "openModal");
    dynamicBut.innerHTML = "Withdraw";
    dynamicBut.setAttribute('id', 'withdraw_button')
    this.initialButton = dynamicBut;

    const modalContainer: HTMLElement = document.createElement("div");
    modalContainer.style.position = "fixed";
    modalContainer.style.zIndex = "100";
    modalContainer.classList.add("w-full", "h-[100vh]", "bg-[#f1f1f1]", "p-8", "overflow-x-auto")
    modalContainer.setAttribute('id', 'modalRoot')
    this.modalContainer = modalContainer;

    const modalInner: HTMLElement = document.createElement("div");
    modalInner.classList.add("md:w-[90%]", "w-100%","h-[auto]", "md:h-[90vh]", "bg-transparent", "flex", "flex-col", "justify-center", "items-center")
    this.modalInner = modalInner;

    const closeIconElement: HTMLElement = document.createElement("span");
    closeIconElement.innerHTML = CLOSE_ICON;
    closeIconElement.classList.add("cursor-pointer", "flex","p-4","rounded-full", "flex-col","items-center","justify-center", "bg-black", "absolute", "right-4", "top-4");
    this.closeIcon = closeIconElement;

    modalContainer.appendChild(this.closeIcon)
    modalContainer.append(modalInner);

    // document.body.appendChild(dynamicBut); 
    // dynamicBut.addEventListener("click", this.toggleOpen.bind(this));
    // closeIconElement.addEventListener("click", this.toggleOpen.bind(this));
    this.modalContainer.classList.add("absolute", "top-0")
    ReactDOM.render(<WithdrawModal UserWalletBalance="2000" />, this.modalInner)
    document.body.appendChild(this.modalContainer)

  }

  show() {
    this.showButton = !this.showButton;
    
    // if (this.showButton) {
    //   this.initialButton.classList.add("block")
    //   this.initialButton.classList.remove("hidden")

    // } else {
    //   this.initialButton.classList.add("hidden")
    //   this.initialButton.classList.remove("block")
    // }
  }


  // toggleOpen() {
  //   this.open = !this.open;
    
  //   if (this.open) {
  //     this.modalContainer.classList.add("absolute", "top-0")
  //     ReactDOM.render(<WithdrawModal UserWalletBalance="2000"/>, this.modalInner)
  //     document.body.appendChild(this.modalContainer)

  //   } else {
  //     document.body.removeChild(this.modalContainer)
  //   }
  // }

}

export function initializeWithdrawalWidget() {
  return new WithdrawalWidget();
}
