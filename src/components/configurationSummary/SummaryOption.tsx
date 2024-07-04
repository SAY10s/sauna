import {
  CONFIGURATION_OPTIONS,
  CURRENT_CONFIG_STEP_NAME_IN_ENGLISH,
} from "../../const/const.ts";
import { useDispatch } from "react-redux";
import { chooseStep } from "../../store/SaunaConfigSlice.ts";

interface PropsInterface {
  stepNameInPolish: string;
  stepNameInEnglish: string; // Add this prop
  stepId: number;
  name: string;
}

const SummaryOption: React.FC<PropsInterface> = ({
  stepNameInPolish,
  stepNameInEnglish,
  stepId,
  name,
}) => {
  const stepIndex =
    CURRENT_CONFIG_STEP_NAME_IN_ENGLISH.indexOf(stepNameInEnglish);
  const options = CONFIGURATION_OPTIONS[stepIndex];
  const option = options.find((option) => option.name === name);

  const dispatch = useDispatch();

  const handleChoosingStep = () => {
    dispatch(chooseStep(stepId));
  };

  return (
    <div>
      <img src={option?.image} alt={name} />
      <h6>{stepNameInPolish}</h6>
      <h4>{name}</h4>
      <button onClick={handleChoosingStep}>Zmień &rarr;</button>
    </div>
  );
};

export default SummaryOption;
