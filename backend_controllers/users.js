const user = require("../modles/user");

const createUser = async (req, res) => {
  try {
    const { email, name, phoneNumber } = req.body;
    const data = await user.create({
      email: email,
      name: name,
      phoneNumber: phoneNumber,
    });
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating user");
  }
};

module.exports = { createUser };
