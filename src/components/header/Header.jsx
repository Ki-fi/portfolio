import './Header.css';
import {useLocation, useNavigate} from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    const location = useLocation();

    const selected = location.pathname.startsWith('/Home') ? 'home'
        : location.pathname.startsWith('/Projects') ? 'projects'
            : location.pathname.startsWith('/Services') ? 'services'
                : 'services';

    const handleItem = (path) => {
        navigate(path);
    };

    return (
        <nav className="header-nav">
            <ul>
                <li onClick={() => handleItem('/')} className={`navbar ${selected === 'home' ? 'active' : ''}`}>
                    <span className='subtitle'>Home</span>
                </li>
                <li onClick={() => handleItem('/projects')} className={`navbar ${selected === 'projects' ? 'active' : ''}`}>
                    <span className='subtitle'>Projects</span>
                </li>
                <li onClick={() => handleItem('/services')} className={`navbar ${selected === 'services' ? 'active' : ''}`}>
                    <span className='subtitle'>Services</span>
                </li>
            </ul>
        </nav>
    )

}

export default Header;