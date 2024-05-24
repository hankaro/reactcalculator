import Screen from './Screen'
import ButtonBox from './ButtonBox';
import Button from './Button';
import React, { useState } from "react";
import { evaluate } from 'mathjs';


const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];


function Calculator() {
    const [input, setInput] = useState("0");
    const [result, setResult] = useState("0");

    if (input.length > 12) {
        setInput("Sry too long");
    }

    const handleClick = (btn) => {
        if (btn === "=") {
            console.log("Equals button clicked");
             try {
                const evaluatedResult = evaluate(input);
                setResult(evaluatedResult.toString());
              } catch (error) {
                setResult('Error');
              }
          } else if (typeof btn === "string" && btn === "C") {
            console.log("Clear input button clicked");
            setInput('0');
            setResult(0);
          } else if (typeof btn === "string" && btn !== ".") {
            console.log("Action button clicked:", btn);
            setInput(input + btn);
          }
            else if (typeof btn === "number" || btn === "." ) {
            console.log("Number button clicked:", btn);
            if (input === "0" && btn === ".") {
                setInput("0.");
            }
            else if (input === "0") {
                setInput(btn.toString());
            }
            else {
                setInput(input + btn);
            }
          } else {
            console.log("Unknown button type clicked");
          }
    };
    
     

    return (
        <div className="calculator">
            <Screen input={input} result={result} />
            <ButtonBox>
                {
                btnValues.flat().map((btn, i) => {
                    return (
                    <Button
                        key={i}
                        className={btn === "=" ? "btn-action equals" : (typeof btn === "string" ? "btn-action" : typeof btn === "number" ? "btn-number" : "")}
                        value={btn}
                        onClick={() => handleClick(btn)}>
                    </Button>
                    );
                })
                }
            </ButtonBox>
        </div>
    );
}

export default Calculator;