//TODO: change type of icon prop
export type SidebarLinkProps = {
  icon?: any;
  label: string;
  url: string;
};

type SidebarProps = {
  links: SidebarLinkProps[];
  additionalContent?: React.ReactNode;
};

export default SidebarProps;
