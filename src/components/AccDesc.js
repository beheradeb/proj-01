import Play from "../image/Down-Carrot-512.webp";
import Logo from "../image/lead_120.png";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import ToastBar from "./ToastBar";

const AccDesc = () => {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const options = ["New Note", "Delete", "Check for New Data"];
  const { recId } = useParams();
  // toastmsg
  const [show, setShow] = useState(false);
  const [toastMsg, setToastMsg] = useState("Not changed");
  const [toastMsgType, setToastMsgType] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchResp = async () => {
      try {
        const response = await axios.get(`/accounts/${recId}`);
        const lead = await response.data;
        setFirstName(lead.firstName);
        setPhone(lead.phone);
        setEmail(lead.email);
      } catch (err) {
        console.log("Err🔴r: ", err.message);
      }
    };
    fetchResp();
  }, []);
  const handleDelete = async () => {
    try {
      await axios.delete(`/accounts/${recId}`);
      setToastMsgType("fail");
      setToastMsg("Successfully Deleted");
      setShow(true);
      setTimeout(() => {
        setShow(false);
        navigate("/accounts");
      }, 2000);
    } catch (err) {
      console.log("Err🔴r In Description of Lead: ", err.message);
    }
  };
  return (
    <>
      <div className="Description">
        <div className="first">
          <img src={Logo} alt="img not aviable" className="DesAccountLogo" />
          <div className="marginFont">
            <p className="font">Person Account</p>
            <h1 className="fonth1">{firstName}</h1>
          </div>
          <div className="btn">
            <button className="clRight">Edit</button>
            <button className="clRight edit" onClick={() => handleDelete()}>
              Delete
            </button>
            <button className="setRgt">
              <img
                src={Play}
                alt="play"
                style={{ height: "12.3px", width: "13px" }}
                onClick={() => setOpen(!open)}
              />
            </button>

            <div className="Relative">
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
          </div>
        </div>
        <div className="second">
          <div className="rm">
            <p className="font1">Title</p>
            <p>SVP, Technology</p>
          </div>
          <div className="rm">
            <p className="font1">Company</p>
            <p>Western Telecommunications Corp.</p>
          </div>
          <div className="rm">
            <p className="font1">Phone(2)</p>
            <a href="phone" className="anch">
              {phone}
            </a>
          </div>
          <div className="rm">
            <p className="font1">Email</p>
            <a href="gmail" className="anch">
              {email}
            </a>
          </div>
        </div>
      </div>
      {show && <ToastBar message={toastMsg} type={toastMsgType} />}
    </>
  );
};

export default AccDesc;
