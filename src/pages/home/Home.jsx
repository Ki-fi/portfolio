import './Home.css';
import Button from "../../components/button/Button.jsx";
import {useNavigate} from "react-router-dom";
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import SplitText from "gsap/SplitText"
import {useRef, useState} from "react";
import Cursor from "../../components/cursor/Cursor.jsx";
import Chip from "../../components/chip/Chip.jsx";
import Footer from "../../components/footer/Footer.jsx";

function Home () {

    const navigate = useNavigate();
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const buttonRef = useRef(null);
    const disciplinesRef = useRef(null);
    const [cursorType, setCursorType] = useState("dot");

    gsap.registerPlugin(SplitText);

    useGSAP(()=> {
        document.fonts.ready.then(() => {

            let split1 = SplitText.create(textRef1.current, {type: "chars"});
            let split2 = SplitText.create(textRef2.current, {type: "chars"});

            gsap.timeline()
                .from(split1.chars, {
                    yPercent: "random([-100, 100])",
                    rotation: "random(-40, 40)",
                    autoAlpha: 0,
                    ease: "back.out",
                    stagger: {
                        amount: 1,
                        from: "random"
                    }
                })
                .from(split2.chars, {
                    yPercent: "random([-100, 100])",
                    rotation: "random(-40, 40)",
                    autoAlpha: 0,
                    ease: "back.out",
                    stagger: {
                        amount: 1,
                        from: "random"
                    }
                }, "-=0.5")
                .fromTo(buttonRef.current,
                    { y: 50, autoAlpha: 0 },
                    { y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out", stagger: 0.9
                }, "-=0.1")
                .fromTo(disciplinesRef.current,
                    { y: 50, autoAlpha: 0 },
                    { y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out", stagger: 0.9
                    }, "-=0.1");

        });
    });

    return (
        <>
        <Cursor variant={cursorType}/>
        <div className="homepage">
            <main className="home-container">
            <div className="greeting-container">
                <span ref={textRef1} className="headline greeting">Hallo,</span>
                <span ref={textRef2}
                      className="headline"
                      onMouseEnter={()=> setCursorType("image")}
                      onMouseLeave={()=> setCursorType("dot")}>ik ben Kiki</span>
                <div ref={disciplinesRef} className="disciplines">
                    <Chip variant={"filled"} chipText={"User Research"}/>
                    <Chip variant={"filled"} chipText={"Interaction Design"}/>
                    <Chip variant={"filled"} chipText={"Visual Design"}/>
                    <Chip variant={"filled"} chipText={"Frontend Development"}/>
                    <Chip variant={"filled"} chipText={"Product Strategy"}/>
                </div>
            </div>
            <div ref={buttonRef} className="button-container">
                <Button
                    type="button"
                    variant="primary"
                    onClick={() => {navigate("/projects")}}
                    buttonText="projects"
                    setCursorType={setCursorType}
                />
                <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {navigate("/services")}}
                    buttonText="services"
                    setCursorType={setCursorType}
                />
            </div>
            </main>
            <Footer/>
        </div>
        </>
    )
}

export default Home;