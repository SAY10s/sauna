import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import { CURRENT_CONFIG_STEP_NAME_IN_POLISH } from "../../const/const.ts";

const ImageSlider = () => {
  const currentConfigStepId = useSelector(
    (state: RootState) => state.saunaConfig.currentConfigStepId,
  );
  const currentConfigStepNameInPolish =
    CURRENT_CONFIG_STEP_NAME_IN_POLISH[currentConfigStepId];

  return (
    <div className="imageSlider">
      <h4>Opcja:</h4>
      <h3>{currentConfigStepNameInPolish}</h3>
    </div>
  );
};

export default ImageSlider;
