import './profile.css'

export const Profile = () => {
  return (
    <div className='profile_container'>
      <section className='profileSection'>
        <div className="profile_top_div">
          <div className="profileImg_div"><img src="https://i.postimg.cc/zXCky7xS/Ellipse-1.png" alt="" /></div>
          <div className="profileImg_text">Envano</div>
        </div>
         <form action="" className='profileForm_div'>
            <div className="profile_form_fields">
              <label htmlFor="">Email</label>
               <div className="profile_input_field"><input type="text" /></div>
            </div>
            <div className="profile_form_fields">
              <label htmlFor="">Password</label>
               <div className="profile_input_field"><input type="text" /></div>
            </div>
            <div className="profile_form_fields">
              <label htmlFor="">BTS Address</label>
               <div className="profile_input_field"><input type="text" /></div>
            </div>
            <div className="profile_form_fields">
              <label htmlFor="">ETH Address</label>
               <div className="profile_input_field"><input type="text" /></div>
                  
                  <div className="profile_btn_div"><button className="profileBtn">Save</button></div>
            </div>
         </form>
      </section>
    </div>
  )
}
