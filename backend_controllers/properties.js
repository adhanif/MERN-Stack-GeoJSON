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
//update property
const updateProperty = async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    const event = await property.findByIdAndUpdate(
      id,
      { $set: { location: { type: "Point", coordinates: body.location } } },
      { new: true }
    );
    res.json(event);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// find nearby property
const getPropertiesNearby = async (req, res) => {
  try {
    const { lng, lat, distance } = req.query;
    // console.log(req.query);
    const data = await property.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          $maxDistance: parseInt(distance),
        },
      },
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving nearby properties");
  }
};

module.exports = {
  createProperty,
  getAllProperties,
  getProperty,
  getPropertiesNearby,
  updateProperty,
};
