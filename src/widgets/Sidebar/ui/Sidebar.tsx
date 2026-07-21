import styles from "./Sidebar.module.scss"
import {Link} from "react-router-dom";
import {listLinks} from "@/widgets/Sidebar/model/listLinks";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.menu}>
        {listLinks.map(({label, href}) => (
          <li
            key={href}
            className={styles.menuLink}
          >
            <Link to={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;