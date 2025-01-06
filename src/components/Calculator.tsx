import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";

const Calculator = () => {
  // setup state
  const [display, setDisplay] = useState<string>("0");
  const [currentValue, setCurrentValue] = useState<string>("");
  const [previousValue, setPreviousValue] = useState<string>("");
  const [operation, setOperation] = useState<string | null>(null);

  // click handlers
  const handleNumberClick = (num: string) => {
    if (display === "0" || operation) {
      setDisplay(num);
      setCurrentValue(num);
    } else {
      setDisplay(display + num);
      setCurrentValue(currentValue + num);
    }
  };

  const handleOperationClick = (operation: string) => {
    console.log("Operation clicked:", operation);
    switch (operation) {
      case "C":
        setDisplay("0");
        setPreviousValue("");
        setCurrentValue("");
        setOperation(null);
        break;
      case "CE":
        setDisplay("0");
        setCurrentValue("");
        break;
      case "=":
        calculateResult();
        setPreviousValue("");
        setOperation(null);
        break;
      default:
        if (previousValue && currentValue) {
          calculateResult();
        }
        setPreviousValue(currentValue === "" ? "0" : currentValue);
        setCurrentValue("");
        setOperation(operation);
        break;
    }
  };

  const calculateResult = () => {
    let result = 0;
    switch (operation) {
      case "+":
        result = parseFloat(previousValue) + parseFloat(currentValue);
        break;
      case "-":
        result = parseFloat(previousValue) - parseFloat(currentValue);
        break;
      case "*":
        result = parseFloat(previousValue) * parseFloat(currentValue);
        break;
      case "/":
        result = parseFloat(previousValue) / parseFloat(currentValue);
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setCurrentValue(result.toString());
    setPreviousValue("");
    setOperation(null);
  };

  return (
    <Card>
      <Textarea className="resize-none" readOnly={true} value={display} />
      <div className="grid grid-cols-4 gap-1">
        {[
          "C",
          "CE",
          "/",
          "1",
          "2",
          "3",
          "*",
          "4",
          "5",
          "6",
          "-",
          "7",
          "8",
          "9",
          "+",
          "0",
          ".",
          "=",
        ].map((key) => (
          <Button
            key={key}
            onClick={() =>
              isNaN(parseInt(key as string))
                ? handleOperationClick(key as string)
                : handleNumberClick(key as string)
            }
            className={["C", "0"].includes(key) ? "col-span-2" : ""}
          >
            {key}
          </Button>
        ))}
      </div>
      <div>Previous Value: {previousValue}</div>
      <div>Current Value: {currentValue}</div>
      <div>Operation: {operation}</div>
    </Card>
  );
};

export default Calculator;
