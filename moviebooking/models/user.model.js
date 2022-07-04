module.exports = (mongoose) => {
  const User = mongoose.model(
    "user",
    mongoose.Schema({
      email: { type: String, unique: true, required: true, dropDups: true },
      firstName: { type: String, required: true },
      lastName: String,
      username: { type: String, required: true },
      password: { type: String, required: true },
      role: { type: String, default: "user" } /*types: admin ,user*/,
      isLoggedIn: Boolean,
      token: String,
    })
  );

  return User;
};
