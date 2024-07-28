import './withdraw.css'

export const Withdraw = () => {
  return (
   <div className="widthdraw_container">
    <section className="withdrawSection">
    <div className="widthdrawSelect_div">
                <select className='withdrawSelectBar' name="" id="" ><option value="btc" className="withdrawbtc">Bitcoin (BTC)</option>
            <option value="eth" className="">span(ETH)</option>
            <option value="ltc" className="">Litecoin (LTC)</option></select>
              </div>
              
         
         <div className='toggleContent'>
          <p> FaucetPay (Less Fees)</p>
          <p>Direct Withdrawal</p>
         </div>
         
     <div className="withdraw_address_input_div"><input className='withdraw_address_input' placeholder='With Drawal Address' type="text" /></div>         
     <div className="form-group">
                <label >Withdrawal Amount</label>
                <input type="number" id="withdrawal-amount" placeholder="Enter amount"/>
               
            </div>

            <div className="fee-info">
                    <p>Fee: 0.003 BTC</p>
                    <p>You Receive: 0.017 BTC</p>
                </div>
    </section>
   </div>
  )
}
