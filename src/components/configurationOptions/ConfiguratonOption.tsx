interface PropsInterface {
  name: string;
  image: string;
}

const ConfiguratonOption: React.FC<PropsInterface> = ({ name, image }) => {
  return (
    <div className="configurationOption">
      <h4>{name}</h4>
      <img src={image} alt={name} />
    </div>
  );
};

export default ConfiguratonOption;
