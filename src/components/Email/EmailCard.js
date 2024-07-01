import React, { useEffect, useState } from "react";
import "../vendor/Vendor.css";


import EmailService from "./EmailService";

const EmailCard = () => {
  // Assuming you have some vendor data as an array of objects
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    EmailService.getAllEmails()
      .then((res) => {
        const data = res;
        if (data === undefined) {
          alert("Something went wrong");
        } else {
          setEmails(data);
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
            <th>sender</th>
            <th>recipient</th>
            <th>emailSubject</th>
            <th>emailBody</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((emails, index) => (
            <tr key={index}>
              <td>{emails.sender}</td>
              <td>{emails.recipient}</td>
              <td>{emails.emailSubject}</td>
              <td>{emails.emailBody}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailCard;
