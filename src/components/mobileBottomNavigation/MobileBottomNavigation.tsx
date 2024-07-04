import { useDispatch } from "react-redux";
import { nextStep } from "../../store/SaunaConfigSlice.ts";

const MobileBottomNavigation = () => {
  const dispatch = useDispatch();

  const handleNextStep = () => {
    dispatch(nextStep());
  };

  return (
    <div className="mobileBottomNavigation hideOnDesktop">
      <div className="price">
        <div>Cena konfiguracji:</div>
        <div>37 000,00zł</div>
      </div>
      <button onClick={handleNextStep}>Dalej</button>
    </div>
  );
};

export default MobileBottomNavigation;
