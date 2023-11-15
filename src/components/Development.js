import "./Development.css";
import { useEffect, useState } from "react";
// import LineChart from "./LineChart";
// import TestModal from "./TestModal";
import InstanceTable from "./InstanceTable";
const Development = () => {
  const [columns, setColumns] = useState([
    { label: "Id", fieldName: "id" },
    { label: "First Name", fieldName: "first_name" },
    { label: "Last Name", fieldName: "last_name" },
    { label: "Phone", fieldName: "phone" },
    { label: "Email", fieldName: "email" },
    { label: "Location", fieldName: "city" },
  ]);
  const [data, setData] = useState([
    {
      id: 1,
      firstName: "David",
      lastName: "Dwen",
      phone: "3234341313",
      email: "david@gmail.com",
      location: "us",
    },
    {
      id: 2,
      firstName: "Robert",
      lastName: "Dany",
      phone: "3234341313",
      email: "david@gmail.com",
      location: "us",
    },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/get-all/lead", {
        method: "GET",
      });
      const resData = await response.json();
      const newArr = [];
      resData.forEach((ele) => {
        const obj = ele;
        const newObj = {};
        for (const key in obj) {
          if (typeof obj[key] === "object") {
            newObj[key] = obj[key].name;
          } else {
            newObj[key] = obj[key];
          }
        }
        newArr.push(newObj);
      });
      setData(newArr);
      const column = Object.keys(resData[0]).map((key) => {
        const newArr = key
          .split("_")
          .map((ele) => ele[0].toUpperCase() + ele.slice(1));
        return {
          label: newArr.join(" "),
          fieldName: key,
        };
      });
      // setColumns(column);
      const filteredColumns = column.filter(
        (_, index) => index > 0 && index < 6
      );
      setColumns(filteredColumns);
    };
    fetchData();
    //testing code
  }, []);
  return (
    <section className="Development">
      <InstanceTable columns={columns} data={data} />
      {/* <TestModal /> */}
      {/* <LineChart /> */}
    </section>
  );
};

export default Development;
