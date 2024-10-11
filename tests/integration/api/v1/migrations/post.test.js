const { parse } = require("next/dist/build/swc");

test("POST to /api/v1/migrations should return 200", async () => {
  const response = await fetch(
    "http://localhost:3000/api/v1/migrations", {
      "method": 'POST'
    }
  );
  expect(response.status).toBe(200);
});
