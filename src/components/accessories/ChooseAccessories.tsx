import AccessoryOption from "./AccessoryOption.tsx";

interface PropsInterface {
  configurationOptions: { name: string; image: string }[];
}

const ChooseAccessories: React.FC<PropsInterface> = ({
  configurationOptions,
}) => {
  return (
    <div className="grid65to35">
      <div className="configurationOfGivenStepWrapper">
        <div className="flexCenter70">
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
      </div>
    </div>
  );
};

export default ChooseAccessories;
