import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import { CURRENT_CONFIG_STEP_NAME_IN_POLISH } from "../../const/const.ts";

const NavBar = () => {
  const model = useSelector((state: RootState) => state.saunaConfig.model);

  return (
    <div>
      <h3>Navigation Bar</h3>
      {CURRENT_CONFIG_STEP_NAME_IN_POLISH.map((step, index) => (
        <div key={index}>{step}</div>
      ))}
      <br />
      {model}
    </div>
  );
};

export default NavBar;
