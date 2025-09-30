const { default: mongoose, model } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // _id: mongoose.Types.ObjectId,
    userId: {
      type: Number,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    mobileNo: {
      type: String,
      require: true,
    },
    Date_of_Birth: {
      type: Date,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
