import './withdraw.css'
import { FaToggleOn } from "react-icons/fa";
export const Withdraw = () => {
  return (
   <div className="widthdraw_container">
    <section className="withdrawSection">
    <div className="widthdrawSelect_div">
                <select className='withdrawSelectBar' name="" id="" ><option value="btc" className="withdrawbtc">Bitcoin (BTC)</option>
            <option value="eth" className="">span(ETH)</option>
            <option value="ltc" className="">Litecoin (LTC)</option></select>
              </div>
              
         
         <div className='withdraw_toggle_Content'>
          <p className='FaucetPay'> FaucetPay (Less Fees)</p>
           <FaToggleOn size={35}/>   {/* toggle button to be added  */}
          <p className='direct_withdraw'>Direct Withdrawal</p>
         </div>
         
     <div className="withdraw_address_input_div">
      <input className='withdraw_address_input' placeholder='With Drawal Address' type="text" />
      </div>         
     
      <div className="widthdraw_amount_form">
      <div className="withdraw_amount_field"> 
                <input type="text" id="withdrawal-amount" placeholder="Withdrawal Amount"/>
                
            </div>
            <button className='withdrawAllBtn'>ALL</button>
            <button className='withdrawMinBtn'>MIN</button> 
      </div>
            <div className="withdraw_fee_info">
                    <p>Fee: 0.003 BTC</p>
                    <p>You Receive: 0.017 BTC</p>
                </div>

            <div className="withdraw_btn_div"><button className="withdrawBtn">PLACE WITHDRAW</button></div>    
    </section>
   </div>
  )
}
