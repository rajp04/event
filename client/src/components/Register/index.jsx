import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = async () => {
    try {
      const formattedMobile = mobile.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2-$3');

      const data = { email, fullName, companyName, mobile: formattedMobile };
      const result = await axios.post('http://localhost:1000/api/v1/users/register', data);
      if (result.data.success) {
        console.log(result.data);
        navigate('/login');
      } else {
        console.log('Register failed: ' + result.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div className="flex items-center justify-center w-screen my-20">
      <div className="border rounded-md w-2/6 m-auto text-center">
        <div className="bg-blue-500 rounded-t-md">
          <h1 className="text-3xl text-white font-medium py-2">Register Page</h1>
        </div>
        <div className="flex flex-col py-5 px-4">
          <input
            type="text"
            name="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter Your Full Name"
            className="outline-none border-b mb-2 text-xl"
            autoComplete="off"
          />
          <input
            type="text"
            name="company"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter Your Company Name (optional)"
            className="outline-none border-b mb-2 text-xl"
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="outline-none border-b mb-2 text-xl"
            autoComplete="off"
          />
          <div>
            <PhoneInput
              country={'in'}
              value={mobile}
              onChange={setMobile}
              inputClass="outline-none w-full border-b mb-2 text-xl"
            />
          </div>
          <div className="py-2" onClick={handleSubmit}>
            <button
              type="submit"
              className="py-1 px-5 bg-blue-500 rounded-md text-white text-xl font-medium"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
