import './Projects.css';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Button from "../../components/button/Button.jsx";
import portrait from "/src/assets/portrait.png";
import ProjectCard from "../../components/project-card/ProjectCard.jsx";
import thumbnailProject1 from "../../assets/petnet/Mockup_Post.jpg";
import thumbnailProject2 from "../../assets/EP/Mockup_Overview.jpg";
import thumbnailProject3 from "../../assets/PIDZ/Mockup_login.jpg";
import thumbnailProject4 from "../../assets/Qrabbl/Mockup_Datepicker.jpg";
import Chip from "../../components/chip/Chip.jsx";
import SEO from "../../components/SEO.jsx";
import {useNavigate} from "react-router-dom";

function Projects() {
    const navigate = useNavigate();

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    const onClickUrl = (url) => () => openInNewTab(url);

    return (
        <>
        <SEO
            title="Kiki Meekels – Projects"
            description="Mijn portfolio met projecten in User Research, Interaction Design, Visual Design en Development"
        />
        <div className="projects-page">
            <header className="projects-header">
                <Header/>
            </header>
            <main className="projects-wrapper">
                
            <div className="project-3">
                <ProjectCard
                    thumbnail={thumbnailProject3}
                    projectTitle={"Onboarding process - Redesign"}
                    onClick={onClickUrl("https://www.behance.net/gallery/226826743/Case-Study-Reducing-Bottlenecks-in-Onboarding")}
                    chips={
                        <>
                            <Chip variant={"filled"} chipText={"User Research"}/>
                            <Chip variant={"filled"} chipText={"Interaction Design"}/>
                        </>}
                />
            </div>
            <div className="project-1">
                <ProjectCard
                    thumbnail={thumbnailProject1}
                    projectTitle={"Pet sitting platform - Development"}
                    onClick={onClickUrl("https://www.behance.net/gallery/227208459/PET-NET-A-pet-sitting-social-network")}
                    chips={
                        <>
                        <Chip variant={"filled"} chipText={"Product Design"}/>
                        <Chip variant={"filled"} chipText={"Software Development"}/>
                        </>}
                />
            </div>
            <div className="project-4">
                <ProjectCard
                    thumbnail={thumbnailProject4}
                    projectTitle={"Booking flow - Redesign"}
                    onClick={onClickUrl("https://www.behance.net/gallery/183804025/Case-Study-Redesigning-the-Booking-Flow")}
                    chips={
                        <>
                        <Chip variant={"filled"} chipText={"User Research"}/>
                        <Chip variant={"filled"} chipText={"Interaction Design"}/>
                        </>}
                />
            </div>  
            <div className="project-2">
                <ProjectCard
                    thumbnail={thumbnailProject2}
                    projectTitle={"Multi-user timeline - Design"}
                    onClick={onClickUrl("https://www.behance.net/gallery/227171627/Case-Study-Designing-a-Multi-User-Timeline")}
                    chips={
                        <>
                            <Chip variant={"filled"} chipText={"Interaction Design"}/>
                            <Chip variant={"filled"} chipText={"Visual Design"}/>
                        </>}
                />
            </div>          
            </main>
            <section className='contact-section'>
                    <img className="contact-image" src={portrait} alt="avatar" />
                    <span className='subheading'>Samenwerken?</span>
                    <p>Ik ben benieuwd naar je idee of uitdaging en ik denk graag even met je mee.</p>
                    <div className='button-container'>
                        <Button
                            type="button"
                            variant="primary"
                            onClick={() => {window.location.href = "mailto:k.meekels@gmail.com"}}>
                            Plan een kennismaking
                        </Button>
                    </div>
                </section>
            <footer>
                <Footer/>
            </footer>
        </div>
        </>

    )
}

export default Projects;