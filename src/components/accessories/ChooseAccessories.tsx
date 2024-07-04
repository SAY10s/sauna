import AccessoryOption from "./AccessoryOption.tsx";

interface PropsInterface {
  configurationOptions: { name: string; image: string }[];
}

const ChooseAccessories: React.FC<PropsInterface> = ({
  configurationOptions,
}) => {
  return (
    <div className="configurationOfGivenStepWrapper">
      {configurationOptions.map((option, index) => {
        return (
          <AccessoryOption
            name={option.name}
            image={option.image}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ChooseAccessories;
