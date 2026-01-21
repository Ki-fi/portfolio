import './Togglebutton.css';
import React from "react";

function ToggleButton({ buttonNameLeft, buttonNameRight, buttonNameMiddle, selected, handleToggle }) {

    return (
        <div className="button-wrapper">
            <button
                className={`toggle-button left sectiontitle ${selected === 'left' ? 'active' : ''}`}
                onClick={() => handleToggle("left")}>{buttonNameLeft}
            </button>
            <button
                className={`toggle-button middle sectiontitle ${selected === 'middle' ? 'active' : ''}`}
                onClick={() => handleToggle("middle")}>{buttonNameMiddle}
            </button>
            <button
                className={`toggle-button right sectiontitle ${selected === 'right' ? 'active' : ''}`}
                onClick={() => handleToggle("right")}>{buttonNameRight}
            </button>
        </div>
    )
}

export default ToggleButton;