import React from 'react';
import { useRef, useEffect } from "react";

export default function ScrollIndicator(): JSX.Element {
  const targetRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    const totalHeight = scrollHeight - clientHeight;
    const targetWidth = (scrollY / totalHeight) * 100;
    if (targetRef.current) targetRef.current.style.width = targetWidth + "%";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div ref={targetRef} className="w-0 h-1 bg-blue-600 rounded-sm"></div>;
}
