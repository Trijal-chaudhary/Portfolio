const Message = require("../Models/MessageModel");

exports.postContactMe = async (req, res) => {
  try {
    const mess = new Message(req.body);
    await mess.save();
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
