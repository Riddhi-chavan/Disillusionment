import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Start = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-blue-300 min-h-screen flex flex-col items-center">
      <div className="mx-10">
        <div className="py-16 flex flex-col items-center w-full max-w-6xl">
          {isLoading === true ? (
            <Loading />
          ) : (
            <>
              {" "}
              <div
                className="bg-cover bg-center w-full h-72 lg:h-auto lg:hidden"
                style={{
                  backgroundImage: `url(/image1.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center 20%",
                }}
              ></div>
              <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full">
                <div
                  className="hidden lg:block lg:w-1/2 bg-cover"
                  style={{ backgroundImage: `url(/image1.png)` }}
                ></div>
                <div className="w-full p-8 lg:w-1/2 lg:px-20 flex flex-col justify-center">
                  <div className="text-[#343333] font-bold text-3xl md:text-4xl lg:text-5xl text-center lg:text-left">
                    <p className="py-3">Disillusioned,</p>
                    <p className="py-2">Cynical, or</p>
                    <p className="py-3">Hopeful?</p>
                  </div>
                  <div className="mt-4 text-lg md:text-xl lg:text-2xl font-thin text-center lg:text-left lg:pr-16">
                    <p>
                      Disillusionment in ministry is inevitable, but its outcome
                      is not. Where are you on the journey from idealism to
                      enduring hope?
                    </p>
                  </div>
                  <div className="mt-8 md:mt-24 flex flex-col lg:flex-row items-center lg:items-start">
                    <div className="bg-[#e74b16] text-white w-full lg:w-1/2 text-center rounded-md font-bold focus:outline-none hover:bg-blue-400">
                      <Link to="/assessment">
                        <button className="py-4 w-full">GET STARTED</button>
                      </Link>
                    </div>
                    <div className="mt-6 lg:mt-2 lg:ml-10 flex items-center">
                      <img
                        src="clock.png"
                        className="h-6 w-6 font-bold mt-1"
                        alt="clock"
                      />
                      <div className="ml-3 font-bold text-lg lg:text-2xl">
                        <p>3 min</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Start;
