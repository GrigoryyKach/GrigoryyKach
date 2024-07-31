"use client";

import { useState, useEffect } from "react";
// import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, swiper }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const updateNavigationButtons = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on('slideChange', updateNavigationButtons);
    updateNavigationButtons(); // Initialize button states

    return () => {
      swiper.off('slideChange', updateNavigationButtons);
    };
  }, [swiper]);

  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={() => !isBeginning && swiper.slidePrev()}
        disabled={isBeginning}
      >
        <PiCaretLeftBold />
      </button>
      <button
        className={btnStyles}
        onClick={() => !isEnd && swiper.slideNext()}
        disabled={isEnd}
      >
        <PiCaretRightBold />
      </button>
    </div>
  )
}

export default WorkSliderBtns;
