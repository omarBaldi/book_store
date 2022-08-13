import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import SidebarProps from './dto';
import Styles from './sidebar.module.scss';

const Sidebar: FC<SidebarProps> = ({
  links,
  additionalContent,
}: SidebarProps) => {
  return (
    <aside className={Styles.sidebarWrapper}>
      <nav className={Styles.sidebar}>
        <ul className={Styles.linksWrapper}>
          {links.map(({ url, label, icon: IconElement }, index: number) => {
            return (
              <NavLink to={url} key={`nav-link-#${index}`}>
                {({ isActive }) => (
                  <li
                    className={`${Styles.link} ${
                      isActive ? Styles.activeLink : ''
                    }`}
                  >
                    <span className={Styles.iconWrapper}>{IconElement}</span>
                    <span className={Styles.linkLabel}>{label}</span>
                  </li>
                )}
              </NavLink>
            );
          })}
        </ul>
      </nav>

      <div>{additionalContent}</div>
    </aside>
  );
};

export default Sidebar;
