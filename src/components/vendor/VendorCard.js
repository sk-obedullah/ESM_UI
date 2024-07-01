import React, { useEffect, useState } from "react";
import './Vendor.css'
import VendorService from "./VendorService";

const VendorCard = () => {
 
  const [vendors,setVendors] = useState([]);
  useEffect(()=>{
      VendorService.getAllVendor()
        .then((res) => {
          const data = res;
          if (data === undefined) {
            alert("Something went wrong");
          } else {
            setVendors(data)
            console.log("data " + JSON.stringify(data));
          }
        })
        .catch((error) => {
          alert("Error" + error);
        });
  },[])
   const [selectedUPIs, setSelectedUPIs] = useState([]);

   const handleCheckboxChange = (vendorEmail) => {
     setSelectedUPIs((prevSelectedUPIs) =>
       prevSelectedUPIs.includes(vendorEmail)
         ? prevSelectedUPIs.filter((upi) => upi !== vendorEmail)
         : [...prevSelectedUPIs, vendorEmail]
     );
   };

   const handleFetchSelectedUPIs = () => {
     console.log("Selected UPI Details:", selectedUPIs);
     if (selectedUPIs.length===0){
      alert("Please select vendor");
      return
     }
       VendorService.sendEmails(selectedUPIs)
         .then((res) => {
           const data = res;
           if (data === undefined) {
             alert("Email sent successfully");
           } else {
             alert("Email sent successfully");
             console.log("data " + JSON.stringify(data));
             setSelectedUPIs([]);
           }
         })
         .catch((error) => {
           alert("Error" + error);
         });
   };

  return (
    <div className="vendor-list">
      <button style={{ width: "auto" }} onClick={handleFetchSelectedUPIs}>
        Send Email
      </button>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Email</th>
            <th>UPI</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(vendor.vendorEmail)}
                />
              </td>
              <td>{vendor.vendorName}</td>
              <td>{vendor.vendorEmail}</td>
              <td>{vendor.vendorUPI}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );};

export default VendorCard;
