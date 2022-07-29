const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imgUrl: { type: String },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) return err;

    this.password = hash;
    return next();
  });
});

UserSchema.methods.checkpassword = async function (password) {
  const hashedpassword = this.password;

  try {
    const match = bcrypt.compare(password, hashedpassword);
    return match;
  } catch (error) {
    return error;
  }
};

const User = model("User", UserSchema);
module.exports = User;
