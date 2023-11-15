import "./TestModal.css";
import { useState } from "react";
import Logo from "../image/lead_120.png";
const TestModal = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  // const [searchingValue, setSearchingValue] = useState("");
  const [showDisplay, setShowDisplay] = useState(false);
  const [options, setOptions] = useState([
    { id: 1, name: "Abc" },
    { id: 2, name: "dEf" },
    { id: 3, name: "geH" },
  ]);
  const handleSearch = (value) => {
    const result = options.filter((opt) => {
      return opt.name && opt.name.toLowerCase().includes(value.toLowerCase());
    });
    console.log(result.length);
    if (result.length === 0) setOptions(options);
    else setOptions(result);
  };
  const handleSelect = (option) => {
    console.log("Selected option is ", option);
    setSelectedValue(option.name);
    setOpen(false);
    setShowDisplay(true);
  };
  return (
    <div className="top-most-outer-modal">
      <div className="outer-fixed-test-modal">
        <div className="inner-scroll-test-modal">
          <p className="Heading">New Asset</p>
          <div className="thickLine"></div>
          <p className="RequiredInfo">
            <span className="star">*</span> = Required Information
          </p>
          <div className="ColorBar">Asset Information</div>
          <section className="flex row-flex ">
            <div className="col-1">
              <p>
                <label>Lable 1</label>
                <input type="search" />
              </p>
              <p>
                <label>Lable 2</label>
                <input type="text" />
              </p>
              <p>
                <label>Lable 3</label>
                <input type="text" />
              </p>
            </div>
            <div className="col-2 flex">
              <p>
                <label>Lable 4</label>
                <input type="text" />
              </p>
              <p>
                <label>Lable 5</label>
                <input type="text" />
              </p>
            </div>
          </section>
          <div className="ColorBar">Address Information</div>
          <section className="flex row-flex">
            <div className="col-1">
              <p>
                <label>Lable 1</label>
                <input type="text" />
              </p>
              <p>
                <label>Lable 2</label>
                <input type="text" />
              </p>
            </div>
            <div className="col-2"></div>
          </section>
          <div className="ColorBar">Description Information</div>
          <section className="flex row-flex">
            <div className="col-1">
              <p>
                <label>Lable 1</label>
                <span
                  className="inputwrapper"
                  data-required="&#x1F50E;&#xFE0E;"
                  onClick={() => setOpen(!open)}
                >
                  <input
                    type="text"
                    placeholder={selectedValue === "" ? "Search Asset..." : ""}
                    // value={selectedValue}
                    onChange={(e) => handleSearch(e.target.value)}
                    // onChange={(e) => setSearchingValue(e.target.value)}
                    className={showDisplay ? "show-text" : ""}
                  />
                  <span className={showDisplay ? "" : "display-none"}>
                    {selectedValue !== "" ? (
                      <span>
                        <img
                          src={Logo}
                          alt="logo"
                          className="logo-in-option set-inside-input-logo"
                        />
                        <span className="set-inside-input-text">
                          {selectedValue}
                        </span>
                      </span>
                    ) : (
                      <span className="set-inside-input-alt-text">
                        Search Assets...
                      </span>
                    )}
                  </span>
                </span>
              </p>
              <p>
                <label>Lable 2</label>
                <input type="text" />
              </p>
            </div>
            <div className="col-2">
              <p>
                <label>Lable 2</label>
                <input type="text" />
              </p>
            </div>
          </section>
          {open && (
            <div className="look-up-options">
              <p className="small-fonts left-top">Recent Products</p>
              <ul>
                {options.map((option) => (
                  <li key={option.id} onClick={() => handleSelect(option)}>
                    <img src={Logo} alt="logo" className="logo-in-option" />
                    {option.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="upper-button-layer">
        <button className="Margin">Cancel</button>
        <button className="Margin">Save & New</button>
        <button className="Save">Save</button>
      </div>
    </div>
  );
};

export default TestModal;
