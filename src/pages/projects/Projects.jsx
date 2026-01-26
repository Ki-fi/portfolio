import './Projects.css';
import ProjectCard from "../../components/project-card/ProjectCard.jsx";
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
                <ProjectCard
                    thumbnail={thumbnailProject1}
                    onClick={() => {}}
                    // onClick={() => {navigate("/petnet")}}
                    chips={
                        <>
                        <Chip variant={"filled"} chipText={"Software Development"}/>
                        </>}
                />
            </div>
            <div className="project-2">
                <ProjectCard
                    thumbnail={thumbnailProject2}
                    onClick={() => {}}
                    chips={
                        <>
                            <Chip variant={"filled"} chipText={"Interaction Design"}/>
                            <Chip variant={"filled"} chipText={"Visual Design"}/>
                        </>}
                />
            </div>
            <div className="project-3">
                <ProjectCard
                    thumbnail={thumbnailProject3}
                    onClick={() => {}}
                    chips={
                        <>
                            <Chip variant={"filled"} chipText={"User Research"}/>
                            <Chip variant={"filled"} chipText={"Interaction Design"}/>
                        </>}
                />
            </div>
        </div>


    )
}

export default Projects;