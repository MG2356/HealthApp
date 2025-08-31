const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nodemailer = require('nodemailer');
const Signup = require('./Schma/Signup');

const app = express();
const PORT = 3000;
const SECRET_KEY = "your_secret_key"; 

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://munishgoel45698:9r3jwSuO1CzegsfD@cluster0.9r9br1c.mongodb.net/PatientData",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error connecting to DB:", err));

app.get("/", (req, res) => res.send("Website Working"));

app.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

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

const transporter = nodemailer.createTransport({
  service: "gmail", // or smtp
  auth: {
    user: "planezyalerts@gmail.com", 
    pass: "cgjhklxeynovbbax" 
  },
});

let otpStore = {}; 

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Signup.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit
    otpStore[email] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 }; // valid for 5 mins

    await transporter.sendMail({
      from: "munishgoel45698@gmail.com",
      to: email,
      subject: "Your Login OTP",
      text: `Your OTP is ${otp}. It is valid for 5 minutes.`
    });

    res.status(200).json({ message: "OTP sent to email" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;
    const record = otpStore[email];

    if (!record) return res.status(400).json({ error: "No OTP found for this email" });
    if (Date.now() > record.expiresAt) return res.status(400).json({ error: "OTP expired" });
    if (parseInt(otp) !== record.otp) return res.status(400).json({ error: "Invalid OTP" });

    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });

    const user = await Signup.findOne({ email }).select("firstName lastName email");
    if (!user) return res.status(404).json({ error: "User not found" });

    delete otpStore[email];

    res.status(200).json({ 
      message: "OTP verified", 
      token, 
      user 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});



const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; 
  if (!token) return res.status(401).json({ message: "Access denied, no token provided" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

app.get('/profile', authMiddleware, async (req, res) => {
  try {
    const email = req.user.email;

    const user = await Signup.findOne({ email }).select("firstName lastName email");
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ user }); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
