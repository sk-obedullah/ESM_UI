async function AddVendor(vendorDetails) {
  try {
    const url = "http://localhost:8080/vendor/add";

    const response = await fetch(url, {
      method: "post",
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
async function getAllVendor(vendorDetails) {
  try {
    const url = "http://localhost:8080/vendor/getall";

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
async function sendEmails(emailList) {
  try {
    const url = "http://localhost:8080/email/sendEmails";

    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(emailList),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default { AddVendor, getAllVendor, sendEmails };
