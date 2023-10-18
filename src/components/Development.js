import EditPen from "../image/edit-pen.png";

const Development = () => {
  return (
    <section className="Development">
      <div className="Inside">
        <p className="Head">New Lead</p>
        <div className="thickLine"></div>
        <p className="ReqInfo">
          <span className="star">*</span> = Required Information
        </p>
        <div className="ColorBar">Lead Information</div>
        <div className="row">
          <div className="column">
            <p className="font1 descMargin">First Name </p>
            <input type="text" className="InputSize" placeholder="First Name" />
            <p className="font1 descMargin">
              <span className="star">*</span>Last Name{" "}
            </p>
            <input type="text" className="InputSize" placeholder="Last Name" />

            <p className="font1 descMargin">Age </p>
            <input type="text" className="InputSize" />
          </div>
          <div className="column">
            <p className="font1 descMargin">Email </p>
            <input type="text" className="InputSize" />
            <p className="font1 descMargin">Phone </p>
            <input type="text" className="InputSize" />
          </div>
        </div>
        <div className="ColorBar">Address Information</div>
        <div className="row">
          <div className="column">
            <p className="font1 descMargin">Location </p>
            <input type="text" className="InputSize" />
            <p className="font1 descMargin">Zip/Postal Code </p>
            <input type="text" className="InputSize" />
          </div>
          <div className="column">
            {/* <p className="font1 descMargin">Description </p>
            <input type="text" className="InputSize" /> */}
          </div>
        </div>
        <div className="ColorBar">Description Information</div>
        <div className="box">
          <p className="font1 descMargin">Description </p>
          <textarea
            className="TextArea"
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
      <div className="ButtonBar">
        <button className="Margin">Cancel</button>
        <button className="Margin">Save & New</button>
        <button className="Save">Save</button>
      </div>
    </section>
  );
};

export default Development;
