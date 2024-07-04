import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import { CURRENT_CONFIG_STEP_NAME_IN_ENGLISH } from "../../const/const.ts";

interface PropsInter {
  imgURLs: string[];
}

const ImageSlider: React.FC<PropsInter> = ({ imgURLs }) => {
  const currentConfigStepId = useSelector(
    (state: RootState) => state.saunaConfig.currentConfigStepId,
  );
  const currentChosenOption = useSelector(
    (state: RootState) =>
      state.saunaConfig[
        CURRENT_CONFIG_STEP_NAME_IN_ENGLISH[currentConfigStepId]
      ],
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgURLs.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imgURLs.length) % imgURLs.length,
    );
  };

  return (
    <div className="imageSlider">
      <button onClick={goToPrevious}>&lt;</button>
      <img src={imgURLs[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default ImageSlider;
