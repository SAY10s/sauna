import ImageSlider from "./ImageSlider.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import {
  CONFIGURATION_OPTIONS,
  CURRENT_CONFIG_STEP_NAME_IN_POLISH,
} from "../../const/const.ts";

const ImageSliderWrapper = () => {
  const currentConfigStepId = useSelector(
    (state: RootState) => state.saunaConfig.currentConfigStepId,
  );

  const chosenModel = useSelector(
    (state: RootState) => state.saunaConfig.model,
  );

  const currentConfigStepNameInPolish =
    CURRENT_CONFIG_STEP_NAME_IN_POLISH[currentConfigStepId];
  let currentStepOptions = CONFIGURATION_OPTIONS[currentConfigStepId];

  if (currentConfigStepId === 8) currentStepOptions = CONFIGURATION_OPTIONS[0];
  const imgURLs = currentStepOptions.map((option) => option.image);

  return (
    <div className="imageSliderWrapper grid65to35">
      {currentConfigStepId === 8 ? (
        <div className="innerSliderElementWrapper">
          <div className="currentStep">
            <h4 className="hideOnMobile">Podsumowanie:</h4>
            <h1 className="modelInSlider">{chosenModel}</h1>
          </div>
          <ImageSlider imgURLs={imgURLs} />
        </div>
      ) : (
        <div className="innerSliderElementWrapper">
          <div className="currentStep hideOnMobile">
            <h4>Opcja:</h4>
            <h1>{currentConfigStepNameInPolish}</h1>
          </div>
          <ImageSlider imgURLs={imgURLs} />
        </div>
      )}
    </div>
  );
};

export default ImageSliderWrapper;
