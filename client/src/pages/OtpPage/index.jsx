import { useState } from "react";
import { useNavigate } from "react-router-dom"

function Otp() {

  const navigate = useNavigate();
  const [otp, setOtp] = useState()

  const handleSubmit = () => {
    if (otp == 123456) {
      navigate('/login')
    }
  }

  return (
    <div className="flex items-center justify-center w-screen py-20">
      <div className="border rounded-md w-1/5 text-center overflow-hidden" onClick={handleSubmit}>
        <h1 className="text-2xl text-white font-medium rounded-t-md bg-blue-500 py-2">Enter Your Otp</h1>
        <input type="text" name="otp" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter your otp" className="mt-5 mb-2 text-2xl w-full mx-4 outline-none border-b" />

        <div type='submit' className="my-2">
          <button className="bg-blue-500 px-4 py-1 rounded-md text-2xl text-white">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Otp