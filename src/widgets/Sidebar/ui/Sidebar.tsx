import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { sidebarLinks } from '../model/sidebarLinks';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>LifeOS</h2>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          {sidebarLinks.map(({ label, href }) => (
            <li key={href}>
              <NavLink
                to={href}
                className={({ isActive }) =>
                  clsx(styles.link, {
                    [styles.active]: isActive,
                  })
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
