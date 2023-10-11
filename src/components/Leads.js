import { useState, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const Leads = () => {
  const [leads, setLeads] = useState([]);
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get("/leads");
        const leads = await response.data;
        setLeads(leads);
      } catch (err) {
        console.log("Err🔴r: ", err.message);
      }
    };
    fetchLeads();
  }, []);
  return (
    <section className="Leads">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Intend</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.id}</td>
              <td>
                <Link to={`/leads/${lead.id}`}>{lead.firstName}</Link>
              </td>
              <td>{lead.lastName}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.age}</td>
              <td>{lead.intend}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Leads;
