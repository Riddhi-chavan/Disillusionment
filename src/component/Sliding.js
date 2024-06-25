import React, { useState, useEffect } from "react";

const Answer = ({
  setCurrentStep,
  currentStep,
  currentAnswer,
  onAnswerChange,
}) => {
  const stepValues = [0, 24, 49, 74, 98];
  const [value, setValue] = useState(
    currentAnswer !== null ? currentAnswer : null
  );
  const [width, setWidth] = useState("0%");
  const [thumbLeft, setThumbLeft] = useState("0%");
  const [activeButton, setActiveButton] = useState(currentAnswer);

  useEffect(() => {
    if (currentAnswer !== null) {
      const width = calculateWidth(currentAnswer);
      setWidth(width);
      setThumbLeft(width);
      setValue(currentAnswer);
      setActiveButton(currentAnswer);
    }
  }, [currentAnswer]);

  const calculateWidth = (value) => {
    return `${(value / 100) * 100}%`;
  };

  const handleOptionClick = (newValue) => {
    const width = calculateWidth(newValue);
    setWidth(width);
    setThumbLeft(width);
    setValue(newValue);
    onAnswerChange(newValue);
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
      setValue(null);
      setWidth("0%");
      setThumbLeft("0%");
    }, 1000);
  };

  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value);
    const width = calculateWidth(newValue);
    setWidth(width);
    setThumbLeft(width);
    setValue(newValue);
    onAnswerChange(newValue);
    const nearestValue = stepValues.reduce((prev, curr) => {
      return Math.abs(curr - newValue) < Math.abs(prev - newValue)
        ? curr
        : prev;
    });
    setValue(nearestValue);
    onAnswerChange(nearestValue);
  };

  console.log(value);

  return (
    <div className="flex justify-center items-center ">
      <div className="relative w-full mx-2 md:w-[70%]  text-center">
        <div className="w-full h-1 bg-gray-200 rounded-lg"></div>
        <input
          type="range"
          min={0}
          max={99}
          value={value !== null ? value : 0}
          className="absolute top-0 left-0 w-full h-1 opacity-0 pointer-events-none"
          step={1}
          onChange={handleSliderChange}
        />

        <span
          className="absolute top-0 left-0 h-1 bg-blue-500 rounded-lg transition-all duration-50 ease-linear"
          style={{ width: width }}
        ></span>

        {value !== null && value !== undefined ? (
          <span
            className="absolute top-0 h-4 w-4 bg-blue-500 rounded-full transition-all duration-500 ease-linear transform -translate-y-1/2"
            style={{ left: thumbLeft }}
          ></span>
        ) : null}

        <button
          className={`absolute left-2 transform -translate-x-1/2 w-4 h-4 -bottom-[3px] rounded-full ${
            value === null ? "mt-[4px]" : "mt-2"
          } ${activeButton === 0 ? "" : "bg-gray-700"}${
            value > 0 && value !== null ? "hidden" : ""
          }`}
          onClick={() => handleOptionClick(0)}
        ></button>

        <button
          className={`absolute left-1/4 transform -translate-x-1/2 w-4 h-4 -bottom-[4px] rounded-full ${
            value === null ? "mt-[4px]" : "mt-1"
          } ${activeButton >= 24 && value !== null ? "" : "bg-gray-700"}`}
          onClick={() => handleOptionClick(24)}
        ></button>

        <button
          className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 -bottom-[4px] rounded-full ${
            value === null ? "mt-[4px]" : "mt-1"
          } ${activeButton >= 49 && value !== null ? "" : "bg-gray-700"}`}
          onClick={() => handleOptionClick(49)}
        ></button>

        <button
          className={`absolute left-3/4 transform -translate-x-1/2 w-4 h-4 -bottom-[4px] rounded-full ${
            value === null ? "mt-[4px]" : "mt-1"
          } ${activeButton >= 74 && value !== null ? "" : "bg-gray-700"}`}
          onClick={() => handleOptionClick(74)}
        ></button>

        <button
          className={`absolute right-2 transform translate-x-1/2 w-4 h-4 -bottom-[4px] rounded-full ${
            value === null ? "mt-[4px]" : "mt-1"
          } ${activeButton >= 98 && value !== null ? "" : "bg-gray-700"}`}
          onClick={() => handleOptionClick(98)}
        ></button>

        <span className="absolute left-0 md:left-4  w-5 md:w-[20%] transform -translate-x-1/2 -bottom-10 md:-bottom-12 lg:-bottom-9 text-xs md:text-sm text-gray-500 dark:text-gray-400 whitespace-pre-line text-center">
          Strongly Disagree
        </span>
        <span className="absolute left-1/4 transform -translate-x-1/2 -bottom-6 md:-bottom-8 text-xs md:text-sm text-gray-500 dark:text-gray-400 whitespace-pre-line text-center">
          Disagree
        </span>
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 md:-bottom-8 text-xs md:text-sm text-gray-500 dark:text-gray-400 whitespace-pre-line text-center">
          Neutral
        </span>
        <span className="absolute left-3/4 transform -translate-x-1/2 -bottom-6  md:-bottom-8 text-xs md:text-sm text-gray-500 dark:text-gray-400 whitespace-pre-line text-center">
          Agree
        </span>
        <span className="absolute right-4 w-5 md:w-[20%] transform translate-x-1/2 -bottom-10 md:-bottom-12 lg:-bottom-9 text-xs md:text-sm text-gray-500 dark:text-gray-400 whitespace-pre-line text-center">
          Strongly Agree
        </span>
      </div>
    </div>
  );
};

export default Answer;
