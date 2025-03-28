"use client";

import { usePopUpStore } from "@/lib/popupStore";
import * as React from "react";
// import ReactPixel from "react-facebook-pixel";

export interface CTAButtonProps {
  text: string;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ text, className }) => {
  const { openPopUp } = usePopUpStore();

  const handleClick = () => {
    // openPopUp();

    // ReactPixel.track("CTA_Button_Clicked", {
    //   buttonText: text,
    // });


    // Then, scroll to the contact section
    const contactSection = document.getElementById('contact-section');
    // The '?.' safely handles cases where the element might not be found instantly
    contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });


  };

  return (
    <button
      onClick={() => handleClick()}
      className={`gap-2.5 self-stretch px-12 py-5 w-full leading-none text-white bg-rose-700 max-md:px-5 max-md:max-w-full ${className}`}
      tabIndex={0}
    >
      <span className="font-bold">{text}</span>
    </button>
  );
};
