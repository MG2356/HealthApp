const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const Signup = require('./Schma/Signup');

const app = express();
const PORT = 3000;
const SECRET_KEY = "your_secret_key"; // ⚠️ move this to process.env in production

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://munishgoel45698:9r3jwSuO1CzegsfD@cluster0.9r9br1c.mongodb.net/PatientData",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error connecting to DB:", err));

app.get("/", (req, res) => res.send("Website Working"));
/**
 * =========================
 *   SIGNUP ROUTE
 * =========================
 */
app.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if user already exists
    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Signup({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * =========================
 *   LOGIN ROUTE
 * =========================
 */
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user
    const user = await Signup.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    // Generate JWT
    const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
const user = {
  email: "m@gmail.com",
  password: "123456",
};
app.post("/logins", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  if (email === user.email && password === user.password) {
    return res.json({ message: "Login successful", token: "dummy-jwt-token" });
  } else {
    return res.status(401).json({ error: "Invalid credentials" });
  }
});


/**
 * =========================
 *   AUTH MIDDLEWARE
 * =========================
 */
const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Expect "Bearer <token>"
  if (!token) return res.status(401).json({ message: "Access denied, no token provided" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

/**
 * =========================
 *   PROTECTED ROUTE
 * =========================
 */
app.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: "Welcome to profile", user: req.user });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
