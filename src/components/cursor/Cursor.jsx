import './Cursor.css';
import {useEffect, useRef} from "react";
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import portrait from "/src/assets/portrait.png";

function Cursor({ variant }) {

    gsap.registerPlugin(useGSAP);

    const cursorRef = useRef(null);
    useEffect(() => {

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            gsap.to(cursorRef.current, {
                x: clientX +16,
                y: clientY -24,
                duration: 1,
                ease: "power4.out"
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);


    return (
        <div
            ref={cursorRef}
            className={"cursor"}
        >
            {variant === "dot" && <div className="cursor-dot" />}
            {variant === "image" && <img className="cursor-image" src={portrait} alt="cursor" />}
            {variant === "project" && <div className="cursor-project material-symbols-outlined" aria-label="Open project">open_in_new</div>}
            {variant === "default" && null}
        </div>
    )

}

export default Cursor;