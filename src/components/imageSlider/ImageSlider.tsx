import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import {
  CURRENT_CONFIG_STEP_NAME_IN_ENGLISH,
  CURRENT_CONFIG_STEP_NAME_IN_POLISH,
} from "../../const/const.ts";

const ImageSlider = () => {
  const currentConfigStepId = useSelector(
    (state: RootState) => state.saunaConfig.currentConfigStepId,
  );
  const currentChoosenOption = useSelector(
    (state: RootState) =>
      state.saunaConfig[
        CURRENT_CONFIG_STEP_NAME_IN_ENGLISH[currentConfigStepId]
      ],
  );

  const currentConfigStepNameInPolish =
    CURRENT_CONFIG_STEP_NAME_IN_POLISH[currentConfigStepId];

  const imgURL = `https://placehold.co/256?text=${currentConfigStepNameInPolish}:+${currentChoosenOption}`;

  return (
    <div className="imageSlider">
      <h4>Opcja:</h4>
      <h3>{currentConfigStepNameInPolish}</h3>
      <img src={imgURL} alt="Zdjęcie obecnie wybranej opcji w danym kroku" />
    </div>
  );
};

export default ImageSlider;
