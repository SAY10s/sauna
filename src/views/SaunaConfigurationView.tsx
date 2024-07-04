import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import { CONFIGURATION_OPTIONS } from "../const/const.ts";
import NavBar from "../components/navBar/NavBar.tsx";
import ConfigurationOfGivenStepWrapper from "../components/configurationOptions/ConfigurationOfGivenStepWrapper.tsx";
import ConfigurationSummaryWrapper from "../components/configurationSummary/ConfigurationSummaryWrapper.tsx";
import ChooseAccessories from "../components/accessories/ChooseAccessories.tsx";
import ImageSliderWrapper from "../components/imageSlider/ImageSliderWrapper.tsx";

const SaunaConfigurationView = () => {
  const currentConfigStepId = useSelector(
    (state: RootState) => state.saunaConfig.currentConfigStepId,
  );
  const currentConfigOptions = CONFIGURATION_OPTIONS[currentConfigStepId];

  let StepComponentContent;

  //check if we are in Config, Accessories or Summary step
  if (currentConfigStepId < 7) {
    StepComponentContent = (
      <ConfigurationOfGivenStepWrapper
        configurationOptions={currentConfigOptions}
      />
    );
  } else if (currentConfigStepId === 7) {
    StepComponentContent = (
      <ChooseAccessories configurationOptions={currentConfigOptions} />
    );
  } else {
    StepComponentContent = <ConfigurationSummaryWrapper />;
  }

  return (
    <main>
      <div className="imageSliderAndNavBarWrapper">
        <ImageSliderWrapper />
        <NavBar />
      </div>
      {StepComponentContent}
    </main>
  );
};

export default SaunaConfigurationView;
