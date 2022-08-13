export enum BUTTON_SIZES {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum BUTTON_CATEGORIES {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type DefaultButtonProps = {
  disabled?: boolean;
  category?: BUTTON_CATEGORIES;
  size?: BUTTON_SIZES;
  additionalStyle?: React.CSSProperties;
  children: React.ReactNode;
};

type ButtonProps = DefaultButtonProps &
  (
    | {
        cbFunc: () => void;
      }
    | { url: string }
  );

export default ButtonProps;
