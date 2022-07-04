module.exports = (mongoose) => {
    const Movie = mongoose.model(
      "movie",
      mongoose.Schema(
        {
          movieid: { type: number, required: true },
          title: { type: String },
          published: Boolean,
          released: Boolean,
          poster_url: {
            type: String,
            unique: true,
            dropDups: true,
          },
          release_date: { type: date },
          publish_date: { type: date },
        },
        { timestamps: true }
      )
    );
  
    return Movie;
  };