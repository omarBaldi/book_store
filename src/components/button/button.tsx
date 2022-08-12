import { FC } from 'react';
import ButtonProps, { BUTTON_CATEGORIES, BUTTON_SIZES } from './dto';

const Button: FC<ButtonProps> = ({
  size = BUTTON_SIZES.MEDIUM,
  category = BUTTON_CATEGORIES.PRIMARY,
  additionalStyle = {},
  cbFunc,
  children,
}: ButtonProps) => {
  return (
    <button onClick={cbFunc} style={{ ...additionalStyle }}>
      {children}
    </button>
  );
};

export default Button;
