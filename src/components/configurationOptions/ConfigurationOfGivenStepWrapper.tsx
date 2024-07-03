interface PropsInterface {
  configurationOptions: { name: string; backgroundImage: string }[];
}

const ConfigurationOfGivenStepWrapper: React.FC<PropsInterface> = ({
  configurationOptions,
}) => {
  return (
    <div>
      <h4>Configuration Of Given Step Wrapper</h4>
      {configurationOptions.map((option, index) => {
        return (
          <div key={index}>
            <h4>{option.name}</h4>
            <img src={option.backgroundImage} alt={option.name} />
          </div>
        );
      })}
    </div>
  );
};

export default ConfigurationOfGivenStepWrapper;
