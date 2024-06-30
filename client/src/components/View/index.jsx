import axios from "axios";
import { useEffect, useState } from "react";

function View() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:1000/api/v1/event/allevent");
        setData(result.data.result).sort();
        console.log(result.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-12 items-center p-10 gap-10">
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className="col-span-4 border rounded-md p-5">
            <div className="flex mb-2 border-b-2 items-center">
              <h1 className="whitespace-nowrap pe-2 text-xl w-28 font-medium">Title :-</h1>
              <p>{item.title}</p>
            </div>
            <div className="flex mb-2 border-b-2 items-center">
              <h1 className="whitespace-nowrap pe-2 text-xl w-28 text-start font-medium">Desc :-</h1>
              <p>{item.desc.length <= 20 ? item.desc : `${item.desc.slice(0, 35)}...`} </p>
            </div>
            <div className="flex mb-2 border-b-2 items-center">
              <h1 className="whitespace-nowrap pe-2 text-xl w-28 font-medium">Mobile :-</h1>
              <p>{item.mobile}</p>
            </div>
            <div className="flex mb-2 border-b-2 items-center">
              <h1 className="whitespace-nowrap pe-2 text-xl w-28 font-medium">Event by :-</h1>
              <p>{item.by}</p>
            </div>
            <div className="flex mb-2 border-b-2 items-center">
              <h1 className="whitespace-nowrap pe-2 text-xl w-28 font-medium">Date :-</h1>
              <p>{item.date}</p>
            </div>
            <div className="flex mb-2 border-b-2 items-center">
              <h1 className="whitespace-nowrap pe-2 text-xl w-28 font-medium">Time :-</h1>
              <p>{item.time}</p>
            </div>
            <div className="flex mb-2 border-b-2 items-center">
              <h1 className="whitespace-nowrap pe-2 text-xl w-28 font-medium">Address :-</h1>
              <p>{item.address}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="whitespace-nowrap text-xl font-medium">No data available</p>
      )}
    </div>
  );
}

export default View;




