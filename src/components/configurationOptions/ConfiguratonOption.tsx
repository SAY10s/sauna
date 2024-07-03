interface PropsInterface {
  name: string;
  backgroundImage: string;
}

const ConfiguratonOption: React.FC<PropsInterface> = ({
  name,
  backgroundImage,
}) => {
  return (
    <div>
      <h4>{name}</h4>
      <img src={backgroundImage} alt={name} />
    </div>
  );
};

export default ConfiguratonOption;
