module.exports = (mongoose) => {
  const Artist = mongoose.model(
    "artists",
    mongoose.Schema({
      artistid: { type: Number, required: true },
      firstName: { type: String, required: true },
      lastName: String,
      wiki_url: {
        type: String,
      },
      profile_url: { type: String, required: true },

      movies: [
        {
          type: String,
        },
      ],
    })
  );

  return Artist;
};