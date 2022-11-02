import { HiHome } from "react-icons/hi";
import { RiAddFill } from "react-icons/ri";
import DarkMode from "../tools/DarkMode";
import { SideBarIcon } from "../tools/sidebarIcon";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col gap-4 bg-white dark:bg-gray-900 shadow-lg pt-4">
      <SideBarIcon icon={<HiHome size="23" />} text="Home" link="/" />

      <SideBarIcon
        icon={<RiAddFill size="23" />}
        text="Create Tasks"
        link="/tasks"
      />

      <DarkMode text="theme" />
    </div>
  );
};

export default SideBar;
