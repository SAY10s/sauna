import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";

const ConfigurationSummaryWrapper = () => {
  const saunaConfig = useSelector((state: RootState) => state.saunaConfig);

  return (
    <div>
      <h1>Config summary</h1>
      {Object.entries(saunaConfig).map(([key, value], index) => {
        if (value !== null && key !== "currentConfigStepId") {
          return <div key={index}>{`${key}: ${value}`}</div>;
        }
      })}
    </div>
  );
};

export default ConfigurationSummaryWrapper;
