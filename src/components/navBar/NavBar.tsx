import { useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";

const NavBar = () => {
  const model = useSelector((state: RootState) => state.saunaConfig.model);

  return (
    <div>
      <h3>Navigation Bar</h3>
      {model}
    </div>
  );
};

export default NavBar;
