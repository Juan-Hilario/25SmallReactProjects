import { useState } from "react";
import data from "./data.js";
import "./styles.css";

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        // If the Id from the click event is already selected, the state becomes null/the item gets unselected
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    function handleMultiSelction(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);
        setMultiple(cpyMultiple);
    }

    return (
        <div className="wrapper">
            <button
                onClick={() => setEnableMultiSelection(!enableMultiSelection)}
                className={`${enableMultiSelection ? "active" : ""}`}
            >
                Enable Multi Selection
            </button>
            <div className="accordian">
                {data && data.length > 0 ? (
                    // Maps each item of data.js to a div of the following code
                    data.map((dataItem) => (
                        <div
                            onClick={
                                enableMultiSelection
                                    ? () => handleMultiSelction(dataItem.id)
                                    : () => handleSingleSelection(dataItem.id)
                            }
                            className="item"
                        >
                            <div className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {/* When the selected item matches the id, the answer from the data is rendered. If not nothing will be rendered */}
                            {enableMultiSelection
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                      <div className="content">
                                          {dataItem.answer}
                                      </div>
                                  )
                                : selected === dataItem.id && (
                                      <div className="content">
                                          {dataItem.answer}
                                      </div>
                                  )}
                        </div>
                    ))
                ) : (
                    <div> No data found !</div>
                )}
            </div>
        </div>
    );
}
