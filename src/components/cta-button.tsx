import * as React from "react";
export interface CTAButtonProps {
    text: string;
    className?: string;
  }


export const CTAButton: React.FC<CTAButtonProps> = ({ text, className }) => {
  return (
    <button 
      className={`gap-2.5 self-stretch px-12 py-5 w-full leading-none text-white bg-rose-700 max-md:px-5 max-md:max-w-full ${className}`}
      tabIndex={0}
    >
      <span className="font-bold">{text}</span>
    </button>
  );
};