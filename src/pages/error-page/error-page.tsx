import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import ErrorPageProps from './dto';
import Styles from './error-page.module.scss';

const ErrorPage: FC<ErrorPageProps> = ({
  title,
  buttonLabel = 'Reload page',
  additionalStyle = {},
}: ErrorPageProps) => {
  const navigate = useNavigate();
  const handleButtonClick = () => navigate(0);

  return (
    <div className={Styles.errorPage} style={{ ...additionalStyle }}>
      <div className={Styles.content}>
        <h2 className={Styles.title}>{title}</h2>
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
