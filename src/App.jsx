import React, { useState } from "react";
import ChildComponent from "./components/ChildComponent";

const App = () => {
  const [name, setName] = useState("Sumon");
  const [isToggle, setToggle] = useState(true);
  const changeparentdata = () => {
    if (isToggle) {
      setName("Sumon changed");
      setToggle(!isToggle);
    } else {
      setName("Sumon");
      setToggle(!isToggle);
    }
  };
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">My Portfolio</h1>

      <ChildComponent name={name} changeparentdata={changeparentdata} />
    </div>
  );
};

export default App;