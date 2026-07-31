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

// View Blogs
app.get("/blogs", (req, res) => {

    if (blogs.length === 0) {
        return res.json({
            message: "No Blogs Found"
        });
    }

    res.json(blogs);

});

// Update Blog
app.put("/blogs/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const { title, content } = req.body;

    const blog = blogs.find(b => b.id === id);

    if (!blog) {
        return res.status(404).json({
            message: "Blog Not Found"
        });
    }

    blog.title = title;
    blog.content = content;

    res.json({
        message: "Blog Updated Successfully",
        blog
    });

});

// Delete Blog
app.delete("/blogs/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = blogs.findIndex(blog => blog.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Blog Not Found"
        });
    }

    blogs.splice(index, 1);

    res.json({
        message: "Blog Deleted Successfully"
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});