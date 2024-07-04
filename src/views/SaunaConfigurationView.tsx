import ImageSlider from "../components/imageSlider/ImageSlider.tsx";
import NavBar from "../components/navBar/NavBar.tsx";
import ConfigurationOfGivenStepWrapper from "../components/configurationOptions/ConfigurationOfGivenStepWrapper.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import { CONFIGURATION_OPTIONS } from "../const/const.ts";
import ConfigurationSummaryWrapper from "../components/configurationSummary/ConfigurationSummaryWrapper.tsx";
import ChooseAccessories from "../components/accessories/ChooseAccessories.tsx";

const SaunaConfigurationView = () => {
  const currentConfigStepId = useSelector(
    (state: RootState) => state.saunaConfig.currentConfigStepId,
  );

  //TEMPORARY
  const currentConfigOptions = CONFIGURATION_OPTIONS[currentConfigStepId];

  if (currentConfigStepId < 7) {
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
  } else if (currentConfigStepId === 7) {
    return (
      <div>
        <div className="tempWrapper">
          <ImageSlider />
          <NavBar />
        </div>
        <ChooseAccessories configurationOptions={currentConfigOptions} />
      </div>
    );
  } else {
    return (
      <div>
        <div className="tempWrapper">
          <ImageSlider />
          <NavBar />
        </div>
        <ConfigurationSummaryWrapper />
      </div>
    );
  }
};

export default SaunaConfigurationView;
