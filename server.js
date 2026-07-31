const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));

let blogs = [];

// Home
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Get Blogs
app.get("/blogs", (req, res) => {
    res.json(blogs);
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
        message: "Blog Added Successfully"
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});