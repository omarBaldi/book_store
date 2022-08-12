export enum BUTTON_SIZES {
  SMALL,
  MEDIUM,
  LARGE,
}

export enum BUTTON_CATEGORIES {
  PRIMARY,
  SECONDARY,
}

type ButtonProps = {
  category?: BUTTON_CATEGORIES;
  size?: BUTTON_SIZES;
  additionalStyle?: React.CSSProperties;
  cbFunc: () => void;
  children: React.ReactNode;
};

export default ButtonProps;
