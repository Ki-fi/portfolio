import './Cursor.css';
import {useEffect, useRef} from "react";
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";

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
            {variant === "image" && <img className="cursor-image" src="/src/assets/portrait.png" alt="cursor" />}
        </div>
    )

}

export default Cursor;