import './Projects.css';
import Card from "../../components/card/Card.jsx";
import thumbnailProject1 from "../../assets/project-1/Mockup_Post.jpg";
import Chip from "../../components/chip/Chip.jsx";

function Projects() {

    return (
        <div className="project-page">
            <div className="project-1">
                <Card
                    thumbnail={thumbnailProject1}
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