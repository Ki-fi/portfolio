// 1. card component maken/updaten. 2. array met card content maken. 3. page layout maken (nav + carousel) 3. Loop inrichten

import './Services.css';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Services() {

    return (
        <div className="services-wrapper">
            <Header/>
            <section className="services-section">
                <span className='headline'>Services</span>
                <p>Als Freelance Strategisch Product Designer ontwerp ik functionele en karaktervolle applicaties en websites.</p>
                <p>Ik help je team of organisatie om complexe ideeën tot heldere en mensgerichte producten te maken. Met het oog op je bedrijfsdoelen en op de toekomst.</p>
            </section>
            <Footer/>
        </div>
    )

}

export default Services;