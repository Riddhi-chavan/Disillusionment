import React, { useState, useEffect } from "react";
import Questions from "./Questions";
import { useNavigate } from "react-router-dom";
import Sliding from "./Sliding";

const StepperBar = () => {
  const steps = ["IDEALISTIC", "DISILLUSIONED", "CYNICAL"];
  const questions = [
    "I have ambitious aims of making a difference.",
    "I’m beginning to believe the journey of service will be much harder than I anticipated.",
    "If I had the option of changing careers, I would.",
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(Array(steps.length).fill(null));
  const [isAnswered, setIsAnswered] = useState(false); // New state for answer check
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the current question has been answered
    setIsAnswered(answers[currentStep] !== null);
  }, [answers, currentStep]);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAnswerChange = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = answer;
    setAnswers(newAnswers);
  };

  if (currentStep === 3) {
    setTimeout(() => {
      navigate("/thank-you");
    }, 500);
  }

  return (
    <>
      {currentStep <= 3 ? (
        <div className="mx-3 md:mx-5 lg:mx-24 my-10">
          <h2 className="sr-only">Steps</h2>
          <div className="flex justify-between mb-4">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mt-4 overflow-hidden rounded-full bg-gray-200 w-16 md:w-40 lg:w-64 mx-auto">
                  <div
                    className={`h-2 ${
                      index < currentStep ? "w-full" : "w-0"
                    } rounded-full bg-blue-500 transition-all duration-300`}
                    style={{ width: index < currentStep ? "100%" : "0%" }}
                  ></div>
                </div>
                <p className="text-xs md:text-md font-medium text-gray-500 mt-3">
                  {step}
                </p>
              </div>
            ))}
          </div>
          <Questions questions={questions} currentStep={currentStep} />

          <Sliding
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            currentAnswer={answers[currentStep]}
            onAnswerChange={handleAnswerChange}
          />
          <div className="flex justify-between mx-5 md:mx-10 mb-10 mt-20">
            <div>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={handlePrev}
                disabled={currentStep === 0}
              >
                Prev
              </button>
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleNext}
                disabled={!isAnswered}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default StepperBar;
