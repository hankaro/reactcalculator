import React from 'react';
const pressSound = new Audio('https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-77317/zapsplat_office_calculator_button_single_press_006_81856.mp3');
pressSound.volume = 0.3;

const Button = ({ className, value, onClick }) => {
    const handleClick = () => {
        pressSound.play();
        if (onClick) onClick(); 
    };
    return (
        <button className={`btn ${className}`} type="button" onClick={handleClick}>
            <span className="btn-shadow"></span>
            <span className="btn-edge"></span>
            <span className="btn-front">
                {value}
            </span>
        </button>
    );
}

export default Button;
