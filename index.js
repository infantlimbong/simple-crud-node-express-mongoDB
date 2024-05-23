const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article.model')
const articleRoutes = require('./routes/articles.route')

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded ({extended: false}))

// Routes
app.use("/api/articles", articleRoutes)

app.get('/', (req, res) => {
    res.send("Hello from node API")
});

mongoose.connect('mongodb+srv://erajaya:erajaya123@cluster0.ugrqscc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected to the database!")
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    });
  })
  .catch(() => {
    console.log("Database connection failed!")
  });