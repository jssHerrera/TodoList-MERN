import { Link } from "react-router-dom";

export const SideBarIcon = ({ icon, text, link }) => (
  <Link to={link} className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </Link>
);
