import React, { useState } from "react";
import "./../employee/Employee.css";
import VendorService from "./VendorService";

function Employee() {
  const [formData, setFormData] = useState({
    vendorName: "",
    vendorEmail: "",
    vendorUPI: "",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    VendorService.AddVendor(formData)
      .then((res) => {
        const data = res;
        if (data === undefined) {
          alert("Something went wrong");
        } else {
          alert("Vendor added successfully");
          console.log("data " + JSON.stringify(data));
          setFormData({
            vendorName: "",
            vendorEmail: "",
            vendorUPI: "",
          });
        }
      })
      .catch((error) => {
        alert("Error" + error);
      });
  };

  return (
    <div className="form-container">
      <h2>Vendor Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="vendorName"
            name="vendorName"
            value={formData.vendorName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="vendorEmail"
            name="vendorEmail"
            value={formData.vendorEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="designation">UPI:</label>
          <input
            type="text"
            id="vendorUPI"
            name="vendorUPI"
            value={formData.vendorUPI}
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
