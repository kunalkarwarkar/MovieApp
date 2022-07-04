module.exports = (mongoose) => {
  const Movie = mongoose.model(
    "movies",
    mongoose.Schema({
      movieid: { type: Number, required: true },
      title: { type: String },
      published: Boolean,
      released: Boolean,
      poster_url: {
        type: String,
        unique: true,
        dropDups: true,
      },
      release_date: { type: Date },
      publish_date: { type: Date },
      artists: [
        {
          artistid: Number,
          first_name: String,
          last_name: String,
          wiki_url: String,
          profile_url: String,
          movies: [],
        },
      ],
      genres: [String],
      duration: Number,
      critic_rating: Number,
      trailer_url: String,
      wiki_url: String,
      story_line: String,
      shows: [
        {
          id: Number,
          theatre: {
            name: String,
            city: String,
          },
          language: String,
          show_timing: Date,
          available_seats: String,
          unit_price: Number,
        },
      ],
    })
  );

  return Movie;
};