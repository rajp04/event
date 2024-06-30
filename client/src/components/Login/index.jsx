import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState()
  const [otp, setotp] = useState()

  const handleSubmit = async () => {
    try {
      const data = { email, otp }
      const result = await axios.post('http://localhost:1000/api/v1/users/login', data);
      if (result.data.success == true) {
        localStorage.setItem("id", JSON.stringify(result.data));
        navigate('/')
        // console.log(result.data);
      } else {
        console.log('Login failed: ' + result.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="flex items-center justify-center w-screen my-20">
      <div className="border rounded-md w-2/6 m-auto text-center">
        <div className="bg-blue-500 rounded-t-md">
          <h1 className="text-3xl text-white font-medium py-2">Login Page</h1>
        </div>
        <div className="flex flex-col py-5 px-4">
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" className="outline-none border-b mb-2 text-xl" autoComplete="off" />
          <input type="otp" name="otp" value={otp} onChange={(e) => setotp(e.target.value)} placeholder="Enter Your Otp" className="outline-none border-b mb-2 text-xl" autoComplete="off" />

          <div className="py-2" onClick={handleSubmit}>
            <button type="submit" className="py-1 px-5 bg-blue-500 rounded-md text-white text-xl font-medium">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login