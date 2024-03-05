"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
require("dotenv").config();

export default function Dashboard() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isCandidate, setIsCandidate] = useState(true);
  //   const [values, setValues] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user").role === "candidate") {
      setIsCandidate(true);
      setData(JSON.parse(localStorage.getItem("user")));
      return;
    }
    if (localStorage.getItem("user").role === "interviewer") {
      setIsCandidate(false);
      setData(JSON.parse(localStorage.getItem("user")));
      router.push("/editor");
      return;
    }
    router.push("/login");
  }, []);

  //   function fetchData() {
  //     // Google Sheets API endpoint URL
  //     const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.NEXT_PUBLIC_SPREADSHEET_ID}/values/Sheet1!A2:F10?key=${process.env.NEXT_PUBLIC_API_KEY}`;

  //     // Fetch data from the Google Sheets API
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // Extract values from the response
  //         setValues(data.values);
  //         console.log(data.values);
  //         // Construct HTML to display the data in the table

  //         // Display the data in the HTML element with id 'data'
  //         // document.getElementById("data").innerHTML = rows;
  //       })
  //       .catch((error) => console.error("Error fetching data:", error));
  //   }

  //   // Function to refresh data manually
  //   function refreshData() {
  //     fetchData();
  //   }

  //   // Call the fetchData function initially when the page loads
  //   useEffect(() => {
  //     fetchData();

  //     // Set interval to fetch data every 2 minutes
  //     const intervalId = setInterval(fetchData, 2 * 60 * 1000);

  //     // Clean up the interval on component unmount
  //     return () => clearInterval(intervalId);
  //   }, []);

  return (
    <main className="flex flex-row bg-[#12151c] h-screen text-white">
      <div className="flex w-1/2 h-full justify-center items-center border-r">
        <div className="flex flex-col gap-16">
          <h1 className="text-5xl">
            Welcome, {isCandidate ? "Candidate" : "Interviewer"}
          </h1>
          <span className="ml-36 text-5xl">vjfvejkflewbfe</span>
        </div>
      </div>
      <div className="border-r-1 border-white"></div>
      <div className="flex justify-center items-stretch w-1/2 h-full">
        <div className="flex items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl">Interview Link</h1>
            <button className="outline-none w-full py-2 bg-slate-600">
              Link
            </button>
          </div>
        </div>
        {/* {!isCandidate ? (
          ""
        ) : (
          <>
            <button onClick={refreshData}>Refresh</button>
            <div className="grid grid-row-6 fixed z-10 bg-black">
              {values &&
                values.map((row, index) => (
                  <div key={index} className="">
                    {row.map((cell, cellIndex) => (
                      <div
                        key={cellIndex}
                        className="border p-2 overflow-scroll"
                      >
                        {cell}
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </>
        )} */}
      </div>
    </main>
  );
}
