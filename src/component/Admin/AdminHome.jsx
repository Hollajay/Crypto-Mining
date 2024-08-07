import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../../../pages/Dashboard/Dashboard"
import { Withdraw } from "../../../pages/Withdraw/Withdraw"
import {Deposit} from "../../../pages/Deposit/Deposit"
import { Buyminer } from "../../../pages/Buy miner/Buyminer"
import { Profile }  from "../../../pages/Profile/Profile"
import {Settings}  from "../../../pages/Settings/Settings"

const AdminHome = () => {
  return (
    <Routes>
        {/* THIS IS THE DASHBOARD ROUTE *SO THE APP FOR THE ADMIN */}
          <Route path="/"  element={<Dashboard/>}/>
          {/* http://localhost:5174/admin/ */}
          <Route path="withdraw" element={<Withdraw/>}/>
          {/* http://localhost:5174/admin/withdraw */}
          <Route path="deposit" element={<Deposit/>}/>
          <Route path="buyminer" element={<Buyminer/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="settings" element={<Settings/>}/>
        
          {/* add the actual component created */}
          </Routes>
  )
}

export default AdminHome