import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { CloseIcon } from '../../assets';
import { Button } from '../button';
import { BUTTON_SIZES } from '../button/dto';
import SidebarProps from './dto';
import Styles from './sidebar.module.scss';

const Sidebar: FC<SidebarProps> = ({
  links,
  additionalContent,
  burgerMenuCbFunc,
}: SidebarProps) => {
  return (
    <aside className={Styles.sidebarWrapper}>
      <nav className={Styles.sidebar}>
        <div className={Styles.closeMenuButtonWrapper}>
          <Button
            cbFunc={burgerMenuCbFunc}
            size={BUTTON_SIZES.SMALL}
            additionalStyle={{ width: 'auto' }}
          >
            <CloseIcon className={Styles.closeIcon} />
          </Button>
        </div>
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
