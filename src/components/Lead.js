import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
const Lead = () => {
  const [obj, setObj] = useState({});
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [intend, setIntend] = useState("");
  const { leadId } = useParams();
  console.log("id : ", leadId);
  useEffect(() => {
    const fetchLead = async () => {
      try {
        const response = await axios.get(`/leads/${leadId}`);
        const lead = await response.data;
        setObj(lead);
        setId(lead.id);
        setFirstName(lead.firstName);
        setLastName(lead.lastName);
        setPhone(lead.phone);
        setEmail(lead.email);
        setLocation(lead.location);
        setAge(lead.age);
        setGender(lead.gender);
        setWeight(lead.weight);
        setIntend(lead.intend);
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
      gender,
      weight,
      intend,
    };
    try {
      const response = await axios.put(`leads/${leadId}`, newObj);
      console.log("Response :", response);
    } catch (err) {
      console.log("Err🔴r: ", err.message);
    }
    setObj(newObj);
    console.log("newobj: ", JSON.stringify(newObj));
  };
  return (
    <div className="Lead">
      <div className="rw">
        <div className="col">
          <h2>Details</h2>
        </div>
        <div className="col">
          <button onClick={() => handleClick()}>save</button>
        </div>
      </div>
      <hr />
      <form className="row">
        <table className="column">
          <tbody>
            <tr>
              <td htmlFor="id">
                <strong>id: </strong>
              </td>
              <td>
                <input
                  id="id"
                  value={id}
                  type="text"
                  placeholder={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td htmlFor="firstName">
                <strong>First Name: </strong>
              </td>
              <td>
                <input
                  id="firstName"
                  value={firstName}
                  type="text"
                  placeholder={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td htmlFor="lastName">
                <strong>Last Name: </strong>
              </td>
              <td>
                <input
                  id="lastName"
                  value={lastName}
                  type="text"
                  placeholder={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td htmlFor="phone">
                <strong>Phone: </strong>
              </td>
              <td>
                <input
                  id="phone"
                  value={phone}
                  type="text"
                  placeholder={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td htmlFor="email">
                <strong>Email: </strong>
              </td>
              <td>
                <input
                  id="email"
                  value={email}
                  type="text"
                  placeholder={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table className="column">
          <tbody>
            <tr>
              <td htmlFor="location">
                <strong>Location: </strong>
              </td>
              <td>
                <input
                  id="location"
                  value={location}
                  type="text"
                  placeholder={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td htmlFor="age">
                <strong>Age: </strong>
              </td>
              <td>
                <input
                  id="age"
                  value={age}
                  type="text"
                  placeholder={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td htmlFor="gender">
                <strong>Gender: </strong>
              </td>
              <td>
                <input
                  id="gender"
                  value={gender}
                  type="text"
                  placeholder={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td htmlFor="weight">
                <strong>Weight: </strong>
              </td>
              <td>
                <input
                  id="weight"
                  value={weight}
                  type="text"
                  placeholder={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td htmlFor="intend">
                <strong>Intend: </strong>
              </td>
              <td>
                <input
                  id="intend"
                  value={intend}
                  type="text"
                  placeholder={intend}
                  onChange={(e) => setIntend(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Lead;
