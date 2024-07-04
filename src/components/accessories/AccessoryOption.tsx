import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import { addAccessory, removeAccessory } from "../../store/SaunaConfigSlice.ts";
import { CURRENT_CONFIG_STEP_NAME_IN_ENGLISH } from "../../const/const.ts";

interface PropsInterface {
  name: string;
  image: string;
}

const AccessoryOption: React.FC<PropsInterface> = ({ name, image }) => {
  const dispatch = useDispatch();
  const currentConfigStepId = useSelector(
    (state: RootState) => state.saunaConfig.currentConfigStepId,
  );
  const currentConfigStepNameInEnglish =
    CURRENT_CONFIG_STEP_NAME_IN_ENGLISH[currentConfigStepId];
  const currentConfigOption = useSelector(
    (state: RootState) => state.saunaConfig[currentConfigStepNameInEnglish],
  );

  const handleOptionClick = () => {
    if (
      Array.isArray(currentConfigOption) &&
      currentConfigOption.includes(name)
    ) {
      dispatch(removeAccessory(name));
    } else {
      dispatch(addAccessory(name));
    }
  };

  const isSelected = Array.isArray(currentConfigOption)
    ? currentConfigOption.includes(name)
    : currentConfigOption === name;

  return (
    <div
      className={`configurationOption ${isSelected ? "selected" : ""}`}
      onClick={handleOptionClick}
    >
      <h4>{name}</h4>
      <img src={image} alt={name} />
    </div>
  );
};

export default AccessoryOption;
