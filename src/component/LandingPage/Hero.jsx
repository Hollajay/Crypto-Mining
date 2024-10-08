
import { Link } from 'react-router-dom'
import { Nav } from '../navBar/Nav'
import './hero.css'
import { FaArrowRight } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import ChartHero from './heroChart/ChartHero';



export const Hero = () => {
         
      return (
       <div className='landingPageContainer' data-aos="fade-up">
        

         {/* header section */}
     <section className='headerSection'>
    
      <div className='headerGradientBackground'><img src="https://i.postimg.cc/FKQpzcxJ/bg-img.png" alt="" /></div>
      <Nav/>
     
      <header>
        <div className='headerText'data-back="Back" data-front="Front" data-aos="fade-up">
          <h1>We make crypto <br />clear and simple </h1>
        </div>
        <div className='headerBtn'>
          <button className='getStartedBtn'>Get started</button>
        </div>

      </header>
     </section>

                      {/* block2 section */}
      <section className="Block2Section">
        <div className='block2_Divs'>
          <div className='block2Div_create block2Div' data-back="Back" data-front="Front" data-aos="fade-up">
            <div className='block2Img_div'data-aos="fade-up" ><img src="https://i.postimg.cc/Ssy9Kgpp/img.png" alt="" /></div>
            <div className='block2Text'  >
              <h1 data-aos="fade-up">Create</h1>
              <p data-aos="fade-up">Lorem, ipsum dolor sit amet conse adipi elit. Asperna numquam 
                exercitationem impedit natus consequuntur! Voluptas.</p>
                <Link><div  className='block2Link' data-aos="fade-up"><p>Get started</p><FaArrowRight /></div></Link>
            </div>

          </div>
            <div className='blockDiv_login block2Div' data-aos="fade-up">
             
              <div className='block2Img_div' data-aos="fade-up"><img src="https://i.postimg.cc/SxJDSNfG/img-1.png" alt="" /></div>
              <div className='block2Text'>
              <h1 data-aos="fade-up">Login</h1>
              <p data-aos="fade-up">Lorem, ipsum dolor sit amet conse adipi elit. Asperna numquam 
                exercitationem impedit natus consequuntur! Voluptas.</p>
            <Link><div  className='block2Link' data-aos="fade-up"><p>Find an Atm</p><FaArrowRight /></div></Link>
            </div>
            </div>
            <div className='blockDiv_manage block2Div' data-aos="fade-up">
            <div className='block2Img_div' data-aos="fade-up">  <img src="https://i.postimg.cc/PfWbT8sH/img-2.png" alt="" /> </div>     
              <div className='block2Text'>
              <h1 data-aos="fade-up">Download</h1>
              <p data-aos="fade-up">Lorem, ipsum dolor sit amet conse adipi elit. Asperna numquam 
                exercitationem impedit natus consequuntur! Voluptas.</p>
                <Link><div className='block2Link' data-aos="fade-up"><p>Download the App</p><FaArrowRight /></div></Link>
            </div>
            </div>
         
        </div>
        <div className='starsGradientImages'>
          <img src="https://i.postimg.cc/KYr68mtx/star-img-1.png" alt="" />
          <img src="https://i.postimg.cc/50sD8pPr/star-img-2.png" alt="" /></div>
      </section>
                  {/* block3 section */}
     <section className='block3Section'>
      <div className='block3_div'>
        <div className='block3Text'>
        <h1 data-aos="fade-up">A crypto mining platform that <br /> invest in you </h1>
        <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dolore suscipit <br /> quibusdam, hic est totam.</p>
        </div>
        <div className='block3Btn_div' data-aos="fade-up">
          <button className='block3Btn'>Get started</button>
        </div>
            <div className='starBackground'><img src="https://i.postimg.cc/nz1pgv3K/star-img.png" alt="" /></div>
      </div>
     </section>
      

                   {/* block 4 section  */}
    <section className='block4Section'>
      <div className='block4div_container'>
        <div className='block4Grid_div'>
          <div className='block4LeftGrid_div' data-aos="fade-up">
            <img src="https://i.postimg.cc/LsqC0msn/img-3.png" alt="image" />
          </div>
          <div className='block4RightGrid_div' >
            <div className='block4RightGridContent'>
              <h1 data-aos="fade-up">24/7 access to full <br />service costumer <br />support</h1>
              <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores libero,
                 consequatur <br /> alias fugiat doloremque ex iure voluptatum laudantium?</p>
              <div className='block4Btn_div' data-aos="fade-up"><button className='block4Btn'>Get started</button></div>
            </div>

          </div>
        </div>
      </div>
     
    </section>
    <div className='esclipseLineBackground'><img src="https://i.postimg.cc/nc4Y5MxF/bg-img-1.png" alt="" /></div>
    <div className='sideGradientBackground'><img src="https://i.postimg.cc/sxcdHsDT/bg-gradient-img-2.png" alt="" /></div>

                  {/* block5 section */}
       <section className='block5Section'>
            <div className='block5Div_container'>
              <div className='block5TextContent'>
                <h1 data-aos="fade-up">Buy and sell with the lowest <br />fees in the industry</h1>
                <p className='block5TextContentP_tag' data-aos="fade-up">Lorem, ipsum dolor sit amett. Illum commodi  quaerat quia perspiciatis fugiat
                <br />   dicta minima sit beatae deleniti?</p>
                <Link><div className='block5Link' data-aos="fade-up"><p>Learn More</p><FaArrowRight /></div></Link>
              </div>

              <div className='block5TableContent' data-aos="fade-up">
              <div className='block5TableLists'>
                <p className="block5Name_list">Bitcoin</p>
                <p className="block5Abbrev_list">BTC</p>
                <p className="block5Price_list">$58,950</p>
                <p className="block5Percent_list">+1.68%</p>
                <p className="block5Graph_list">  <ChartHero/></p>
                <div className="block5Trade_list"><p>Trade now</p><FaArrowRight /></div>
              </div>
              <div className='block5TableLists'>
                <p className="block5Name_list">Ethereum</p>
                <p className="block5Abbrev_list">ETH</p>
                <p className="block5Price_list">$58,950</p>
                <p className="block5Percent_list">+1.68%</p>
                <p className="block5Graph_list"><ChartHero/></p>
                <div className="block5Trade_list"><p>Trade now</p><FaArrowRight /></div>
              </div>
              <div className='block5TableLists'>
                <p className="block5Name_list">cardona</p>
                <p className="block5Abbrev_list">ADA</p>
                <p className="block5Price_list">$58,950</p>
                <p className="block5Percent_list">+1.68%</p>
                <p className="block5Graph_list"><ChartHero/></p>
                <div className="block5Trade_list"><p>Trade now</p><FaArrowRight /></div>
              </div>
              <div className='block5TableLists'>
                <p className="block5Name_list">Wax</p>
                <p className="block5Abbrev_list">WAXP</p>
                <p className="block5Price_list">$58,950</p>
             <p className="block5Percent_list block5Percent_decrease">-2.59%</p>           {/*   i add a styling for the decrease market percent to only this for now  */}
                <p className="block5Graph_list"><ChartHero/></p>
                <div className="block5Trade_list"><p>Trade now</p><FaArrowRight /></div>
              </div>
              <div className='block5TableLists'>
                <p className="block5Name_list">Polkadort</p>
                <p className="block5Abbrev_list">DOT</p>
                <p className="block5Price_list">$8,780</p>
                <p className="block5Percent_list">+1.68%</p>
                <p className="block5Graph_list"><ChartHero/></p>
                <div className="block5Trade_list"><p>Trade now</p><FaArrowRight />
                <div className='gradientBackground'> <img src="https://i.postimg.cc/FHzGwNH7/bg-gradient-img.png" alt="gradentBackground" /></div></div>
              </div>
              </div>

            </div>
       </section>



          {/* block6 section */}
      <section className='block6Section'>
        <div className='block6Div_container'>
          <div className='block6TextContent'>
            <h1 data-aos="fade-up">Take your first step <br />into safe,secure <br />crypto investing</h1>
            <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores, et laudantium illum,
               libero unde consequuntur ipsam repellat quae dicta possimus, aut quo.</p>
            <div><button className='block6Btn' data-aos="fade-up">Get started</button></div>
          </div>
         
          <div className='block6Img_div' data-aos="fade-up"><img src="https://i.postimg.cc/fyY1tZ9w/img-4.png" alt="image" />

         
          </div>
        </div>
      </section>
  
                         {/* block 7 section */}

      <section className='block7Section'>
        <div className='block7Div_container'>
          <div className='block7Text_div'>
            <h1 data-aos="fade-up">Receive Transmissions</h1>
             <div className='unsubscribe_div'><p data-aos="fade-up">unsubscribe at any time.</p><span data-aos="fade-up">Privacy policy <LuArrowUpRight /></span></div>
          </div>
          <div className='block7Input_div' data-aos="fade-up">
            <input type="text" placeholder='Email Address'/>
            <FaArrowRight />
          </div>
        </div>
      </section>
                                 
                                 {/* footer */}
      <footer className='footer_container'>
        <section className='footerSection'>
        <div className='footerTextContent_div'>
          <div className='footerText'>
            <p data-aos="fade-up">CoinFlip, the world leading bitcoin ATM operator, makes it so flipping
               easy to buy and sell bitcoin via cash, card, or bank transfer.</p>
            <p>Sign up to get the latest in CoinFlip news, discounts, and more.</p>
          </div>
          <div className='footerInput_div' data-aos="fade-up">
            <input type="text" placeholder='Email Address'/><FaArrowRight />
          </div>
          <span className='footer_copyright' data-aos="fade-up">© 2021 GPD Holdings, LLC FINCEN MSB</span>
        </div>
        <div className='footerList_div'>
          <h4 data-aos="fade-up">Company</h4>
            <ul className='footerList_div_ul'>
              <li className="footerlist" data-aos="fade-up">About</li>
              <li className="footerlist" data-aos="fade-up">Careers</li>
              <li className="footerlist" data-aos="fade-up">Press</li>
              <li className="footerlist" data-aos="fade-up">News</li>
              <li className="footerlist" data-aos="fade-up">Merch</li>
            </ul>
        </div>

        <div className='termsOfPolicy_div'>
          <h4 data-aos="fade-up">Privacy Policy and Terms of Service</h4>
           <ul>
            <li className="termsPolicyList" data-aos="fade-up">CoinFlip Privacy Policy</li>
            <li className="termsPolicyList" data-aos="fade-up">CoinFlip Biometrics Privacy Policy</li>
            <li className="termsPolicyList" >CoinFlip Financial Privacy Notice</li>
            <li className="termsPolicyList" >CoinFlip Terms of Service</li>
            <li className="termsPolicyList" >CoinFlip Trade Desk Terms of Service</li>
           </ul>
        </div>
        </section>
        <div className='footerGradientBackground'><img src="https://i.postimg.cc/Bvkq2SXD/bg-gradient-img-1.png" alt="" /></div>
        <span className='mobile_footer_copyright' >© 2021 GPD Holdings, LLC FINCEN MSB</span>
      </footer>

  
      
       
       </div>
       
     
      )
    }

