import { useState, useEffect } from "react";
import axios from "../api/axios";
const Development = () => {
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
    <section className="Development">
      <div className="table-box">
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
              <th>Age1</th>
              <th>Age2</th>
              <th>Age3</th>
              <th>Age4</th>
              <th>Age5</th>
              <th>Age6</th>
              <th>Age7</th>
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
                  {lead.firstName}
                  {/* <Link to={`/leads/${lead.id}`}>{lead.firstName}</Link> */}
                </td>
                <td>{lead.lastName}</td>
                <td>{lead.email}</td>
                <td>{lead.email}</td>
                <td>{lead.email}</td>
                <td>{lead.email}</td>
                <td>{lead.email}</td>
                <td>{lead.email}</td>
                <td>{lead.email}</td>
                <td>{lead.email}</td>
                <td>{lead.phone}</td>
                <td>{lead.age}</td>
                {/* <td>{lead.intend}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Development;
