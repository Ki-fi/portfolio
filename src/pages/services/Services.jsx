// 1. card component maken/updaten. 2. array met card content maken. 3. page layout maken (nav + carousel) 3. Loop inrichten

import './Services.css';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Button from "../../components/button/Button.jsx";
import portrait from "/src/assets/portrait.png";

function Services() {

    return (
        <>
            <header>
                <Header/>
            </header>
            <div className="services-wrapper">
                <section className="services-section">
                    <span className='headline'>Services</span>
                    <p>Als Freelance Strategisch Product Designer ontwerp ik functionele en karaktervolle applicaties en websites.</p>
                    <p>Ik help je team of organisatie om complexe ideeën tot heldere en mensgerichte producten te maken. Met het oog op je bedrijfsdoelen en op de toekomst.</p>
                </section>
                <section className='contact-section'>
                    <img className="contact-image" src={portrait} alt="portrait" />
                    <span className='subheading'>Samenwerken?</span>
                    <p>Ik ben benieuwd naar je idee of uitdaging en ik denk graag even met je mee.</p>
                    <div className='button-container'>
                        <Button
                            type="button"
                            variant="primary"
                            onClick={() => {window.location.href = "mailto:mail@kikimeekels.nl"}}
                            buttonText="Plan een kennismaking"
                        />
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    )

}

export default Services;