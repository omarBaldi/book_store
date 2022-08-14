import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import ErrorPageProps from './dto';
import Styles from './error-page.module.scss';

const ErrorPage: FC<ErrorPageProps> = ({
  title,
  buttonLabel = 'Reload page',
}: ErrorPageProps) => {
  const navigate = useNavigate();
  const handleButtonClick = () => navigate(0);

  return (
    <div className={Styles.errorPage}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>{title}</h1>
        <Button
          cbFunc={handleButtonClick}
          additionalStyle={{ marginTop: '1rem', width: 'auto' }}
        >
          <p>{buttonLabel}</p>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
