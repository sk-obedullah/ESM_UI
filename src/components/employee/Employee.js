import React, { useState } from "react";
import "./Employee.css";
import EmployeeService from "./EmployeeService";
import { toast } from "react-toastify";


function Employee() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    ctc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function  handleSubmit  (e) {
    e.preventDefault();
    console.log("Form Data:", formData);
    EmployeeService.AddEmployee(formData)
    .then((res)=>{
        const data = res;
        if(data===undefined){
        alert("Something went wrong")
        }else{
          //  alert("Employee added successfully");
           toast.success("Employee added successfully");
            console.log("data "+JSON.stringify(data))
            setFormData({
              name: "",
              email: "",
              designation: "",
              ctc: "",
            });
        }
    })
    .catch((error)=>{
        alert("Error"+ error);
        
    })

  };

  return (
    <div className="form-container">
      <h2>Employee Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation:</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ctc">CTC:</label>
          <input
            type="number"
            id="ctc"
            name="ctc"
            value={formData.ctc}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Employee;
