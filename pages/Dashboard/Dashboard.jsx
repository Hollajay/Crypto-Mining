
import ApexChart from './ApexChart/DashboardChart'
import './dashboard.css'

export const Dashboard = () => {
  return (
     <div className='dashboard_Page_container'>
        <section className="dashboardSections">
          <div className="left_dashboard_section">
           <div className="left_section_sub_div">         {/*  sub div    */}
             
            <div className="ledger_container">
              <div className="total_asset_div">
                <div className="total_asset_img_div"><img src="https://i.postimg.cc/hjxMPGv4/moneys-1.png" alt="" className="total_asset_img" /></div>
                 <div className="total_asset_text_content">
                  <h5>Total assets</h5>
                  <h1>$87.743</h1>
                 </div>
              </div>
              <div className="total_deposit_div">
                <div className="total_deposit_img_div"><img src="https://i.postimg.cc/cCShKNtR/wallet-money-1.png" alt="" className="total_deposit_img" /></div>
                 <div className="total_deposit_text_content">
                  <h5>Total deposit</h5>
                  <h1>$87.743</h1>
                 </div>
              </div>
              <div className="AYP_div">
                <div className="AYP_img_div"><img src="https://i.postimg.cc/FzVZ3n02/chart-square-1.png" alt="" className="AYP_img" /></div>
                 <div className="AYP_text_content">
                  <h5>Total assets</h5>
                  <h1>$87.743</h1>
                 </div>
              </div>
            </div>

            <section className="ledger_select_section">
                   <div className='ledger_select_div'><select name="" id="">
                    <option value="">ETH</option>
                    <option value="">BTC</option>
                    </select></div>
                   <h1>$78,347</h1>
              </section>

              <div className="chart_section">
               <ApexChart/>
              </div>
            </div> 

            <section className='token_section'>
               <h1 className='token_header'>Token</h1>
               <div className='token_content_div'>
                <div className='token_content_header'>
                  <p className='token_header_row'>Name</p>
                  <p className='token_header_row'>Balance</p>
                  <p className='token_header_row'>Profit</p>
                  <p className='token_header_row'>Action</p>
                </div> 

                <div className="token_row_div">
                  <div><div className='token_row_img_div'><img src="https://i.postimg.cc/L8rtWp4z/bitcoin-2.png" alt="" /><h3>Bitcoin</h3></div></div>
                  <h3 className='token_row_data'>1</h3>
                  <h3  className='token_row_data'>0.003 BTC</h3>
                  <div  className='token_row_data'><button className='token_row_btn'>Add</button></div>
                </div>
               
                <div className="token_row_div">
                  <div><div className='token_row_img_div'><img src=" https://i.postimg.cc/8CSFWPPn/ethereum-classic.png" alt="" /><h3>Ethereum</h3></div></div>
                  <h3 className='token_row_data'>2</h3>
                  <h3 className='token_row_data'>0.003 ETH</h3>
                  <div className='token_row_data'><button className='token_row_btn'>Add</button></div>
                </div>
               </div>
            </section>
          </div>
          <div className="right_dashboard_section">
       
              <section className='dashboard_asset_section'>
                   <h1>Asset</h1>

                  <div className='asset_coin_container'>  
                       {/* dashboard right section asset row div  for each coin*/}

                     <div className="asset_coins_row">
                      <div className='asset_coins_div'>
                        <div className='asset_coins_img_div'>
                        <img src="https://i.postimg.cc/L8rtWp4z/bitcoin-2.png" alt="" />
                        <h4>Bitcoin</h4>
                        </div>
                         <p>$23.3B</p>
                        </div>
                      <div className='asset_coins_percentage'>
                        <img src="https://i.postimg.cc/NFvTyGFy/Rectangle-112.png" alt="" />
                         <h5>71.66%</h5>
                      </div>
                     </div>

                     <div className="asset_coins_row">
                      <div className='asset_coins_div'>
                        <div className='asset_coins_img_div'>
                        <img src="https://i.postimg.cc/9QDGNn6Q/Frame-6.png" alt="" />
                        <h4>Ethereum</h4>
                        </div>
                         <p>$71.68B</p>
                        </div>
                      <div className='asset_coins_percentage'>
                        <img src="https://i.postimg.cc/5N7BgVkr/Rectangle-112-1.png" alt="" />
                         <h5>82.66%</h5>
                      </div>
                     </div>

                     <div className="asset_coins_row">
                      <div className='asset_coins_div'>
                        <div className='asset_coins_img_div'>
                        <img src="https://i.postimg.cc/wMWmwXFN/Frame-6-1.png" alt="" />
                        <h4>Shiba</h4>
                        </div>
                         <p>$23.3B</p>
                        </div>
                      <div className='asset_coins_percentage'>
                        <img src="https://i.postimg.cc/LX3f1K1N/Rectangle-112-2.png" alt="" />
                         <h5>71.66%</h5>
                      </div>
                     </div>

                     <div className="asset_coins_row">
                      <div className='asset_coins_div'>
                        <div className='asset_coins_img_div'>
                        <img src="https://i.postimg.cc/s2FZHDPT/Frame-6-2.png" alt="" />
                        <h4>Solana</h4>
                        </div>
                         <p>$23.3B</p>
                        </div>
                      <div className='asset_coins_percentage'>
                        <img src="https://i.postimg.cc/NFvTyGFy/Rectangle-112.png" alt="" />
                         <h5>71.66%</h5>
                      </div>
                     </div>

                     <div className="asset_coins_row">
                      <div className='asset_coins_div'>
                        <div className='asset_coins_img_div'>
                        <img src="https://i.postimg.cc/KjYK3KF8/Frame-6-3.png" alt="" />
                        <h4>Tether</h4>
                        </div>
                         <p>$23.3B</p>
                        </div>
                      <div className='asset_coins_percentage'>
                        <img src="https://i.postimg.cc/k4qR91p8/Rectangle-112-4.png" alt="" />
                         <h5>71.66%</h5>
                      </div>
                     </div>

                  </div>

                     <div className="view_all_asset_coin"><button className="asset_view_all_btn">View All</button></div> 
              </section>
              <section className='community_section'>
               <div className=''><img src="https://i.postimg.cc/fbFqrd26/Group-71.png" alt="" />  </div>    
               <h1 className='community_header_text'>Join our community</h1>
               <p className='community_text_content'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <div className="community_btn_div"><button className="community_btn">Join Now</button></div>

             
              </section>
            </div>
       
        </section>
     </div>

  )
}
