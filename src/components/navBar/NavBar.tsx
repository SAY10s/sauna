import { useDispatch, useSelector } from "react-redux";
import {
  chooseStep,
  nextStep,
  previousStep,
} from "../../store/SaunaConfigSlice.ts";
import { RootState } from "../../store/store.ts";
import {
  CURRENT_CONFIG_STEP_NAME_IN_POLISH,
  CURRENT_CONFIG_STEP_NAME_IN_ENGLISH,
} from "../../const/const.ts";

const NavBar = () => {
  const saunaConfig = useSelector((state: RootState) => state.saunaConfig);

  const dispatch = useDispatch();

  const handleNextStep = () => {
    dispatch(nextStep());
  };
  const handlePreviousStep = () => {
    dispatch(previousStep());
  };
  const handleStepChoice = (stepId: number) => {
    dispatch(chooseStep(stepId));
  };

  return (
    <div>
      {CURRENT_CONFIG_STEP_NAME_IN_POLISH.map((step, index) => {
        if (index === saunaConfig.currentConfigStepId)
          return (
            <div key={index}>
              <h3>{step}</h3>
            </div>
          );
        else if (
          saunaConfig[CURRENT_CONFIG_STEP_NAME_IN_ENGLISH[index]] !== null &&
          step !== "podsumowanie"
        )
          return (
            <div
              key={index}
              onClick={() => {
                handleStepChoice(index);
              }}
            >
              {step} &#10003;
            </div>
          );
        else
          return (
            <div
              key={index}
              onClick={() => {
                handleStepChoice(index);
              }}
            >
              {step}
            </div>
          );
      })}
      <br />
      {Object.entries(saunaConfig).map(([key, value], index) => {
        if (value !== null && key !== "currentConfigStepId") {
          return <div key={index}>{`${value}`} </div>;
        }
      })}
      <br />
      <button onClick={handlePreviousStep}>Wróć</button>
      <br />
      <button onClick={handleNextStep}>Dalej</button>
    </div>
  );
};

export default NavBar;
