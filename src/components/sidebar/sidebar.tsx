import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarProps from './dto';
import Styles from './sidebar.module.scss';

/**
 * TODO: add dynamic class active if current URL match the link URL
 */
const Sidebar: FC<SidebarProps> = ({
  links,
  additionalContent,
}: SidebarProps) => {
  const navigate = useNavigate();

  return (
    <aside className={Styles.sidebarWrapper}>
      <nav className={Styles.sidebar}>
        <ul className={Styles.linksWrapper}>
          {links.map(({ url, label, icon: IconElement }, index: number) => {
            return (
              <li
                key={`nav-link-#${index}`}
                className={Styles.link}
                onClick={() => navigate(url)}
              >
                <span className={Styles.iconWrapper}>{IconElement}</span>
                <span className={Styles.linkLabel}>{label}</span>
              </li>
            );
          })}
        </ul>
      </nav>

      <div>{additionalContent}</div>
    </aside>
  );
};

export default Sidebar;
