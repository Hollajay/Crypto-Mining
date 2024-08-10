import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Hero } from './component/LandingPage/Hero';
import { Login } from './component/LogIn/Login';
import { SignUp } from './component/signUp/SignUp';
import { Sidebar } from '../data/Sidebar/Sidebar';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Withdraw } from '../pages/Withdraw/Withdraw';
import { Deposit } from '../pages/Deposit/Deposit';
import { Buyminer } from '../pages/Buy miner/Buyminer';
import { Profile } from '../pages/Profile/Profile';
import { Settings } from '../pages/Settings/Settings';
import { Outlet } from 'react-router-dom';
import AdminHome from './component/Admin/AdminHome';

const SidebarLayout = () => (
  <Sidebar>
    <Outlet />
  </Sidebar>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/dashboard' element={
          <Sidebar>
          <Dashboard />
          </Sidebar>
          } />
        <Route path='/' element={<SidebarLayout />}>
        <Route path='/withdraw' element={ <Withdraw /> } /> 
         <Route path='/deposit' element={<Deposit />} />
         <Route path='/buyminer' element={<Buyminer />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path="/admin" element={<AdminHome />} /> 
        </Route>
       

      </Routes>
    </BrowserRouter>
  );
}

export default App;
