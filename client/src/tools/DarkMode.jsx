// import { FaMoon, FaSun } from "react-icons/fa";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import useDarkMode from "../hooks/useDarkMode";

const DarkMode = ({text}) => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <div className="sidebar-icon group">
      <span onClick={handleMode}>
        {darkTheme ? (
          <IoMdSunny size="24" className="top-navigation-icon" />
        ) : (
          <IoMdMoon size="24" className="top-navigation-icon" />
        )}
      </span>
      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );
};

export default DarkMode;
