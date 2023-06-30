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
    res.status(500).send("Error creating user");
  }
};

module.exports = { createProperty };
