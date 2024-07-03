import { useDispatch, useSelector } from "react-redux";
import { nextStep, previousStep } from "../../store/SaunaConfigSlice.ts";
import { RootState } from "../../store/store.ts";
import { CURRENT_CONFIG_STEP_NAME_IN_POLISH } from "../../const/const.ts";

const NavBar = () => {
  const chosenConfig = useSelector((state: RootState) => state.saunaConfig);

  const dispatch = useDispatch();

  const handleNextStep = () => {
    dispatch(nextStep());
  };
  const handlePreviousStep = () => {
    dispatch(previousStep());
  };

  return (
    <div>
      {CURRENT_CONFIG_STEP_NAME_IN_POLISH.map((step, index) => {
        if (index === chosenConfig.currentConfigStepId)
          return (
            <div key={index}>
              <h3>{step}</h3>
            </div>
          );
        else return <div key={index}>{step}</div>;
      })}
      <br />
      {Object.entries(chosenConfig).map(([key, value], index) => {
        if (value !== null && key !== "currentConfigStepId") {
          return <div key={index}>{`${key}: ${value}`}</div>;
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
