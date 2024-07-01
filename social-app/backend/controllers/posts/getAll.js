const getAll = async (req, res, next) => {
  console.log("GET ALL POSTS", req.locals);
  res.send("Svi postovi");
};

module.exports = getAll;
