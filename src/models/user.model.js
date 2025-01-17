import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    identificacion: { type: String, required: true },
    address: { type: String, required: true }, 
    neighborhood: { type: String, required: true },
    city: { type: String, required: true },
    role: {
      type: String,
      enum: ["cliente", "restaurant", "repartidor"],
      required: true,
    },
    cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" }, // Referencia al carrito solo si es cliente
  },
  { timestamps: true }
);

// Método para encriptar contraseña
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Método para hashear contraseña antes de guardar
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next(); // Asegúrate de llamar a next() después de hashear
});

const User = mongoose.model("User", userSchema);
export default User;
