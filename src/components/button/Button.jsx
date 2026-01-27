import './Button.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {useRef} from "react";

function Button({ type, variant, onClick, children, form, setCursorType}) {

    const buttonRef = useRef(null);

    useGSAP();

    const handleMouseDown = () => {
        gsap.to(buttonRef.current, {
            y: 6,
            boxShadow: "0px 0px 0px var(--Text-dark)",
            duration: 0.1,
            ease: "power1.inOut",
        });
    };

    const handleMouseUp = () => {
        gsap.to(buttonRef.current, {
            y: 0,
            boxShadow: "0 6px 0 0 var(--Text-dark)",
            duration: 0.1,
            ease: "power1.inOut",
        });
    };

    return (
        <button
            ref={buttonRef}
            type={type}
            className={`${variant} btn`}
            onClick={onClick}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchEnd={handleMouseUp}
            onMouseEnter={() => setCursorType("hidden")}
            onMouseLeave={() => {
                handleMouseUp();
                setCursorType("dot")}}
            form={form}
        >
            {children}
        </button>
    );
}

export default Button;