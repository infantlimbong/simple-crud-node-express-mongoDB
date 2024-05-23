const mongoose = require('mongoose')

const ArticleSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter the article title"]
        },

        content: {
            type: String,
            required: [true, "Please enter the article content"]
        },

        author: {
            type: String,
            required: [true, "Please enter the article author"]
        },

        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

const Article = mongoose.model("Article", ArticleSchema)

module.exports = Article