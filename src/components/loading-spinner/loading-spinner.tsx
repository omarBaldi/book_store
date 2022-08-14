import { FC, CSSProperties } from 'react';
import LoadingSpinnerProps from './dto';
import Styles from './loading-spinner.module.scss';

const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  size = 150,
  thickness = 7,
}: LoadingSpinnerProps) => {
  return (
    <div
      className={Styles.loadingSpinner}
      style={
        {
          '--size': `${size}px`,
          '--thickness': `${thickness}px`,
        } as CSSProperties
      }
    />
  );
};

export default LoadingSpinner;
