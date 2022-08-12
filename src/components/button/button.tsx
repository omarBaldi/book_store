import { FC, useRef } from 'react';
import ButtonProps, { BUTTON_CATEGORIES, BUTTON_SIZES } from './dto';
import Styles from './button.module.scss';

const Button: FC<ButtonProps> = ({
  disabled = false,
  size = BUTTON_SIZES.SMALL,
  category = BUTTON_CATEGORIES.SECONDARY,
  additionalStyle = {},
  cbFunc,
  children,
}: ButtonProps) => {
  const buttonStyles = useRef({
    [BUTTON_SIZES.LARGE]: Styles.largeSize,
    [BUTTON_SIZES.MEDIUM]: Styles.mediumSize,
    [BUTTON_SIZES.SMALL]: Styles.smallSize,
    [BUTTON_CATEGORIES.PRIMARY]: Styles.buttonPrimary,
    [BUTTON_CATEGORIES.SECONDARY]: Styles.buttonSecondary,
  }).current;

  return (
    <button
      disabled={disabled}
      onClick={cbFunc}
      style={{ ...additionalStyle }}
      className={`${Styles.buttonWrapper} ${buttonStyles[size]} ${
        buttonStyles[category]
      } ${disabled ? Styles.disabled : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
