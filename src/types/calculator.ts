export interface CalculatorState {
  total: string | null;
  next: string | null;
  operation: string | null;
}

export interface ButtonProps {
  name: string;
  clickHandler: (buttonName: string) => void;
  orange?: boolean;
  wide?: boolean;
}

export interface CalculatorProps {
  className?: string;
}
