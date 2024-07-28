import './deposit.css'
import { FaCopy } from "react-icons/fa";

export const Deposit = () => {
  return (
    <div className="deposit_container">
      <section className="depositSection">
         <div className="depositContent_div">
              <div className="coinOptionInput_div">
                <select className='depositSelectBar' name="" id="" ><option value="btc" className="btc">Bitcoin (BTC)</option>
            <option value="eth" className="eth">span(ETH)</option>
            <option value="ltc" className="ltc">Litecoin (LTC)</option></select>
              </div>

             <div className="depositBarCode_div">
              <div className="barCodeImage_div">
                <img src="https://i.postimg.cc/0NC4pVRV/Rectangle-39232.png" alt="" />
               
              </div>
             </div>

             <div className="generateDepositLink_div">
              <input type="text" /> <FaCopy />
             </div>

              <p className="depositTextContent">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore nihil itaque impedit mollitia numquam atque 
                accusamus cumque, ducimus officia corrupti. Modi delectus quasi amet?</p>

              <div className="depositBtn_div"><button className="deposiBtn">PLACE WITHDRAW</button></div>
         </div>
      </section>
    </div>
  )
}
