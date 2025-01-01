import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";

const clickHandler = (e) => {
  console.log(e.target.innerText);
};

const Calculator = () => {
  return (
    <Card>
      <Textarea className="resize-none">0</Textarea>
      <div className="grid grid-cols-4 gap-1">
        {[1, 2, 3, "/", 4, 5, 6, "*", 7, 8, 9, "-", "C", 0, "=", "+"].map(
          (key) => (
            <Button key={key} onClick={clickHandler}>
              {key}
            </Button>
          )
        )}
      </div>
    </Card>
  );
};

export default Calculator;
