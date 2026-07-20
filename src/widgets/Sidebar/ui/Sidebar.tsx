import "./Sidebar.module.scss"
import {Link} from "react-router-dom";
import {listLinks} from "@/widgets/Sidebar/model/listLinks";

const Sidebar = () => {
  return (
    <aside>
      <ul>
        {listLinks.map(({label, href}) => (
          <li key={href}>
            <Link to={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;