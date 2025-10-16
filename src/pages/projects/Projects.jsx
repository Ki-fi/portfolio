import './Projects.css';
import Card from "../../components/card/Card.jsx";
import thumbnailProject1 from "../../assets/petnet/Mockup_Post.jpg";
import Chip from "../../components/chip/Chip.jsx";
import {useNavigate} from "react-router-dom";

function Projects() {
    const navigate = useNavigate();

    return (
        <div className="projects-page">
            <div className="project-1">
                <Card
                    thumbnail={thumbnailProject1}
                    onClick={() => {navigate("/petnet")}}
                    chips={
                        <>
                        <Chip chipText={"Ik ben een chip"}/>
                        <Chip chipText={"Ik ben een chip"}/>
                        </>}
                />
            </div>
            <div className="project-2">
                <Card
                    thumbnail={thumbnailProject1}
                    onClick={() => {navigate("/petnet")}}
                    chips={
                        <>
                            <Chip chipText={"Ik ben een chip"}/>
                            <Chip chipText={"Ik ben een chip"}/>
                        </>}
                />
            </div>
            <div className="project-3">
                <Card
                    thumbnail={thumbnailProject1}
                    onClick={() => {navigate("/petnet")}}
                    chips={
                        <>
                            <Chip chipText={"Ik ben een chip"}/>
                            <Chip chipText={"Ik ben een chip"}/>
                        </>}
                />
            </div>
        </div>


    )
}

export default Projects;