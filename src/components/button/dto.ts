export enum BUTTON_SIZES {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum BUTTON_CATEGORIES {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

//TODO: { cbFunc?: () => void } | { url: string }
type ButtonProps = {
  disabled?: boolean;
  category?: BUTTON_CATEGORIES;
  size?: BUTTON_SIZES;
  additionalStyle?: React.CSSProperties;
  cbFunc: () => void;
  children: React.ReactNode;
};

export default ButtonProps;
