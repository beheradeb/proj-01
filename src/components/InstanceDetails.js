import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../api/axios";

const InstanceDetails = ({ record }) => {
  const [name, setName] = useState("");
  const [inputObj, setInputObj] = useState({
    id: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    location: "",
    age: "",
    zip: "",
    description: "",
  });
  const { recId } = useParams();
  useEffect(() => {
    const fetchLead = async () => {
      try {
        // const response = await axios.get(`/leads/${leadId}`);
        const response = await axios.get(`/${record}/${1}`);
        // console.log("=>", response.data.Account.Acc_Name);
        const lead = await response.data;
        setInputObj({ ...inputObj, ...lead });
      } catch (error) {
        console.log("Err🔴r: ", error.message);
      }
    };
    fetchLead();
  }, [name]);

  const handleClick = async () => {
    console.log("Btn");
    const newObj = {
      ...inputObj,
    };
    try {
      const response = await axios.put(`leads/${recId}`, newObj);
      console.log("Response :", response);
    } catch (err) {
      console.log("Err🔴r: ", err.message);
    }
    setInputObj(newObj);
    console.log("newobj: ", JSON.stringify(newObj));
  };
  return (
    <div className="Details">
      <div className="row">
        <div className="column">
          <p className="font1">id </p>
          <div className="flex">
            <p className="black">{inputObj.id}</p>
          </div>
          <hr />
          <p className="font1">Assets_Name </p>
          <div className="flex">
            <p className="black">{inputObj.Assets_Name}</p>
          </div>
          <hr />
          <p className="font1">Product </p>
          <div className="black">{inputObj.Product}</div>
          <hr />
        </div>
        <div className="column">
          <p className="font1">Account </p>
          {/* <div className="black">{inputObj.Account}</div> */}
          <div className="black">
            <Link to={`/accounts/5`}>{inputObj.Account}</Link>
          </div>
          <hr />
          <p className="font1">Product_Family </p>
          <div className="black">{inputObj.Product_Family}</div>
          <hr />
          <p className="font1">Device_Provider </p>
          <div className="black">{inputObj.Device_Provider}</div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default InstanceDetails;
