import "./App.css";
import { useState, useEffect } from "react";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  //const [selectedComponent, setSelectedComponent] = useState(() => {
  //  const savedComponent = localStorage.getItem("selectedComponent");
  //  return savedComponent &&
  //    ["Accordian", "RandomColor"].includes(savedComponent)
  //    ? savedComponent
  //    : "Accordian";
  //});
  const [selectedComponent, setSelectedComponent] = useState(
    localStorage.getItem("selectedComponent") || "Accordian",
  );

  const componentMap = {
    Accordian: <Accordian />,
    RandomColor: <RandomColor />,
    StarRating: <StarRating numOfStars={10} />,
  };
  function handleComponentDropdown(event) {
    const newSelection = event.target.value;
    setSelectedComponent(event.target.value);
    localStorage.setItem("selectedComponent", newSelection);
  }

  return (
    <div className="App">
      {/* Component dropdown switcher */}
      <select
        onChange={handleComponentDropdown}
        value={selectedComponent}
        name="componentNames"
      >
        <option value="Accordian">Accordian</option>
        <option value="RandomColor">Random-color</option>
        <option value={"StarRating"}>StarRating</option>
      </select>
      {/* Selected Component */}
      {componentMap[selectedComponent]}
    </div>
    //<div>
    //  <StarRating numOfStars={10} />
    //</div>
  );
}

export default App;
