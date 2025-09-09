import './Home.css';
import Button from "../../components/button/Button.jsx";
import {useNavigate} from "react-router-dom";

function Home () {
    const navigate = useNavigate();

    return (
        <div className="homepage">
            <div className="greeting-container">
                <img src="/src/assets/HELLO.svg" alt="Hello"/>
                <img src="/src/assets/I’M KIKI.svg" alt="I'm Kiki"/>
            </div>
            <div className="button-container">
                <Button
                    type="button"
                    variant="primary"
                    onClick={() => {navigate("/projects")}}
                    buttonText="projects"
                />
                <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {navigate("/contact")}}
                    buttonText="contact"
                />
            </div>
        </div>
    )
}

export default Home;