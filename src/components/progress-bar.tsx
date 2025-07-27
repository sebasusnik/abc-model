import {
  BrainCircuit,
  CheckCircle,
  HeartPulse,
  Lightbulb,
  MessageSquareText,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef } from "react";

export const ProgressBar = ({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const stepWidth = container.scrollWidth / totalSteps;
      const targetScroll =
        (currentStep - 1) * stepWidth - container.clientWidth / 2;

      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }
  }, [currentStep, totalSteps]);

  const steps = [
    { icon: <MessageSquareText size={20} />, label: "Acontecimiento" },
    { icon: <BrainCircuit size={20} />, label: "Pensamientos" },
    { icon: <HeartPulse size={20} />, label: "Consecuencias" },
    { icon: <Lightbulb size={20} />, label: "Debate" },
    { icon: <Sparkles size={20} />, label: "Nuevos Efectos" },
    { icon: <CheckCircle size={20} />, label: "Resumen" },
  ];

  return (
    <div className="w-full">
      <div className="relative -mx-6 sm:mx-0">
        <div
          ref={scrollContainerRef}
          className="flex items-center overflow-x-auto px-6 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isActive = currentStep >= stepNumber;
            const isLastStep = index === steps.length - 1;

            return (
              <div key={stepNumber} className="flex items-center flex-shrink-0">
                <div className="flex flex-col items-center z-10 min-w-[100px] sm:min-w-0 sm:px-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isActive ? "bg-indigo-600 text-white" : "bg-slate-800 border-2 border-slate-700 text-slate-500"}`}
                  >
                    {step.icon}
                  </div>
                  <p
                    className={`mt-2 text-xs text-center transition-colors duration-500 whitespace-nowrap ${isActive ? "text-slate-100 font-semibold" : "text-slate-400"}`}
                  >
                    {step.label}
                  </p>
                </div>

                {!isLastStep && (
                  <div className="w-24 sm:w-32 h-0.5 relative -mx-10">
                    <div className="absolute inset-0 bg-slate-700"></div>
                    <div
                      className={`absolute inset-0 transition-all duration-500 ${
                        currentStep > stepNumber
                          ? "bg-indigo-500"
                          : "bg-slate-700"
                      }`}
                    ></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
