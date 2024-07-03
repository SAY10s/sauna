import ImageSlider from "../components/imageSlider/ImageSlider.tsx";
import NavBar from "../components/navBar/NavBar.tsx";
import ConfigurationOfGivenStepWrapper from "../components/configurationOptions/ConfigurationOfGivenStepWrapper.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import { CONFIGURATION_OPTIONS } from "../const/const.ts";

const SaunaConfigurationView = () => {
  const currentConfigStepId = useSelector(
    (state: RootState) => state.saunaConfig.currentConfigStepId,
  );

  //TEMPORARY
  const currentConfigOptions = CONFIGURATION_OPTIONS[currentConfigStepId];

  return (
    <div>
      <div className="tempWrapper">
        <ImageSlider />
        <NavBar />
      </div>
      <ConfigurationOfGivenStepWrapper
        configurationOptions={currentConfigOptions}
      />
    </div>
  );
};

export default SaunaConfigurationView;
