import './header.css'

export const Header = () => {
  return (
   <div className="dashboardHeaderContainer">
     <div className="headerLogo_div">
         <img src="https://i.postimg.cc/prrVjsHG/Luxi-Hosting-Logo.png" alt="" />
          <h1>crypto</h1>
        </div>

        <div className='userImageDiv'>
            <p>Evano</p>
            <div className='userImg'> <img src="https://i.postimg.cc/zXCky7xS/Ellipse-1.png" alt="" /></div>
           
        </div>
   </div>
  )
}
