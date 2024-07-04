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
    <nav className="navBarWrapper">
      <div className="optionsAndChosenOptionsWrapper">
        <div className="optionsWrapper">
          {CURRENT_CONFIG_STEP_NAME_IN_POLISH.map((step, index) => {
            if (index === saunaConfig.currentConfigStepId)
              return (
                <div key={index} className="active">
                  {step}
                </div>
              );
            else if (
              saunaConfig[CURRENT_CONFIG_STEP_NAME_IN_ENGLISH[index]] !==
                null &&
              step !== "podsumowanie"
            )
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleStepChoice(index);
                  }}
                >
                  {step} <span className="hideOnMobile">&#10003;</span>
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
        </div>
        <div className="chosenOptions hideOnMobile">
          <div className="model">
            {saunaConfig.model !== null ? `${saunaConfig.model}` : ""}
          </div>
          <div className="bold">Wybrane Opcje:</div>
          <div className="chosenOptionsBoxElements">
            {Object.entries(saunaConfig).map(([key, value], index) => {
              if (
                value !== null &&
                key !== "currentConfigStepId" &&
                key !== "model" &&
                key !== "accessories"
              ) {
                return (
                  <div key={index} className="chosenOption">
                    <div> {`${value}`}</div>
                    <div>&#10005;</div>
                  </div>
                );
              }
              if (key === "accessories") {
                if (Array.isArray(value) && value.length > 0)
                  return value.map((accessory, index) => {
                    return (
                      <div key={index} className="chosenOption">
                        <div> {`${accessory}`}</div>
                        <div>&#10005;</div>
                      </div>
                    );
                  });
              }
            })}
          </div>
        </div>
      </div>
      <div className="buttonWrapper hideOnMobile">
        <div className="price ">
          <div>Cena konfiguracji:</div>
          <div>37 000,00zł</div>
        </div>
        <button onClick={handlePreviousStep}>Wróć</button>
        <button onClick={handleNextStep}>Dalej</button>
      </div>
    </nav>
  );
};

export default NavBar;
