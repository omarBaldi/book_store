import { FC, useRef } from 'react';
import { Link } from 'react-router-dom';
import ButtonProps, { BUTTON_CATEGORIES, BUTTON_SIZES } from './dto';
import Styles from './button.module.scss';

/**
 * TODO: check if url provided is external or internal
 */
const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const buttonStyles = useRef({
    [BUTTON_SIZES.LARGE]: Styles.largeSize,
    [BUTTON_SIZES.MEDIUM]: Styles.mediumSize,
    [BUTTON_SIZES.SMALL]: Styles.smallSize,
    [BUTTON_CATEGORIES.PRIMARY]: Styles.buttonPrimary,
    [BUTTON_CATEGORIES.SECONDARY]: Styles.buttonSecondary,
  }).current;

  const {
    disabled = false,
    size = BUTTON_SIZES.MEDIUM,
    category = BUTTON_CATEGORIES.PRIMARY,
    additionalStyle = {},
    children,
  } = props;

  const handleButtonClick = () => ('cbFunc' in props ? props.cbFunc : null);

  return (
    <button
      disabled={disabled}
      onClick={handleButtonClick}
      style={{ ...(additionalStyle ?? {}) }}
      className={`${Styles.buttonWrapper} ${buttonStyles[size]} ${
        buttonStyles[category]
      } ${disabled ? Styles.disabled : ''}`}
    >
      {'url' in props ? (
        <Link to={props.url} target='_blank' className={Styles.buttonLink}>
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
