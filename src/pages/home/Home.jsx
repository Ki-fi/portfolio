import './Home.css';
import Button from "../../components/button/Button.jsx";
import {useNavigate} from "react-router-dom";


function Home () {
    const navigate = useNavigate();

    return (
        <>
        <div className="homepage">
            <main className="home-container">
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
            </main>
            <footer className="techstack-container">
                <img src="/src/assets/tech-stack/Figma.png" alt="Figma"/>
                <img src="/src/assets/tech-stack/HTML_.png" alt="HTML"/>
                <img src="/src/assets/tech-stack/CSS.png" alt="CSS"/>
                <img src="/src/assets/tech-stack/J_S.png" alt="Javascript"/>
                <img src="/src/assets/tech-stack/React.png" alt="React"/>
            </footer>
        </div>
        <div className="background-container">
            <img src="/src/assets/Keys.png" alt="Keyboard"/>
        </div>
        </>
    )
}

export default Home;