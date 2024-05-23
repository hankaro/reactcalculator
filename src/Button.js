import React from 'react';
const pressSound = new Audio('https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-77317/zapsplat_office_calculator_button_single_press_006_81856.mp3');
pressSound.volume = 0.3;

function Button(props) {
    const handleClick = () => {
        // Soita ääni
        pressSound.play();
        // Kutsu props.onClick, jos se on määritelty
        if (props.onClick) {
            props.onClick();
        }
    };
    return (
        <button className={`btn ${props.className}`} type="button" onClick={handleClick}>
        <span class="btn-shadow"></span>
        <span class="btn-edge"></span>
        <span class="btn-front">
            {props.text}
        </span>
      </button>
    );
}

export default Button