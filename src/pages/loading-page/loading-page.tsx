import { FC } from 'react';
import { LoadingSpinner } from '../../components/loading-spinner';
import LoadingPageProps from './dto';
import Styles from './loading-page.module.scss';

const LoadingPage: FC<LoadingPageProps> = ({
  message = 'Please wait a moment. It is taking longer than expected.',
}: LoadingPageProps) => {
  return (
    <div className={Styles.loadingPage}>
      <div className={Styles.contentWrapper}>
        <h1>{message}</h1>
        <LoadingSpinner additionalStyle={{ marginTop: '2rem' }} />
      </div>
    </div>
  );
};

export default LoadingPage;
