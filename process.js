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
        "Url": `https://custom-vision-demo-webapp.azurewebsites.net/image.png`,
      },
    });
    return response.data.predictions[0] // The first element of the predictions array is sufficient to be returned as the majority percentage is always the first element 
  } catch (err) {
    throw err;
  }
};

module.exports = process_image;
