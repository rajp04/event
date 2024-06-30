import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import OTP from './pages/OtpPage'
import Header from "./components/Header"
import Login from './components/Login'
import Register from './components/Register'
import Admin from "./components/Admin"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/event'} element={<Admin />} />
        <Route path={'/otp'} element={<OTP />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App