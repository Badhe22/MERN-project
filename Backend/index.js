const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const usersModel = require('./Models/Users');

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}));

//added this line
app.use(express.static('public'));

mongoose.connect("mongodb://127.0.0.1:27017/users");

const secretKey = 'secret';

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        req.user = user;
        next();
    });
};

app.post('/register', (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    usersModel.findOne({ email: email })
        .then(user => {
            if (user) {
                return res.status(400).json({ message: "Email already registered" });
            }

            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: "Internal Server Error" });
                }

                usersModel.create({ firstName, lastName, email, password: hash })
                    .then(user => res.json({ message: "Registration successful" }))
                    .catch(err => {
                        console.error(err);
                        res.status(500).json({ error: "Internal Server Error" });
                    });
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error" });
        });
});

app.post('/login', async (req, res) => {
    const { email, password, userType, adminSecretKey } = req.body;

    try {
        if (userType === 'admin') {
            // Admin login
            if (!adminSecretKey) {
                return res.status(400).json({ message: "Admin secret key is required" });
            }

            if (adminSecretKey !== 'admin') {
                return res.status(400).json({ message: "Invalid admin secret key" });
            }

            // Generate admin token
            const token = jwt.sign({ email: 'admin@example.com', userType: 'admin' }, secretKey);
            return res.json({ message: "Success", token });
        } else {
            // Regular user login
            if (!email || !password) {
                return res.status(400).json({ message: "Email and password are required" });
            }

            const user = await usersModel.findOne({ email: email });

            if (!user) {
                return res.status(400).json({ message: "Incorrect email or password" });
            }

            const match = await bcrypt.compare(password, user.password);

            if (!match) {
                return res.status(400).json({ message: "Incorrect email or password" });
            }

            // Generate user token
            const token = jwt.sign({ email: user.email, userType: 'user' }, secretKey);
            return res.json({ message: "Success", token });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/", (req, res) => {
    res.send("Server is running successfully!");
});

app.get("/protected", authenticateJWT, (req, res) => {
    res.json({ message: "This is a protected route" });
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
