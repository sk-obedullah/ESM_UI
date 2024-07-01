async function getAllEmails(vendorDetails) {
  try {
    const url = "http://localhost:8080/email/allEmails";

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

export default {  getAllEmails };