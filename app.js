const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Express Application is running!",
        application: "Jenkins CI/CD Assignment",
        status: "success"
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

app.get("/api/greet/:name", (req, res) => {
    res.json({
        message: `Hello, ${req.params.name}!`,
        service: "Express Application"
    });
});

if (require.main === module) {
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Express server running on port ${PORT}`);
    });
}

module.exports = app;