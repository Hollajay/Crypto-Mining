
import ApexChart from './ApexChart/DashboardChart'
import './dashboard.css'

export const Dashboard = () => {
  return (
     <div className='dashboard_Page_container'>
        <section className="dashboardSections">
          <div className="left_dashboard_section">
           <div className="left_section_sub_div">   {/*  sub div    */}
            <div className="ledger_container">
              <div className="total_asset_div">
                <div className="total_asset_img_div"><img src="https://i.postimg.cc/hjxMPGv4/moneys-1.png" alt="" className="total_asset_img" /></div>
                 <div className="total_asset_text_content">
                  <h6>Total assets</h6>
                  <h1>$87.743</h1>
                 </div>
              </div>
              <div className="total_deposit_div">
                <div className="total_deposit_img_div"><img src="https://i.postimg.cc/cCShKNtR/wallet-money-1.png" alt="" className="total_deposit_img" /></div>
                 <div className="total_deposit_text_content">
                  <h6>Total deposit</h6>
                  <h1>$87.743</h1>
                 </div>
              </div>
              <div className="AYP_div">
                <div className="AYP_img_div"><img src="https://i.postimg.cc/FzVZ3n02/chart-square-1.png" alt="" className="AYP_img" /></div>
                 <div className="AYP_text_content">
                  <h6>Total assets</h6>
                  <h1>$87.743</h1>
                 </div>
              </div>
            </div>
              <div className="chart_section">
               <ApexChart/>
              </div>
            </div> 

            <section className='token_section'>
               <h1 className='token_header'>Token</h1>
               <div className='token_content_div'>
                <div className='token_content_header'>
                  <p>Name</p>
                  <p>Balance</p>
                  <p>Profit</p>
                  <p>Action</p>
                </div> 

                <div className="token_row_div">
                  <div><div className='token_row_img_div'><img src="https://i.postimg.cc/L8rtWp4z/bitcoin-2.png" alt="" /><h3>Bitcoin</h3></div></div>
                  <h3>1</h3>
                  <h3>0.003 BTC</h3>
                  <div><button>Add</button></div>
                </div>
               
                <div className="token_row_div">
                  <div><div className='token_row_img_div'><img src=" https://i.postimg.cc/8CSFWPPn/ethereum-classic.png" alt="" /><h3>Ethereum</h3></div></div>
                  <h3>2</h3>
                  <h3>0.003 ETH</h3>
                  <div><button>Add</button></div>
                </div>
               </div>
            </section>
          </div>
          <div className="right_dashboard_section">
       
              <section className='dashboard_asset_section'>
                   <h1>Asset</h1>
              </section>
              <section className='community_section'>
                <h1>Community</h1>
              </section>
            </div>
       
        </section>
     </div>

  )
}
