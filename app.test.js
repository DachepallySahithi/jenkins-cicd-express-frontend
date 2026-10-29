const { test } = require("node:test");
const assert = require("node:assert/strict");
const app = require("./app");

test("GET / returns success", async () => {
    const server = app.listen(0);

    try {
        const response = await fetch(
            `http://127.0.0.1:${server.address().port}/`
        );
        const body = await response.json();

        assert.equal(response.status, 200);
        assert.equal(body.status, "success");
    } finally {
        server.close();
    }
});

test("GET /health returns UP", async () => {
    const server = app.listen(0);

    try {
        const response = await fetch(
            `http://127.0.0.1:${server.address().port}/health`
        );
        const body = await response.json();

        assert.equal(response.status, 200);
        assert.equal(body.status, "UP");
    } finally {
        server.close();
    }
});