
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Hero } from './component/LandingPage/Hero'
import { Login } from './component/LogIn/Login'
import { SignUp } from './component/signUp/SignUp'

function App() {


  return (
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<Hero/>}/>
 <Route path='/login' element={<Login/>}/>
 <Route path='/signUp' element={<SignUp/>}/>
 </Routes>
 
 </BrowserRouter>
  )
}

export default App
