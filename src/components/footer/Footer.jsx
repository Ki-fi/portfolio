import './Footer.css';
import {Link} from "react-router-dom";

function Footer( ) {

    return (
        <footer className="footer">
            <p>KVK: 99018071 | BTW: NL005367679B66 | <a href={()=>{}}>Privacy</a> | <Link to={'/toegankelijkheid'}>Toegankelijkheid</Link></p>
        </footer>
    )

}

export default Footer;