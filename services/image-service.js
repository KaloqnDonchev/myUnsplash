const { image } = require("../db").getDBModels();

const imageService = {
  create: {
    single: async (obj) => {
      try {
        return await image.create(obj)
      } catch (error) {
        throw error;
      }
    },
  },
};

imageService.uploadImage = async (obj) => {
  try {
    const image = await imageService.create.single(obj);
    return image;
  } catch (error) {
    throw error;
  }
}

module.exports = imageService;