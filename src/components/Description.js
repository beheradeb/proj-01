import Play from "../image/Down-Carrot-512.webp";
import Logo from "../image/lead_120.png";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import ToastBar from "./ToastBar"; //toast bar
import EditModal from "./EditModal";

const Description = () => {
  const [open, setOpen] = useState(false);
  const [obj, setObj] = useState({});
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const options = ["New Note", "Delete", "Check for New Data"];
  const { recId } = useParams();
  const navigate = useNavigate();
  // toastmsg
  const [show, setShow] = useState(false);
  const [toastMsg, setToastMsg] = useState("Not changed");
  const [toastMsgType, setToastMsgType] = useState("");
  //edit btn
  const [openEditModal, setOpenEditModal] = useState(false);
  const toggleOpenEditModal = () => {
    setOpenEditModal(!openEditModal);
  };
  useEffect(() => {
    const fetchResp = async () => {
      setId(recId);
      try {
        const response = await axios.get(`/leads/${recId}`);
        const lead = await response.data;
        setObj(lead);
        setFirstName(lead.firstName);
        setPhone(lead.phone);
        setEmail(lead.email);
      } catch (err) {
        console.log("Err🔴r: ", err.message);
      }
    };
    fetchResp();
  }, []);

  const handleConvert = async () => {
    try {
      await axios.post(`/accounts`, obj);
      setToastMsg("Successfully Converted");
      setToastMsgType("success");
      setShow(true);
      await axios.delete(`/leads/${recId}`);
      setTimeout(() => {
        setShow(false);
        navigate("/leads");
      }, 2000);
    } catch (err) {
      console.log("Err🔴r: ", err.message);
    }
  };
  const handleEdit = () => {
    toggleOpenEditModal();
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`/leads/${recId}`);
      setToastMsgType("fail");
      setToastMsg("Successfully Deleted");
      setShow(true);
      setTimeout(() => {
        setShow(false);
        navigate("/leads");
      }, 2000);
    } catch (err) {
      console.log("Err🔴r In Description of Lead: ", err.message);
    }
  };
  return (
    <>
      <div className="Description">
        <div className="first">
          <img src={Logo} alt="img not aviable" className="DesLeadLogo" />
          <div className="marginFont">
            <p className="font">Lead</p>
            <h1 className="fonth1">{firstName}</h1>
          </div>
          <div className="btn">
            <button
              className="follow"
              onClick={() => {
                handleConvert();
              }}
            >
              Convert
            </button>
            <button className="clRight" onClick={() => handleEdit()}>
              Edit
            </button>
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
      {openEditModal && (
        <div className="modal">
          <div className="overlay">
            <button className="cross-btn" onClick={toggleOpenEditModal}>
              <strong>&#9587;</strong>
            </button>
            <EditModal toggleOpenModal={toggleOpenEditModal} Id={id} />
          </div>
        </div>
      )}
    </>
  );
};

export default Description;
