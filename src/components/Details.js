import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import VerifyPatientBenfitDetailsfromLead from "./VerifyPatientBenfitDetailsfromLead";

const Details = () => {
  const [obj, setObj] = useState({});
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");
  const [zip, setZip] = useState("");
  const [description, setDescription] = useState("");
  const { recId } = useParams();
  useEffect(() => {
    const fetchLead = async () => {
      try {
        const response = await axios.get(`/leads/${recId}`);
        const lead = await response.data;
        setObj(lead);
        setId(lead.id);
        setFirstName(lead.firstName);
        setLastName(lead.lastName);
        setPhone(lead.phone);
        setEmail(lead.email);
        setLocation(lead.location);
        setAge(lead.age);
        setZip(lead.zip);
        setDescription(lead.description);
      } catch (error) {
        console.log("Err🔴r: ", error.message);
      }
    };
    fetchLead();
  }, []);

  const handleClick = async () => {
    console.log("Btn");
    const newObj = {
      id,
      firstName,
      lastName,
      phone,
      email,
      location,
      age,
      zip,
      description,
    };
    try {
      const response = await axios.put(`leads/${recId}`, newObj);
      console.log("Response :", response);
    } catch (err) {
      console.log("Err🔴r: ", err.message);
    }
    setObj(newObj);
    console.log("newobj: ", JSON.stringify(newObj));
  };
  return (
    <div className="Details">
      <div className="row">
        <VerifyPatientBenfitDetailsfromLead />
      </div>
      <div className="row">
        <div className="column">
          <p className="font1">id </p>
          <div className="flex">
            <p className="black">{id}</p>
          </div>
          <hr />
          <p className="font1">First Name </p>
          <div className="flex">
            <p className="black">{firstName}</p>
          </div>
          <hr />
          <p className="font1">Last Name </p>
          <div className="black">{lastName}</div>
          <hr />
          <p className="font1">Phone </p>
          <div className="black">{phone}</div>
          <hr />
          <p className="font1">Email </p>
          <div className="black">{email}</div>
          <hr />
        </div>
        <div className="column">
          <p className="font1">Location </p>
          <div className="black">{location}</div>
          <hr />
          <p className="font1">Age </p>
          <div className="black">{age}</div>
          <hr />
          <p className="font1">Zip/Postal Code </p>
          <div className="black">{zip}</div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Details;
