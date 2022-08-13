import { FC } from 'react';
import { Link } from 'react-router-dom';
import SidebarProps from './dto';

const Sidebar: FC<SidebarProps> = ({
  links,
  additionalContent,
}: SidebarProps) => {
  return (
    <aside
      style={{ minWidth: '20rem', height: '100vh', position: 'sticky', top: 0 }}
    >
      <nav>
        <ul>
          {links.map(({ url, label, icon: IconElement }, index: number) => {
            return (
              <li key={`nav-link-#${index}`}>
                <span>{IconElement}</span>
                <Link to={url}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div style={{ border: '1px solid red' }}>{additionalContent}</div>
    </aside>
  );
};

export default Sidebar;
