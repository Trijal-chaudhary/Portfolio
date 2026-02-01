const Message = require("../Models/MessageModel");
const views = require("../Models/viewsModel");
exports.postContactMe = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-IN");
    const formattedTime = now.toLocaleTimeString("en-IN");
    const mess = new Message({
      name,
      email,
      subject,
      message,
      date: formattedDate,
      time: formattedTime,
    });
    await mess.save();
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getView = async (req, res, next) => {
  try {
    console.log("count + 1")
    let viewDoc = await views.findOne();

    if (!viewDoc) {
      viewDoc = new views({ count: 1 });
    } else {
      viewDoc.count += 1;
    }

    await viewDoc.save();

    res.status(200).json({ views: viewDoc.count });
    res.status(201).json({ message: "views counted" })
  } catch {
    res.status(500).json({ message: "something went wrong" })
  }
}