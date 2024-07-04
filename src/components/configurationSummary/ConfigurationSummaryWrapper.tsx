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

  const accessories = saunaConfig.accessories || [];

  return (
    <div className="grid65to35">
      <div className="tempWrapper summaryWrapper">
        <h2>Podsumowanie konfiguracji</h2>
        <div className="summaryOptionsWrapper">
          {stepNamesInPolish.map((step, index) => {
            //skip the "model" step (model is shown in the image slider)
            if (index === 0) return null;

            const stepValue = saunaConfig[step.english];
            if (stepValue && step.polish !== "akcesoria") {
              return (
                <SummaryOption
                  key={index}
                  stepNameInPolish={step.polish}
                  stepNameInEnglish={step.english}
                  stepId={index}
                  name={stepValue.toString()}
                />
              );
            } else if (
              step.polish !== "podsumowanie" &&
              step.polish !== "akcesoria"
            ) {
              return (
                <SummaryOption
                  key={index}
                  stepNameInPolish={step.polish}
                  stepNameInEnglish={step.english}
                  stepId={index}
                  name="nie wybrano"
                  isSet={false}
                />
              );
            }
            return null;
          })}
        </div>
        <h2>Akcesoria</h2>

        {accessories.length > 0 && (
          <div className="summaryAccessoriesWrapper">
            {accessories.map((accessory, index) => {
              // const accessoryDetails = CONFIGURATION_OPTIONS[7].find(
              //   (option) => option.name === accessory,
              // );
              return (
                <SummaryOption
                  key={`accessory-${index}`}
                  stepNameInPolish="Akcesoria"
                  stepNameInEnglish="accessories"
                  stepId={7}
                  name={accessory}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfigurationSummaryWrapper;
