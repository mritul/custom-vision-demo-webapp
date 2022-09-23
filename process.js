const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();

const process_image = async () => {
  try {
    const headers = {
      "Prediction-Key": process.env.PREDICTION_KEY,
      "Content-Type": "application/json",
    };
    const response = await axios({
      method:"POST",
      url:process.env.PREDICTION_ENDPOINT_URL,
      headers: headers,
      data: {
        "Url": `https://lion-cheetah-classifier.azurewebsites.net/image.png`,
      },
    });
    console.log(response,response.data);
  } catch (err) {
    throw err;
  }
};

module.exports = process_image;
