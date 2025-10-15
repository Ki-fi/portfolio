import Overview from "../../components/overview/Overview.jsx";
import './Petnet.css';
import ToggleButton from "../../components/togglebutton/Togglebutton.jsx";
import React from "react";

function Petnet() {

    const [selected, setSelected] = React.useState('left');

    return (
        <div className="project-page">
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
            </section>
        </div>
    )
}

export default Petnet;