const express = require("express");

const app = express();

app.use(express.json());

let blogs = [];

// Home
app.get("/", (req, res) => {
    res.send("Welcome to Blog API");
});

// Add Blog
app.post("/blogs", (req, res) => {

    const { title, content } = req.body;

    const blog = {
        id: blogs.length + 1,
        title,
        content
    };

    blogs.push(blog);

    res.json({
        message: "Blog Added Successfully",
        blog
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});