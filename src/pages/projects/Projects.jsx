import './Projects.css';
import Card from "../../components/card/Card.jsx";
import thumbnailProject1 from "../../assets/petnet/Mockup_Post.jpg";
import thumbnailProject2 from "../../assets/EP/Mockup_Overview.jpg";
import thumbnailProject3 from "../../assets/PIDZ/Mockup_login.jpg";
import Chip from "../../components/chip/Chip.jsx";
// import {useNavigate} from "react-router-dom";

function Projects() {
    // const navigate = useNavigate();

    return (
        <div className="projects-page">
            <div className="project-1">
                <Card
                    thumbnail={thumbnailProject1}
                    onClick={() => {}}
                    // onClick={() => {navigate("/petnet")}}
                    chips={
                        <>
                        <Chip chipText={"Software Development"}/>
                        </>}
                />
            </div>
            <div className="project-2">
                <Card
                    thumbnail={thumbnailProject2}
                    onClick={() => {}}
                    chips={
                        <>
                            <Chip chipText={"Interaction Design"}/>
                            <Chip chipText={"Visual Design"}/>
                        </>}
                />
            </div>
            <div className="project-3">
                <Card
                    thumbnail={thumbnailProject3}
                    onClick={() => {}}
                    chips={
                        <>
                            <Chip chipText={"User Research"}/>
                            <Chip chipText={"Interaction Design"}/>
                        </>}
                />
            </div>
        </div>


    )
}

export default Projects;