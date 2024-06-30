import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Admin() {

  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [by, setBy] = useState();
  const [mobile, setMobile] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [address, setAddress] = useState();

  const users = localStorage.getItem("id")

  useEffect(() => {
    if (!users) navigate("/login");
  }, [users, navigate])

  const user = JSON.parse(localStorage.getItem("id"));

  const handleSubmit = async () => {
    try {
      const data = { title, desc, by, mobile, date, time, address };
      const token = user.accessToken;
      const result = await axios.post('http://localhost:1000/api/v1/event/event', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (result.data.success === true) {
        navigate('/');
      } else {
        console.log('Event failed: ' + result.data.message);
      }
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen my-10">
      <div className="w-1/4 border rounded-md text-center">
        <div className="bg-gray-700 text-white py-2 text-2xl font-medium rounded-t-md">
          <h1>Admin Dashboard</h1>
        </div>
        <div className="flex flex-col px-5 py-5" onClick={handleSubmit}>
          <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Event Title" className="outline-none border-b text-xl mb-2 p-1" autoComplete="off" />
          <input type="text" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter Event Description" className="outline-none border-b text-xl mb-2 p-1" autoComplete="off" />
          <input type="text" name="by" value={by} onChange={(e) => setBy(e.target.value)} placeholder="Enter Event By" className="outline-none border-b text-xl mb-2 p-1" autoComplete="off" />
          <input type="text" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Event Number" className="outline-none border-b text-xl mb-2 p-1" autoComplete="off" />
          <div className="flex items-center border-b mb-2">
            <label htmlFor="date" className="font-medium text-xl">Date :- </label>
            <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Enter Event date" className="outline-none text-xl  p-1" autoComplete="off" />
          </div>
          <div className="flex items-center border-b mb-2">
            <label htmlFor="time" className="font-medium text-xl">Time :-</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} name="time" placeholder="Enter Event time" className="outline-none text-xl p-1" autoComplete="off" />
          </div>
          <input type="text" placeholder="Enter Your Address" value={address} onChange={(e) => setAddress(e.target.value)} className="outline-none border-b text-xl mb-2 p-1" autoComplete="off" />

          <div className="pt-5">
            <button type="submit" className="bg-gray-700 px-5 py-1 rounded-md text-white text-2xl">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin