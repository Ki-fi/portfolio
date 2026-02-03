import './Services.css';
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Button from "../../components/button/Button.jsx";
import portrait from "/src/assets/portrait.png";
import {useState} from "react";
import {inventory} from "../../constants/inventory.js";
import ServiceCard from "../../components/service-card/ServiceCard.jsx";
import Chip from "../../components/chip/Chip.jsx";
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import SEO from "../../components/SEO.jsx";

function Services() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const currentService = inventory[currentIndex];
    const cardRef = useRef(null);
    const startX = useRef(null);
    const currentX = useRef(0);
    const isDragging = useRef(false);

    const handleNextClick = () => {
        setDirection(1);
        setCurrentIndex((currentIndex + 1) % inventory.length);
    };

    const handlePrevClick = () => {
        setDirection(-1);
        setCurrentIndex((currentIndex - 1 + inventory.length) % inventory.length);
    };

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
        isDragging.current = true;
    };

    const handleTouchMove = (e) => {
        if (!isDragging.current) return;

        currentX.current = e.touches[0].clientX;
        const deltaX = currentX.current - startX.current;

        gsap.set(cardRef.current, {
            x: deltaX,
            rotate: deltaX * 0.01,
        });
    };

    const handleTouchEnd = () => {
        isDragging.current = false;
        const deltaX = currentX.current - startX.current;

        const threshold = 80;

        if (deltaX > threshold) {
            handlePrevClick();
        } else if (deltaX < -threshold) {
            handleNextClick();
        } else {
            gsap.to(cardRef.current, {
                x: 0,
                rotate: 0,
                duration: 0.4,
                ease: "power3.out",
            });
        }
    };

    const chips = currentService.deliverables.map((deliverable) => (
        <Chip
            key={deliverable}
            variant="outlined"
            chipText={deliverable}
        />));

    useLayoutEffect(() => {
        if (!cardRef.current) return;

        gsap.fromTo(
            cardRef.current,
            { x: 100 * direction, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
        );
    }, [currentIndex, direction]);


    return (
        <>
            <SEO
                title="Kiki Meekels – Services"
                description="Ik help je team of organisatie om complexe ideeën tot heldere en mensgerichte producten te maken."
            />
            <div className="services-page">
            <header>
                <Header/>
            </header>
            <main className="services-wrapper">
                <section className="services-intro">
                    <span className='headline'>Services</span>
                    <p>Als Freelance Strategisch Product Designer ontwerp ik functionele en karaktervolle applicaties en websites.</p>
                    <p>Ik help je team of organisatie om complexe ideeën tot heldere en mensgerichte producten te maken. Met het oog op je bedrijfsdoelen en op de toekomst.</p>
                </section>
                <section
                    className="services-section"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <ServiceCard
                        ref={cardRef}
                        key={currentService.title}
                        cardTitle={currentService.title}
                        cardBody={currentService.body}
                        chips={chips}
                    />
                    <div className="carousel-nav">
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => {handlePrevClick()}}
                            aria-label="Vorige service">
                            <span className="material-symbols-outlined">arrow_back_ios</span>
                        </Button>
                        <div className="dots">
                            {inventory.map((_, index) => (
                                <div
                                    key={index}
                                    className={
                                        index === currentIndex ? "selected-dot" : "default-dot"
                                    }
                                />
                            ))}
                        </div>

                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => {handleNextClick()}}
                            aria-label="Volgende service">
                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                        </Button>
                    </div>
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
                <footer>
                    <Footer/>
                </footer>
            </main>
            </div>
    )

}

export default Services;