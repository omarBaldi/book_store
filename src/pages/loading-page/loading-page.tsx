import { FC } from 'react';
import { LoadingSpinner } from '../../components/loading-spinner';
import { DEFAULT_LOADING_MESSAGE } from '../../constant';
import LoadingPageProps from './dto';
import Styles from './loading-page.module.scss';

const LoadingPage: FC<LoadingPageProps> = ({
  message = DEFAULT_LOADING_MESSAGE,
  additionalStyle = {},
}: LoadingPageProps) => {
  return (
    <div className={Styles.loadingPage} style={{ ...additionalStyle }}>
      <div className={Styles.contentWrapper}>
        <h2 className={Styles.message}>{message}</h2>
        <LoadingSpinner additionalStyle={{ marginTop: '2rem' }} />
      </div>
    </div>
  );
};

export default LoadingPage;
