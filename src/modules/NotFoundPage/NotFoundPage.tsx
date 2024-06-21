import Button from '../../UI/Buttons/Button';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <>
      <div className={styles.not_found_container}>
        <h1 className={styles.not__found__title}>Page not found</h1>
        <Link to="/" className={styles.not__found__link}>
          <Button variant="primary"> Go to Homepage</Button>
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
