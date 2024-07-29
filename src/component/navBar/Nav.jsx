
import { Link } from 'react-router-dom'
import './nav.css'
import { useState } from 'react'

export const Nav = () => {
  const [navbar, setNavbar] = useState(false)

  const background_change = () =>{
    if(window.scrollY >= 60) {
     setNavbar(true);
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", background_change)
  return (
  <section className={navbar ? "navSection nav_on_scroll" : "navSection"}>
    <nav className="navClasses">
        <div className="logoDiv">
            <h1>CRYPTO</h1>
        </div>
        <ul>
            <li>Buy&Sell</li>
            <li>Growth</li>
            <li>Markets</li>
            <li>Business</li>
            <li>Supports</li>
        </ul>
        <div className="logIn_Btn_div">
       <Link to={'/login'}><button  className="signIn_btn">Sign In</button></Link> 
      <Link to={'/signUp'}><button className="signUp_btn">Sign Up</button></Link>  
             
        </div>
    </nav>
  </section>
  )
}
