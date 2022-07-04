module.exports = (mongoose) => {
  const Genre = mongoose.model(
    "genres",
    mongoose.Schema({
      genreid: { type: Number, required: true },
      genre: { type: String, required: true },
    })
  );

  return Genre;
};
