import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button} from 'reactstrap'
import Employee from "../employee/Employee";
import Vendor from "../vendor/Vendor"
import VendorCard from "../vendor/VendorCard";
import EmployeeCard from "../employee/EmployeeCard";
import EmailCard from "../Email/EmailCard";
import './Dashboard.css'

function Dashboard() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const[showEmployee,setShowEmoployee] = useState(false);
  const[showVendor,setShowVendor] = useState(false);
  const[showVendorList,setShowVendorList] = useState(false);
  const[showEmployeeList,setShowEmployeeList] = useState(false);
  const[showEmailList,setShowEmailList] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (token !== "Success") {
      navigate("/login");
    }
  }, [token]);

  let content="";
  const logout=()=>{
    localStorage.removeItem("token");
    navigate("/login");
  }

  const addEmploye=()=>{
    setShowEmoployee(!showEmployee);
    setShowVendor(false);
    setShowVendorList(false);
    setShowEmployeeList(false);
    setShowEmailList(false);
    
  }
  const addVendor = () => {
    setShowVendor(!showVendor);
    setShowEmoployee(false);
    setShowVendorList(false);
    setShowEmployeeList(false);
    setShowEmailList(false);
  };
  const vendorList = () => {
    setShowVendorList(!showVendorList);
     setShowVendor(false);
     setShowEmoployee(false);
     setShowEmployeeList(false);
     setShowEmailList(false);
  };
  const employeeList = () => {
    setShowEmployeeList(!showEmployeeList);
     setShowVendorList(false);
     setShowVendor(false);
     setShowEmoployee(false);  
     setShowEmailList(false);
  };
  const emailList = () => {
    setShowEmailList(!showEmailList);
    setShowEmployeeList(false);
    setShowVendorList(false);
    setShowVendor(false);
    setShowEmoployee(false);
    
  };
  if (showEmployee) {
    content = <Employee/>
  }
  if (showVendor) {
    content = <Vendor />;
  }
  if (showVendorList){
    content = <VendorCard/>
  }
  if(showEmployeeList){
    content = <EmployeeCard/>
  }
  if (showEmailList) {
    content = <EmailCard />;
  }
    return (
      <React.Fragment>
        <div
          className="close"
        >
          <Button className="logout"
            color="red"
            onClick={logout}
          >
            Logout
          </Button>
        </div>
        <div className="menu">
          
          <Button className="button" color="primary" onClick={addEmploye}>
            Add Employee
          </Button>
          <Button className="button" color="primary" onClick={addVendor}>
            Add Vendor
          </Button>
          <Button className="button" color="primary" onClick={vendorList}>
            All Vendors
          </Button>
          <Button className="button" color="primary" onClick={employeeList}>
            All Employees
          </Button>
          <Button className="button" color="primary" onClick={emailList}>
            All Emails
          </Button>

          <section style={{ marginTop: "50px" }}>{content}</section>
          {/* <section style={{ marginTop: "50px" }}>{showVendorInfo}</section> */}
        </div>
      </React.Fragment>
    );
}

export default Dashboard;
