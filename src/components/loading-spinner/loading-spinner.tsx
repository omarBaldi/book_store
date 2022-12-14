import { FC, CSSProperties } from 'react';
import LoadingSpinnerProps from './dto';
import Styles from './loading-spinner.module.scss';

const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  size = 60,
  thickness = 2,
  additionalStyle = {},
}: LoadingSpinnerProps) => {
  return (
    <div
      className={Styles.loadingSpinner}
      style={
        {
          '--size': `${size}px`,
          '--thickness': `${thickness}px`,
          ...additionalStyle,
        } as CSSProperties
      }
    />
  );
};

export default LoadingSpinner;
