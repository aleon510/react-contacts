import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const { logout } = useAuth();
  const history = useHistory();

  return (
    <nav>
      <button onClick={() => history.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default NavBar;
