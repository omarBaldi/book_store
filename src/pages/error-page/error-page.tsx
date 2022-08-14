import { FC } from 'react';
import { Button } from '../../components/button';
import ErrorPageProps from './dto';
import Styles from './error-page.module.scss';

const ErrorPage: FC<ErrorPageProps> = ({
  title,
  buttonRedirectLabel = 'Back to homepage',
  buttonRedirectUrl = '/',
}: ErrorPageProps) => {
  return (
    <div className={Styles.errorPage}>
      <div>
        <h1 className={Styles.title}>{title}</h1>
        <Button url={buttonRedirectUrl} additionalStyle={{ marginTop: '1rem' }}>
          <p>{buttonRedirectLabel}</p>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
