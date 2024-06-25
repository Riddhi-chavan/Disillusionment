import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Thankyou = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="h-screen  bg-blue-500 pt-10">
      {isLoading === true ? (
        <Loading />
      ) : (
        <>
          {" "}
          <div className="h-64 bg-white mx-5 md:mx-20 rounded-md">
            <div className="text-center pt-6 mx-4 md:mx-0 text-xl font-bold  ">
              Thank you for answering the questions!
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-[#e74b16] w-full text-white md:w-1/4  lg:w-1/4 text-center rounded-md font-bold focus:outline-none hover:bg-blue-400 mx-3 md:mx-10 mt-10">
                <Link to="/">
                  <button className="py-4 w-full">HOME</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Thankyou;
