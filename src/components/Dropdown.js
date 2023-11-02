import { useState } from "react";
import "./Dropdown.css";
import Play from "../image/Down-Carrot-512.webp";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const options = ["New Note", "Delete", "Check for New Data"];
  return (
    <>
      <div className="dropdown">
        <button className="btn-dropdown-img" onClick={() => setOpen(!open)}>
          <span>Select An Option</span>
          <img src={Play} alt="play" className="play-img" />
        </button>
      </div>
      <div className="option-dpdn">
        {open && (
          <div className="items">
            <ul>
              {options.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
