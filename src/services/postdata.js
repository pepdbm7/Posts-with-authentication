export const PostData = async (type, userData) => {
  let BaseURL = "http://localhost/react-php/api/index.php";

  try {
    const sendData = await fetch(BaseURL + "?tp=" + type, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    await sendData.json();
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
