import Overview from "../../components/overview/Overview.jsx";
import './Petnet.css';
import ToggleButton from "../../components/togglebutton/Togglebutton.jsx";
import React from "react";
import SectionTitle from "../../components/section-title/SectionTitle.jsx";
import petnetBanner from "../../assets/petnet/Petnet_Banner.jpg";
import one from "../../assets/petnet/1.jpg";
import two from "../../assets/petnet/2.jpg";
import three from "../../assets/petnet/3.jpg";
import four from "../../assets/petnet/4.jpg";

function Petnet() {

    const [selected, setSelected] = React.useState('left');

    return (
        <div className="project-page">
            <img className="project-image" src={petnetBanner} alt="project-banner"/>
            <Overview
                title={"Focus"}
                description={"Pet Net is a social platform that connects pet owners to local pet sitters, making pet sitting convenient, fast, and accessible. This is a software development student project."}
                tag1Title={"frontend"}
                tag1Body={"Javascript - React"}
                tag2Title={"Backend & REST API"}
                tag2Body={"Java - Spring Boot"}
                tag3Title={"database"}
                tag3Body={"PostgreSQL"}
            />
            <section>
                <ToggleButton
                    buttonNameLeft="Concept"
                    buttonNameMiddle="Functional Design"
                    buttonNameRight="Technical Design"
                    selected={selected}
                    handleToggle={setSelected}
                />
                <SectionTitle text={"Core features"}/>
                <div className="core-features">
                    <span className="subheading">how to find a cat sitter on pet net</span>
                    <div className="core-feature">
                        <img className="numbering" src={one} alt="1"/>
                        <div>
                            <p className="sectiontitle">Create an account on Pet Net</p>
                            <p>“As user I want to sign-up, so that I can create my own account”</p>
                        </div>
                    </div>
                    <div className="core-feature">
                        <img className="numbering" src={two} alt="2"/>
                        <div>
                            <p className="sectiontitle">Create Create a post and specify your requested services</p>
                            <p>“As pet owner I want to create a new post, so that I can attract a pet sitter”</p>
                        </div>
                    </div>
                    <div className="core-feature">
                        <img className="numbering" src={three} alt="3"/>
                        <div>
                            <p className="sectiontitle">Look for unique cat sitting opportunities</p>
                            <p>“As pet sitter I want to browse through all posts, so that I can see all pet sitting opportunities”</p>
                        </div>
                    </div>
                    <div className="core-feature">
                        <img className="numbering" src={four} alt="4"/>
                        <div>
                            <p className="sectiontitle">Get responses from local cat sitters</p>
                            <p>“As pet sitter I want to respond to a post, so that I can be considered for pet sitting”</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Petnet;