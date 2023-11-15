import "./Table.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Table = ({ record, redirect }) => {
  const [thArr, setThArr] = useState([]);
  const val = record[0] ? record[0] : "empty";
  useEffect(() => {
    if (val !== "empty") setThArr(Object.keys(record[0]));
  }, [val]);
  return (
    <div className="table-box">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>
              <input type="checkbox" />
            </th>
            {thArr.map((ele) => (
              <th key={ele}>{ele}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {record.map((lead, index) => (
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
              {thArr &&
                thArr.map((tdele) => (
                  <td key={tdele}>
                    {tdele === "id" ? (
                      <Link to={`/${redirect}/${lead.id}`}>{lead.id}</Link>
                    ) : (
                      lead[tdele]
                    )}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
