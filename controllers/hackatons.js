const HackatonSchema = require("../models/hackaton");

const getHackatons = async (req, res) => {
  const { sort } = req.query;
  let result = HackatonSchema.find().lean();
  const hackatons = await result;
  if (sort === "true") {
    hackatons.forEach((hackaton) => {
      hackaton.developers.sort(
        (a, b) => parseFloat(b.score) - parseFloat(a.score)
      );
    });
  }
  res.status(200).json({ hackatons });
};

module.exports = {
  getHackatons,
};
