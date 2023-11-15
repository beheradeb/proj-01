import { useState, useEffect } from "react";
import axios from "../api/axios";
// import { Link } from "react-router-dom";
import Logo from "../image/lead_120.png";
import Play from "../image/Down-Carrot-512.webp";
import AccountNew from "./AccountNew";
// import Table from "./Table";
import InstanceTable from "./InstanceTable";

const Accounts = () => {
  const [open, setOpen] = useState(false);
  const options = ["New Note", "Delete", "Check for New Data"];
  // data for table
  const [columns, setColumns] = useState([
    { label: "Id", fieldName: "id" },
    { label: "First Name", fieldName: "firstName" },
    { label: "Last Name", fieldName: "lastName" },
    { label: "Phone", fieldName: "phone" },
    { label: "Email", fieldName: "email" },
    { label: "Location", fieldName: "location" },
  ]);
  const [data, setData] = useState([]);
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
        const response = await axios.get("/accounts");
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
        <img src={Logo} alt="img not aviable" className="DesAccountLogo" />
        <div className="marginFont">
          <p className="font">Person Accounts</p>
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
      {/* <Table record={leads} redirect={"accounts"} /> */}
      <InstanceTable columns={columns} data={data} />
      {/* <div className="table-box">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>
                <input type="checkbox" />
              </th>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={lead.id}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="checkbox"
                    id={lead.id}
                    name={lead.id}
                    value={lead.id}
                  />
                </td>
                <td>{lead.id}</td>
                <td>
                  <Link to={`/accounts/${lead.id}`}>{lead.firstName}</Link>
                </td>
                <td>{lead.lastName}</td>
                <td>{lead.email}</td>
                <td>{lead.phone}</td>
                <td>{lead.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      {openModal && (
        <div className="modal">
          <div className="overlay">
            <button className="cross-btn" onClick={toggleOpenModal}>
              <strong>&#9587;</strong>
            </button>
            <AccountNew toggleOpenModal={toggleOpenModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Accounts;
