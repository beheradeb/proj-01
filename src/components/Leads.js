import { useState, useEffect } from "react";
import axios from "../api/axios";
import Logo from "../image/lead_120.png";
import Play from "../image/Down-Carrot-512.webp";
import LeadModalContent from "./LeadModalContent";
import InstanceTable from "./InstanceTable";

const Leads = () => {
  //data for table
  const [columns, setColumns] = useState([
    { label: "Id", fieldName: "id" },
    { label: "First Name", fieldName: "firstName" },
    { label: "Last Name", fieldName: "lastName" },
    { label: "Phone", fieldName: "phone" },
    { label: "Email", fieldName: "email" },
    { label: "Location", fieldName: "location" },
  ]);
  const [data, setData] = useState([]);
  //data for table end
  const [open, setOpen] = useState(false);
  const options = ["New Note", "Delete", "Check for New Data"];
  // popup strt
  const [openModal, setOpenModal] = useState(false);
  const toggleOpenModal = () => {
    setOpenModal(!openModal);
  };
  if (openModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  //popup end
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get("/leads");
        const objs = await response.data;
        setData(objs);
      } catch (err) {
        console.log("Err🔴r: ", err.message);
      }
    };
    fetchLeads();
  }, []);
  return (
    <div className="Leads">
      <div className="firstWithExt">
        <img src={Logo} alt="img not aviable" className="DesLeadLogo" />
        <div className="marginFont">
          <p className="font">Leads</p>
          <h1 className="fonth1">Ms Shelly Brownell</h1>
        </div>
        <div className="btn">
          <button className="clRight" onClick={toggleOpenModal}>
            New
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
      {/* <Table record={leads} redirect="leads" /> */}
      <InstanceTable columns={columns} data={data} redirect="leads" />
      {openModal && (
        <div className="modal">
          <div className="overlay">
            <button className="cross-btn" onClick={toggleOpenModal}>
              <strong>&#9587;</strong>
            </button>
            <LeadModalContent toggleOpenModal={toggleOpenModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Leads;
