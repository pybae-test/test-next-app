import React from "react";

interface CalculatorDisplayProps {
  value: string;
}

export default function CalculatorDisplay({ value }: CalculatorDisplayProps) {
  return (
    <div className="bg-black text-white p-6 rounded-lg mb-4">
      <div className="text-right text-3xl font-mono min-h-[3rem] flex items-center justify-end">
        {value || "0"}
      </div>
    </div>
  );
}
