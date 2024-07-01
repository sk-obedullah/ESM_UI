import React, { useEffect, useState } from "react";
import "../vendor/Vendor.css";

import EmployeeService from "./EmployeeService";

const EmployeeCard = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    EmployeeService.getAllEmployee()
      .then((res) => {
        const data = res;
        if (data === undefined) {
          alert("Something went wrong");
        } else {
          setEmployees(data);
          console.log("data " + JSON.stringify(data));
        }
      })
      .catch((error) => {
        alert("Error" + error);
      });
  }, []);

  return (
    <div className="vendor-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>designation</th>
            <th>CTC</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employees, index) => (
            <tr key={index}>
              <td>{employees.name}</td>
              <td>{employees.email}</td>
              <td>{employees.designation}</td>
              <td>{employees.ctc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeCard;
