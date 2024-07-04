import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import {
  setModel,
  setGlazing,
  setFacade,
  setInteriorFinish,
  setBench,
  setStove,
  setLighting,
} from "../../store/SaunaConfigSlice.ts";
import { CURRENT_CONFIG_STEP_NAME_IN_ENGLISH } from "../../const/const.ts";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

interface ActionCreatorsMap {
  [key: string]: ActionCreatorWithPayload<string, string>;
  model: ActionCreatorWithPayload<string, "saunaConfig/setModel">;
  glazing: ActionCreatorWithPayload<string, "saunaConfig/setGlazing">;
  facade: ActionCreatorWithPayload<string, "saunaConfig/setFacade">;
  interiorFinish: ActionCreatorWithPayload<
    string,
    "saunaConfig/setInteriorFinish"
  >;
  bench: ActionCreatorWithPayload<string, "saunaConfig/setBench">;
  stove: ActionCreatorWithPayload<string, "saunaConfig/setStove">;
  lighting: ActionCreatorWithPayload<string, "saunaConfig/setLighting">;
}

interface PropsInterface {
  name: string;
  image: string;
}

const ConfigurationOption: React.FC<PropsInterface> = ({ name, image }) => {
  const dispatch = useDispatch();
  const currentConfigStepId = useSelector(
    (state: RootState) => state.saunaConfig.currentConfigStepId,
  );
  const currentConfigStepNameInEnglish =
    CURRENT_CONFIG_STEP_NAME_IN_ENGLISH[currentConfigStepId];
  const currentConfigOption = useSelector(
    (state: RootState) => state.saunaConfig[currentConfigStepNameInEnglish],
  );

  const actionMapping: ActionCreatorsMap = {
    model: setModel,
    glazing: setGlazing,
    facade: setFacade,
    interiorFinish: setInteriorFinish,
    bench: setBench,
    stove: setStove,
    lighting: setLighting,
  };

  const handleOptionClick = () => {
    const action = actionMapping[currentConfigStepNameInEnglish];

    if (action) {
      dispatch(action(name));
    } else {
      console.log("Unknown configuration step");
    }
  };

  if (currentConfigOption === name) {
    return (
      <div className="configurationOption selected" onClick={handleOptionClick}>
        <h4>{name}</h4>
        <img src={image} alt={name} />
      </div>
    );
  }
  return (
    <div className="configurationOption" onClick={handleOptionClick}>
      <h4>{name}</h4>
      <img src={image} alt={name} />
    </div>
  );
};

export default ConfigurationOption;
