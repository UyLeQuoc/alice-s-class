"use client";
import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ReactPixel from "react-facebook-pixel";

export const FacebookPixelEvents: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    ReactPixel.init("996511195660551"); 
    ReactPixel.pageView();
  }, []);

  useEffect(() => {
    ReactPixel.pageView();
  }, [pathname, searchParams]);

  return null;
};
