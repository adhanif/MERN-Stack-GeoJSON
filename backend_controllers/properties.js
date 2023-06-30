const property = require("../modles/property");

const createProperty = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      bedrooms,
      area,
      image,
      images,
      owner,
      availability,
      createdAt,
    } = req.body;
    const data = await property.create({
      title: title,
      description: description,
      price: price,
      bedrooms: bedrooms,
      area: area,
      image: image,
      images: images,
      owner: owner,
      availability: availability,
      createdAt: createdAt,
    });
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating property");
  }
};

const getAllProperties = async (req, res) => {
  try {
    const data = await property.find().populate("owner");
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving properties");
  }
};

const getProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await property.findById(id).populate("owner");
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving property");
  }
};

module.exports = { createProperty, getAllProperties, getProperty };
