import React from "react";
import type { ButtonProps } from "../types/calculator";

export default function CalculatorButton({ name, clickHandler, orange, wide }: ButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    clickHandler(name);
  };

  const numberNames = ["0","1","2","3","4","5","6","7","8","9"];
  const operatorNames = ["+", "-", "x", "÷", "=", "sin", "cos", "tan", "√"];
  const specialNames = ["AC", "+/-", "%", "."];
  
  let typeClass = "";
  if (numberNames.includes(name)) {
    typeClass = "number";
  } else if (operatorNames.includes(name)) {
    typeClass = "operator";
  } else if (specialNames.includes(name)) {
    typeClass = "special";
  }

  const ariaLabelMap: { [key: string]: string } = {
    '+/-': 'toggle sign',
    '÷': 'divide',
    'x': 'multiply',
    '+': 'add',
    '-': 'subtract',
    '=': 'equals',
    '.': 'decimal point',
    '%': 'percent',
    '√': 'square root',
    'sin': 'sine',
    'cos': 'cosine',
    'tan': 'tangent',
    'AC': 'all clear',
  };

  const ariaLabel = ariaLabelMap[name] || name;

  const baseClasses = "h-16 text-white font-semibold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2";
  const widthClasses = wide ? "col-span-2" : "";
  const colorClasses = orange 
    ? "bg-orange-500 hover:bg-orange-600" 
    : typeClass === "operator" 
      ? "bg-orange-500 hover:bg-orange-600"
      : typeClass === "special"
        ? "bg-gray-600 hover:bg-gray-700"
        : "bg-gray-800 hover:bg-gray-900";

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      className={`${baseClasses} ${widthClasses} ${colorClasses} rounded-lg`}
    >
      {name}
    </button>
  );
}
