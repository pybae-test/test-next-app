import React, { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtonPanel from "./CalculatorButtonPanel";
import calculate from "../utils/calculate";
import type { CalculatorState, CalculatorProps } from "../types/calculator";

export default function Calculator({ className }: CalculatorProps) {
  const [state, setState] = useState<CalculatorState>({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName: string) => {
    const result = calculate(state, buttonName);
    setState(prevState => ({ ...prevState, ...result }));
  };

  const displayValue = state.next || state.total || "0";

  return (
    <div className={`max-w-sm mx-auto bg-gray-900 p-6 rounded-2xl shadow-2xl ${className || ""}`}>
      <CalculatorDisplay value={displayValue} />
      <CalculatorButtonPanel clickHandler={handleClick} />
    </div>
  );
}
