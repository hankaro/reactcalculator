import Screen from './Screen'
import ButtonBox from './ButtonBox';
import Button from './Button';
import React, { useState, useRef } from "react";


const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];


function Calculator() {
    const [display, setDisplay] = useState("0");

    const handleButtonClick = (num) => {
        if (num === "0" && display === "0") {
            return;
        } else if (display === "0") {
            setDisplay(num.toString());
        } else {
            setDisplay(display.toString() + num.toString());
        }
    };

    if (display.length > 12) {
        setDisplay("Sry too long");
    }

    let userInput = Number(display);
    const [result, setResult] = useState(0)

    function plus(e) { 
        e.preventDefault();
        setResult((result) => result + userInput);
        setDisplay(result)
      }; 
     

    return (
        <div className="calculator">
            <Screen value={display} />
            <ButtonBox>
                {
                btnValues.flat().map((btn, i) => {
                    return (
                    <Button
                        key={i}
                        className={btn === "=" ? "btn-action equals" : (typeof btn === "string" ? "btn-action" : typeof btn === "number" ? "btn-number" : "")}
                        value={btn}
                        onClick={() => handleButtonClick(btn)}>
                    </Button>
                    );
                })
                }
            </ButtonBox>
        </div>
    );
}

export default Calculator;