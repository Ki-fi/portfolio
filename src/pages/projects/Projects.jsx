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
import Cursor from "../../components/cursor/Cursor.jsx";
import {useState} from "react";

function Projects() {
    const [cursorType, setCursorType] = useState("default");

    const projectCards = [
        {
            thumbnail: thumbnailProject3,
            title: "Onboarding process - Redesign",
            url: "https://www.behance.net/gallery/226826743/Case-Study-Reducing-Bottlenecks-in-Onboarding",
            chips: ["User Research", "Interaction Design"],
        },
        {
            thumbnail: thumbnailProject1,
            title: "Pet sitting platform - Development",
            url: "https://www.behance.net/gallery/227208459/PET-NET-A-pet-sitting-social-network",
            chips: ["Product Design", "Software Development"],
        },
        {
            thumbnail: thumbnailProject4,
            title: "Booking flow - Redesign",
            url: "https://www.behance.net/gallery/183804025/Case-Study-Redesigning-the-Booking-Flow",
            chips: ["User Research", "Interaction Design"],
        },
        {
            thumbnail: thumbnailProject2,
            title: "Multi-user timeline - Design",
            url: "https://www.behance.net/gallery/227171627/Case-Study-Designing-a-Multi-User-Timeline",
            chips: ["Interaction Design", "Visual Design"],
        },
    ];

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
        <Cursor variant={cursorType} />
        <div className="projects-page">
            <header className="projects-header">
                <Header/>
            </header>
            <main className="projects-wrapper">
                <h1 className='headline'>Projects</h1>
                <section className='projects-section'>
                    {projectCards.map((project, index) => (
                        <div key={project.title}>
                            <ProjectCard
                                thumbnail={project.thumbnail}
                                projectTitle={project.title}
                                setCursorType={setCursorType}
                                onClick={onClickUrl(project.url)}
                                style={{ animationDelay: `${index * 120}ms` }}
                                chips={
                                    <>
                                        {project.chips.map((chipText) => (
                                            <Chip key={`${project.title}-${chipText}`} variant={"filled"} chipText={chipText}/>
                                        ))}
                                    </>
                                }
                            />
                        </div>
                    ))}
                </section>       
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
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
        </>
    )
}

export default Projects;