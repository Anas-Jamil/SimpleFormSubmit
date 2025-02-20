const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./config/db");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// POST ROUTE - Form Submission - Form 1

app.post("/submit", async (req, res) => {
    const {name, email, dob, gender, description} = req.body;

    try {
        const [result] = await pool.query(
            "INSERT INTO submits (name, email, dob, gender, description) VALUES (?, ?, ?, ?, ?)",
            [name, email, dob, gender, description]
        );

        res.json({ success: true, message: "Form submittied succesfully"});
    } catch (err) {
        console.error(err);
        res.status(500).json({success:false, message: "Error submitting"});
    }
});

app.listen(port, () => {
    console.log('server running on ${port}');
})