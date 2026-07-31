const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to My Express Server");
});

app.get("/blog", (req, res) => {
    res.send("This is the Blog Page");
});

app.post("/contact", (req, res) => {
    const { name, email } = req.body;

    res.json({
        message: "Form Submitted Successfully",
        name,
        email
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});