import React, { useEffect, useRef } from "react";
import { useMediaQuery } from 'react-responsive';
import useWindowSize from "./../hooks/useWindowSize";

const SmoothScroll = ({ children }) => {
  let isPageWide = useMediaQuery({
    query: '(min-width: 1024px)'
  });
  // 1.
  const windowSize = useWindowSize();

  //2.
  const scrollingContainerRef = useRef();

  // 3.
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // 4.
  useEffect(() => {
    setBodyHeight();
  }, [windowSize]);

  const setBodyHeight = () => {
    if (isPageWide) {
      document.body.style.height = `${
        scrollingContainerRef.current.getBoundingClientRect().height
      }px`;
    }

  };

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    if (scrollingContainerRef.current && isPageWide) {
      scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
    }

    // Recursive call
    if (isPageWide) {
      requestAnimationFrame(() => smoothScrollingHandler());
    }
  };

  return (
    <div className="parent-smooth-scroll">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
