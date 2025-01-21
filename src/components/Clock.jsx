import React, { useState, useEffect } from "react";
import moment from "moment";

const Clock = () => {
  const [time, setTime] = useState(moment().format("hh:mm:ss A"));
  const [date, setDate] = useState(moment().format("dddd, MMMM Do YYYY"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("hh:mm:ss A"));
      setDate(moment().format("dddd, MMMM Do YYYY"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <p className="text-xl font-bold tracking-wide">{date}</p>
      <p className="text-6xl font-extrabold mt-4 animate-pulse">{time}</p>
    </div>
  );
};

export default Clock;
