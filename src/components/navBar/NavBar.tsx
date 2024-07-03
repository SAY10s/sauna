import { useDispatch, useSelector } from "react-redux";
import { nextStep, previousStep } from "../../store/SaunaConfigSlice.ts";
import { RootState } from "../../store/store.ts";
import { CURRENT_CONFIG_STEP_NAME_IN_POLISH } from "../../const/const.ts";

const NavBar = () => {
  const choosenConfig = useSelector((state: RootState) => state.saunaConfig);

  const dispatch = useDispatch();

  const handleNextStep = () => {
    dispatch(nextStep());
  };
  const handlePreviousStep = () => {
    dispatch(previousStep());
  };

  return (
    <div>
      <h3>Navigation Bar</h3>
      {CURRENT_CONFIG_STEP_NAME_IN_POLISH.map((step, index) => (
        <div key={index}>{step}</div>
      ))}
      <br />
      {Object.entries(choosenConfig).map(([key, value], index) => {
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
