import { Link } from 'react-router-dom'
import './login.css'

export const Login = () => {
  return (
   <div className="loginContainer">
    <section className="loginSection_div">
        <div className="leftLoginSection">
            <div className="LoginGradientBackground"><img src="https://i.postimg.cc/GhkYmpX4/Group-4.png" alt="" /></div>
            <div className="LoginenviroGradientBackground"><img src="https://i.postimg.cc/fbkJmWfj/Enviro.png" alt="" /></div>
            <div className="LoginHostingGradientBackground"><img src="https://i.postimg.cc/FsQd84hN/Hosting.png" alt="" /></div>
            <div className="LoginbubbleGradientBackground"><img src="https://i.postimg.cc/j5Pq4DwN/Bubble.png" alt="" /></div>
        </div>
          <div className="rightLoginSection">
           <div className="formFieldContainer">
                <div className="logo_div">
                    <img src="https://i.postimg.cc/prrVjsHG/Luxi-Hosting-Logo.png" alt="" />
                    <h1>crypto</h1>
                </div>
                <form action="">
                    <div className="LoginInputField">
                        <label htmlFor="">Email</label>
                        <div className='loginInput'><input type="text" /></div>
                       
                    </div>
                    <div className="LoginInputField">
                        <label htmlFor="">Password</label>
                        <div className='loginInput'><input type="text" /></div>
                    </div>

                    <div className='checkBox_div'>
                        <div className='checkBoxInput_div'>
                          <div className="checkBoxInput">  <input type="checkbox" /></div>
                          
                            <p>save Email and password</p>
                        </div>
                     <Link>Dont have and account?</Link>
                    </div>

                    <div className='signInBtn_div'>
                    <button className='LoginSignInBtn'>Sign in</button>
                    </div>
                </form>
           </div>
        </div>

    </section>

   </div>
  )
}
