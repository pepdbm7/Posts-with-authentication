export const PostData = async (type, userData) => {
  debugger;
  let BaseURL =
    "http://localhost/react/1st%20project/1st-project/backend/api/index.php";

  try {
    const sendData = await fetch(BaseURL + "?type=" + type, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    const jsonData = await sendData.json();
    debugger;
    return jsonData;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
