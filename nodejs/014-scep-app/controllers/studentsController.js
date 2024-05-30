const index = (req, res) => {
  res.render("index", { title: "Students" });
};

module.exports = {
  index,
};
