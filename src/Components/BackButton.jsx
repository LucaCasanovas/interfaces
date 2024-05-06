import { useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        navigate('/');
    };

    // Condición para ocultar el botón en la ruta '/'
    if (location.pathname === '/') {
        return null; // No renderiza el botón si estás en la ruta '/'
    }

    return (
        <button onClick={handleBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
    );
};

export default BackButton;
