import {
  CONFIGURATION_OPTIONS,
  CURRENT_CONFIG_STEP_NAME_IN_ENGLISH,
} from "../../const/const.ts";

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

  return (
    <div>
      <h3>{stepNameInPolish}</h3>
      <div>{name}</div>
      <img src={option?.image} alt={name} />
      <div>{stepId}</div>
    </div>
  );
};

export default SummaryOption;
