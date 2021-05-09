const imageService = require("../../services/image-service.js");

const uploadFiles = async (req, res) => {
  try {
    const label = req.body.label;
    const type = req.body.type;
    const size = req.body.size;
    const image = req.body.image;

    const dataObj = {label, type, size, image};
    await imageService.uploadImage(dataObj);

    return res.send(`File has been uploaded.`);
      

  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};
