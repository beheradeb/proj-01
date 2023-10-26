import { useState, useEffect } from "react";
import axios from "../api/axios";
const EditModal = ({ toggleOpenModal, Id }) => {
  const [inputObj, setInputObj] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    location: "",
    age: "",
    zip: "",
    description: "",
  });
  const leadId = Id;

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`/leads/${leadId}`);
        const data = await response.data;
        setInputObj({
          ...inputObj,
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          email: data.email,
          location: data.location,
          age: data.age,
          zip: data.zip,
          description: data.description,
        });
      } catch (err) {
        console.log("EditModalErr🔴r: ", err.message);
      }
    };
    fetch();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputObj({ ...inputObj, [name]: value });
  };
  const handleSave = async () => {
    try {
      const response = await axios.put(`/leads/${leadId}`, inputObj);
      const data = await response.data;
      console.log("EditModal After updte:", data);
    } catch (err) {
      console.log("Err🔴r :", err.message);
    }

    toggleOpenModal();
    window.location.reload();
  };
  return (
    <>
      <section className="LeadModalContent">
        <div className="Inside">
          <p className="Head">
            Edit {inputObj.firstName} {inputObj.lastName}
          </p>
          <div className="thickLine"></div>
          <p className="ReqInfo">
            <span className="star">*</span> = Required Information
          </p>

          <div className="row">
            <div className="column">
              <p className="font1 descMargin">First Name </p>
              <input
                type="text"
                className="InputSize"
                placeholder={inputObj.firstName}
                name="firstName"
                onChange={handleInputChange}
                value={inputObj.firstName}
              />
              <p className="font1 descMargin">
                <span className="star">*</span>Last Name{" "}
              </p>
              <input
                type="text"
                className="InputSize"
                placeholder={inputObj.lastName}
                name="lastName"
                onChange={handleInputChange}
                value={inputObj.lastName}
              />

              <p className="font1 descMargin">Age </p>
              <input
                type="text"
                className="InputSize"
                name="age"
                onChange={handleInputChange}
                value={inputObj.age}
              />
            </div>
            <div className="column">
              <p className="font1 descMargin">Email </p>
              <input
                type="text"
                className="InputSize"
                name="email"
                onChange={handleInputChange}
                value={inputObj.email}
              />
              <p className="font1 descMargin">Phone </p>
              <input
                type="text"
                className="InputSize"
                name="phone"
                onChange={handleInputChange}
                value={inputObj.phone}
              />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <p className="font1 descMargin">Location </p>
              <input
                type="text"
                className="InputSize"
                name="location"
                onChange={handleInputChange}
                value={inputObj.location}
              />
              <p className="font1 descMargin">Zip/Postal Code </p>
              <input
                type="text"
                className="InputSize"
                name="zip"
                onChange={handleInputChange}
                value={inputObj.zip}
              />
            </div>
            <div className="column">
              {/* <p className="font1 descMargin">Description </p>
        <input type="text" className="InputSize" /> */}
            </div>
          </div>

          <div className="box">
            <p className="font1 descMargin">Description </p>
            <textarea
              className="TextArea"
              name="description"
              id="description"
              cols="30"
              rows="10"
              onChange={handleInputChange}
              value={inputObj.description}
            ></textarea>
          </div>
        </div>
        <div className="ButtonBar">
          <button className="Margin" onClick={toggleOpenModal}>
            Cancel
          </button>
          <button className="Margin" onClick={toggleOpenModal}>
            Save & New
          </button>
          <button className="Save" onClick={() => handleSave()}>
            Save
          </button>
        </div>
      </section>
    </>
  );
};

export default EditModal;
