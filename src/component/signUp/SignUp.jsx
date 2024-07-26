
import { Link } from 'react-router-dom'
import './signUp.css'

export const SignUp = () => {
  return (
    <div className="signUpContainer">
    <section className="signUpSection_div">
        <div className="leftsignUpSection">
            <div className="signUpGradientBackground"><img src="https://i.postimg.cc/GhkYmpX4/Group-4.png" alt="" /></div>
            <div className="enviroGradientBackground"><img src="https://i.postimg.cc/fbkJmWfj/Enviro.png" alt="" /></div>
            <div className="HostingGradientBackground"><img src="https://i.postimg.cc/FsQd84hN/Hosting.png" alt="" /></div>
            <div className="bubbleGradientBackground"><img src="https://i.postimg.cc/j5Pq4DwN/Bubble.png" alt="" /></div>
        </div>
          <div className="rightsignUpSection">
           <div className="signUpformFieldContainer">
                <div className="signUplogo_div">
                    <img src="https://i.postimg.cc/prrVjsHG/Luxi-Hosting-Logo.png" alt="" />
                    <h1>crypto</h1>
                </div>
                <form action="">
                    <div className="signUpInputField">
                        <label htmlFor="">Email</label>
                        <div className='signUpInput'><input type="text" /></div>
                    </div>
                    <div className="signUpInputField">
                        <label htmlFor="">Password</label>
                        <div className='signUpInput'><input type="text" /></div>
                    </div>
                    <div className="signUpInputField">
                        <label htmlFor="">Confirm Password</label>
                        <div className='signUpInput'><input type="text" /></div>
                    </div>
                    <div className="signUpInputField">
                        <label htmlFor="">BTS Address ( Optional )</label>
                        <div className='signUpInput'><input type="text" /></div>
                    </div>
                    <div className='AlreadyHaveAccount'><Link>Already have and account?</Link></div>
                    
                  

                    <div className='signpnBtn_div'>
                    <button className='SigUpBtn'>Sign up</button>
                    </div>
                </form>
           </div>
        </div>

    </section>

   </div>
  )
}
