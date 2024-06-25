import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Headers from "../component/Headers";
import Loading from "./Loading";

const Assignment = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`bg-blue-300 min-h-screen ${
        isLoading === true ? "pt-10" : "items-center  pt-10"
      }  px-3 md:px-10 flex justify-center  `}
    >
      {isLoading === true ? (
        <Loading />
      ) : (
        <div className="bg-white   rounded-lg shadow-lg w-full max-w-6xl  ">
          <Headers />
        </div>
      )}
    </div>
  );
};

export default Assignment;
