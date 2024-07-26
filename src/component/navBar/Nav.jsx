
import './nav.css'

export const Nav = () => {
  return (
  <section className="navSection">
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
        <button className="signIn_btn">Sign In</button>
        <button className="signUp_btn">Sign Up</button>
             
        </div>
    </nav>
  </section>
  )
}
