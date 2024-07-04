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
  isSet?: boolean;
}

const SummaryOption: React.FC<PropsInterface> = ({
  stepNameInPolish,
  stepNameInEnglish,
  stepId,
  name,
  isSet = true,
}) => {
  const dispatch = useDispatch();
  const handleChoosingStep = () => {
    dispatch(chooseStep(stepId));
  };

  if (isSet) {
    const stepIndex =
      CURRENT_CONFIG_STEP_NAME_IN_ENGLISH.indexOf(stepNameInEnglish);
    const options = CONFIGURATION_OPTIONS[stepIndex];
    console.table(options);
    const option = options.find((option) => option.name === name);

    return (
      <div className="summaryOption">
        <img src={option?.image} alt={name} />
        <h6>{stepNameInPolish}</h6>
        <h3>{name}</h3>
        <button onClick={handleChoosingStep}>Zmień &rarr;</button>
      </div>
    );
  } else {
    return (
      <div className="summaryOption">
        <img src="https://placehold.co/64?text=-" alt={name} />
        <h6>{stepNameInPolish}</h6>
        <h3>{name}</h3>
        <button onClick={handleChoosingStep}>Wybierz &rarr;</button>
      </div>
    );
  }
};

export default SummaryOption;
