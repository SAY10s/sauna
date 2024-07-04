import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import SummaryOption from "./SummaryOption.tsx";
import {
  CURRENT_CONFIG_STEP_NAME_IN_POLISH,
  CURRENT_CONFIG_STEP_NAME_IN_ENGLISH,
} from "../../const/const.ts";

const ConfigurationSummaryWrapper = () => {
  const saunaConfig = useSelector((state: RootState) => state.saunaConfig);

  const stepNamesInPolish = CURRENT_CONFIG_STEP_NAME_IN_ENGLISH.map(
    (step, index) => {
      return {
        english: step,
        polish: CURRENT_CONFIG_STEP_NAME_IN_POLISH[index],
      };
    },
  );

  return (
    <div className="tempWrapper summaryWrapper">
      <div className="w100">
        <h1>Podsumowanie konfiguracji</h1>
      </div>
      {stepNamesInPolish.map((step, index) => {
        const stepValue = saunaConfig[step.english];
        if (stepValue) {
          return (
            <SummaryOption
              key={index}
              stepNameInPolish={step.polish}
              stepNameInEnglish={step.english}
              stepId={index}
              name={stepValue.toString()}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default ConfigurationSummaryWrapper;
