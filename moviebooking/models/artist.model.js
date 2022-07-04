module.exports = (mongoose) => {
    const Artist = mongoose.model(
      "artist",
      mongoose.Schema(
        {
          artistid: { type: Number, required: true },
          firstName: { type: String, required: true },
          lastName: String,
          wiki_url: {
            type: String,
            unique: true,
            required: true,
            dropDups: true,
          },
          profile_url: { type: String, required: true },
        },
        { timestamps: true }
      )
    );
  
    return Artist;
  };