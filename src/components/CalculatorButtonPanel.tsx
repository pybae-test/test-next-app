import React from "react";
import CalculatorButton from "./CalculatorButton";

interface CalculatorButtonPanelProps {
  clickHandler: (buttonName: string) => void;
}

export default function CalculatorButtonPanel({ clickHandler }: CalculatorButtonPanelProps) {
  return (
    <div className="grid grid-cols-4 gap-3">
      <CalculatorButton name="sin" clickHandler={clickHandler} />
      <CalculatorButton name="cos" clickHandler={clickHandler} />
      <CalculatorButton name="tan" clickHandler={clickHandler} />
      <CalculatorButton name="√" clickHandler={clickHandler} />
      
      <CalculatorButton name="AC" clickHandler={clickHandler} />
      <CalculatorButton name="+/-" clickHandler={clickHandler} />
      <CalculatorButton name="%" clickHandler={clickHandler} />
      <CalculatorButton name="÷" clickHandler={clickHandler} orange />
      
      <CalculatorButton name="7" clickHandler={clickHandler} />
      <CalculatorButton name="8" clickHandler={clickHandler} />
      <CalculatorButton name="9" clickHandler={clickHandler} />
      <CalculatorButton name="x" clickHandler={clickHandler} orange />
      
      <CalculatorButton name="4" clickHandler={clickHandler} />
      <CalculatorButton name="5" clickHandler={clickHandler} />
      <CalculatorButton name="6" clickHandler={clickHandler} />
      <CalculatorButton name="-" clickHandler={clickHandler} orange />
      
      <CalculatorButton name="1" clickHandler={clickHandler} />
      <CalculatorButton name="2" clickHandler={clickHandler} />
      <CalculatorButton name="3" clickHandler={clickHandler} />
      <CalculatorButton name="+" clickHandler={clickHandler} orange />
      
      <CalculatorButton name="0" clickHandler={clickHandler} wide />
      <CalculatorButton name="." clickHandler={clickHandler} />
      <CalculatorButton name="=" clickHandler={clickHandler} orange />
    </div>
  );
}
