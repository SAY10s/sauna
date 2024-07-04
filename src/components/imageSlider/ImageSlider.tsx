import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import {
  CONFIGURATION_OPTIONS,
  CURRENT_CONFIG_STEP_NAME_IN_ENGLISH,
} from "../../const/const.ts";

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

  useEffect(() => {
    if (currentConfigStepId !== 8) {
      const currentStepOptions = CONFIGURATION_OPTIONS[currentConfigStepId];
      const chosenOptionObject = currentStepOptions.find(
        (option) => option.name === currentChosenOption,
      );
      const chosenOptionImageUrl = chosenOptionObject
        ? chosenOptionObject.image
        : null;
      const newIndex = imgURLs.findIndex((url) => url === chosenOptionImageUrl);
      if (newIndex !== -1) {
        setCurrentIndex(newIndex);
      }
    }
  }, [currentChosenOption, imgURLs, currentConfigStepId]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgURLs.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imgURLs.length) % imgURLs.length,
    );
  };

  return (
    <>
      <div className="imageSlider">
        <button onClick={goToPrevious}>&lt;</button>
        <img src={imgURLs[currentIndex]} alt={`Slide ${currentIndex}`} />
        <button onClick={goToNext}>&gt;</button>
      </div>
      <div className="slideIndicators">
        {imgURLs.map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </>
  );
};

export default ImageSlider;
