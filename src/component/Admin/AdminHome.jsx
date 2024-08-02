import { Route, Routes } from "react-router-dom"

const AdminHome = () => {
  return (
    <Routes>
        {/* THIS IS THE DASHBOARD ROUTE *SO THE APP FOR THE ADMIN */}
          <Route path="/"  element={<h1>create dash boadr here</h1>}/>
          {/* http://localhost:5174/admin/ */}
          <Route path="withdraw" element={<h1>create withdraw here</h1> }/>
          {/* http://localhost:5174/admin/withdraw */}
          {/* add the actual component created */}
          </Routes>
  )
}

export default AdminHome