import { useState } from "react";
import Color from "./Color";
import Input from "./Input";

function App() {
  const [color, setColor] = useState("");
  const [darkText, setDarkText] = useState("");
  return (
    <div className="App">
      <Color color={color} darkText={darkText} />
      <Input
        setColor={setColor}
        color={color}
        darkText={darkText}
        setDarkText={setDarkText}
      />
    </div>
  );
}

export default App;
