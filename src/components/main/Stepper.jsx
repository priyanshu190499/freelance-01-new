import  { useState } from "react";
import MeteorsDemo from "../wrapper/MeteorCardWrapper";
import Title from "./Title"
const steps = [
  {
    title: "Step One",
    description: "This is the first step of the process.",
    
  },
  {
    title: "Step Two",
    description: "Configure your settings and preferences.",
  },
  {
    title: "Step Three",
    description: "Verify all your details carefully.",
  },
  {
    title: "Step Four",
    description: "Finish and celebrate your success!",
  },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="dark:bg-black  py-16 px-4">
        <Title t1="Our Easy" t2={"4 Step Process"} />
      {/* Stepper container */}
      <div className="relative flex justify-between items-center w-full max-w-4xl mx-auto mb-12">
        {/* Horizontal line */}
        <div className="absolute top-[25%] left-0 right-0 h-1  transform -translate-y-1/2 bg-gray-700">
          <div
            className="h-1 bg-blue-600 transition-all duration-300"
            style={{
              width:
                currentStep === 0
                  ? "0%"
                  : `${(currentStep / (steps.length - 1)) * 100}%`,
            }}
          ></div>
        </div>

        {/* Step icons */}
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div key={index} className="relative z-10 flex flex-col justify-between items-center ">
              <div
                className={`
                  w-10 h-10 flex items-center justify-center rounded-full
                  text-sm font-bold
                  ${isCompleted
                    ? 'bg-blue-600 text-white'
                    : isActive
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-400'
                  }
                `}
              >
                {isCompleted ? "✓" : index + 1}
              </div>
              <span
                className={`
                  mt-2 text-xs md:text-sm text-center
                  ${isActive ? "text-white" : "text-gray-400"}
                `}
              >
                {step.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* Current Step Container */}
      <div className="max-w-xl mx-auto rounded-lg  flex flex-col md:flex-row items-center">
        <MeteorsDemo title= {steps[currentStep].title} description=  {steps[currentStep].description} />
      </div>

      {/* Navigation Buttons */}
      <div className="max-w-xl mx-auto flex justify-between mt-12  ">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="bg-secondary hover:bg-primary text-gray-300 hover:text-white font-medium px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="bg-secondary hover:bg-primary text-white font-medium px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
