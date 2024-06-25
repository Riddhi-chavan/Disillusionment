import React from "react";

const Questions = ({ questions, currentStep }) => {
  return (
    <div className="pt-12 md:pt-24 h-64">
      {currentStep < 3 && (
        <div className="flex justify-center mb-2 text-red-500 text-xl ">
          {currentStep + 1}/3
        </div>
      )}
      <div className=" flex justify-center">
        <p className="text-lg font-medium text-gray-800 text-center ">
          {questions[currentStep]}
        </p>
      </div>
    </div>
  );
};

export default Questions;
