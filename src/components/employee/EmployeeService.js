async function AddEmployee( employeeDetails) {
    try{
const url = "http://localhost:8080/emp/add";

    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(employeeDetails),
    });
    const data = await response.json();
    return (data);
}
catch(error){
    console.log(error)
    
    
}
}
async function getAllEmployee(vendorDetails) {
  try {
    const url = "http://localhost:8080/emp/getall";

    const response = await fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(vendorDetails),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}



export default { AddEmployee, getAllEmployee };