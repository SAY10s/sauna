import ConfiguratonOption from "./ConfiguratonOption.tsx";

interface PropsInterface {
  configurationOptions: { name: string; image: string }[];
}

const ConfigurationOfGivenStepWrapper: React.FC<PropsInterface> = ({
  configurationOptions,
}) => {
  return (
    <div className="configurationOfGivenStepWrapper">
      {configurationOptions.map((option, index) => {
        return (
          <ConfiguratonOption
            name={option.name}
            image={option.image}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ConfigurationOfGivenStepWrapper;
