import "./App.css";
import { useState } from "react";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";

function App() {
    const [selectedComponent, setSelectedComponent] = useState("Accordian");

    const componentMap = {
        Accordian: <Accordian />,
        RandomColor: <RandomColor />,
    };
    function handleComponentDropdown(event) {
        setSelectedComponent(event.target.value);
    }

    return (
        <div className="App">
            {/* Component dropdown switcher */}
            <select onChange={handleComponentDropdown} name="componentNames">
                <option value={"Accordian"}>Accordian</option>
                <option value={"RandomColor"}>Random-color</option>
            </select>
            {/* Selected Component */}
            {componentMap[selectedComponent]}
        </div>
    );
}

export default App;
