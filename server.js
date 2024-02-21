// Import required modules
const express = require("express");
const cors = require("cors");
// Create an instance of Express
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

// Use middleware to parse incoming requests

app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
	res.send("Hello, World!");
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
