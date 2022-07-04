module.exports = (mongoose) => {
    const Genre = mongoose.model(
      "genre",
      mongoose.Schema(
        {
          genreid: { type: integer, required: true },
          genre: { type: String, required: true },
        },
        { timestamps: true }
      )
    );
  
    return Genre;
  };