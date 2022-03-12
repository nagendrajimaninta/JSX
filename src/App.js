import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const name1 = "Kalavathi";
  const [ctc, setCtc] = useState(5);
  const [name, setName] = useState("Nagendra");
  const [age, setAge] = useState(0);
  const handleClick = () => {
    setName("Maruthi");
    setAge(age + 1);
    setCtc(ctc + 1);
  };
  return (
    <div className="App">
      <h2>
        {name} and his age is {age} and package is {ctc}
      </h2>
      <p>package is :{ctc}</p>
      <h3>
        {name1} age is {age}
      </h3>
      <h1>Update the to : {age}</h1>
      <h2>
        {name} age is : {age}
      </h2>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handleClick}>Events</button>
    </div>
  );
}
