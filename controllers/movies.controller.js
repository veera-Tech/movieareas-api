export const MovieIndex = (req, res) => {
  res.send("get all movie list");
};

export const MovieCreate = (req, res) => {
  //id , titil, discription
  console.log(req.body);

  return res.json(req.body);

  //create a movie info
};
export const MovieUpdate = (req, res) => {
  res.send("update a movie");
};

export const MovieDelete = (req, res) => {
  res.send("Delete a movie");
};
