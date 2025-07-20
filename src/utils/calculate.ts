import { CalculatorState } from "../types/calculator";

function isNumber(item: string): boolean {
  return /[0-9]+/.test(item);
}

function operate(firstOperand: string, secondOperand: string, operation: string): string {
  const prev = parseFloat(firstOperand);
  const next = parseFloat(secondOperand);
  
  switch (operation) {
    case "+":
      return (prev + next).toString();
    case "-":
      return (prev - next).toString();
    case "x":
      return (prev * next).toString();
    case "÷":
      return next !== 0 ? (prev / next).toString() : "Error";
    default:
      return next.toString();
  }
}

export default function calculate(obj: CalculatorState, buttonName: string): Partial<CalculatorState> {
  if (buttonName === "π") {
    const piStr = Math.PI.toString();
    if (obj.operation) {
      return {
        ...obj,
        next: (obj.next ? obj.next : "") + piStr
      };
    } else {
      return {
        next: (obj.next ? obj.next : "") + piStr,
        total: null,
        operation: obj.operation || null,
      };
    }
  }

  if (["sin", "cos", "tan", "√"].includes(buttonName)) {
    let value: number | null = null;
    if (obj.next !== null && obj.next !== undefined) {
      value = parseFloat(obj.next);
    } else if (obj.total !== null && obj.total !== undefined) {
      value = parseFloat(obj.total);
    }
    if (value === null || isNaN(value)) {
      return {};
    }
    let result: number | string = "";
    if (buttonName === "sin" || buttonName === "cos" || buttonName === "tan") {
      const radians = value * (Math.PI / 180);
      if (buttonName === "sin") {
        result = Math.sin(radians);
      } else if (buttonName === "cos") {
        result = Math.cos(radians);
      } else if (buttonName === "tan") {
        result = Math.tan(radians);
      }
      result = Math.round(((result as number) + Number.EPSILON) * 1000000000) / 1000000000;
    } else if (buttonName === "√") {
      if (value < 0) {
        result = "Error";
      } else {
        result = Math.sqrt(value);
        result = Math.round(((result as number) + Number.EPSILON) * 1000000000) / 1000000000;
      }
    }
    return {
      total: result.toString(),
      next: null,
      operation: null,
    };
  }

  if (buttonName === "AC") {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.next === "0") {
      return {};
    }
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName };
      }
      return { next: buttonName };
    }
    if (obj.next) {
      const next = obj.next === "0" ? buttonName : obj.next + buttonName;
      return {
        next,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === "%") {
    if (obj.operation && obj.next) {
      const result = operate(obj.total || "0", obj.next, obj.operation);
      return {
        total: (parseFloat(result) / 100).toString(),
        next: null,
        operation: null,
      };
    }
    if (obj.next) {
      return {
        next: (parseFloat(obj.next) / 100).toString(),
      };
    }
    return {};
  }

  if (buttonName === ".") {
    if (obj.next) {
      if (obj.next.includes(".")) {
        return {};
      }
      return { next: obj.next + "." };
    }
    return { next: "0." };
  }

  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total || "0", obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      return {};
    }
  }

  if (buttonName === "+/-") {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  if (obj.operation) {
    return {
      total: operate(obj.total || "0", obj.next || "0", obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (!obj.next) {
    return { operation: buttonName };
  }

  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
