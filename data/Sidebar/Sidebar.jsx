import './sidebar.css';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { GiMiner } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Header } from '../DashboardHeader/Header';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen (!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdOutlineSpaceDashboard />
    },
    {
      path: "/withdraw",
      name: "Withdraw",
      icon: <IoIosTrendingUp />
    },
    {
      path: "/deposit",
      name: "Deposit",
      icon: <PiCurrencyCircleDollar />
    },
    {
      path: "/buyminer",
      name: "Buy miner",
      icon: <GiMiner />
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <IoSettingsOutline />
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <AiOutlineUser />
    },
    {
      path: "/",
      name: "Log out",
      icon: <CiLogout />
    }
  ];

  return (
    <div className='allListContainer'>
      <div className='dashboardGradient1'><img src="https://i.postimg.cc/7YvfYx3G/Group-4-1.png" alt="" /></div>
      <div className='dashboardGradient2'><img src="https://i.postimg.cc/7LLLQbkc/Group-5.png" alt="" /></div>
        <Header/>
      <section style={{width: isOpen ? "250px" : "50px" }} className="sidebarSection">
        <div className='sidebar_top_section'>
          {/* <h1 style={{display: isOpen ? "block" : "none" }}  className='sidebarLogo_text'>logo</h1> */}
          <div style={{marginLeft: isOpen ? "150px" : "0px" }}  className='bars'>
           <RiArrowLeftRightFill onClick={toggle}/>
          </div>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="sidebarList"

            >
              <div className="sidebar_icon">{item.icon}</div>
              <div style={{display: isOpen ? "block" : "none" }}  className="sidebar_text">{item.name}</div>
            </NavLink>
          ))
        }
      </section>
      <main>{}</main>
    </div>
  )
}
