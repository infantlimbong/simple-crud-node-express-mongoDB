const express = require('express');
const mongoose = require('mongoose');
const Article = require('./models/article.model');
const articleRoutes = require('./routes/articles.route');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/api/articles", articleRoutes);

app.get('/', (req, res) => {
    res.send("Hello from node API");
});

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to the database!");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed!", error);
  });
