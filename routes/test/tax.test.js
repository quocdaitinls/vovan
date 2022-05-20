const request = require("supertest");
const app = require("../../app");
const db = require("./db");

const agent = request.agent(app);

describe("Tax test", () => {
  beforeAll(async () => await db.connect());
  afterEach(async () => await db.clear());
  afterAll(async () => await db.close());

  it("Get all tax", async () => {
    const res = await agent.get("/tax");

    expect(res.statusCode).toEqual(200);
  });

  it("Create new tax", async () => {
    const res = await agent.post("/tax").send({
      tax_id: "0808",
      name: "Nguyen Quoc Dai",
      age: "21",
      ccid: "038201000887",
      info: {
        phone: "0983270829",
        email: "quocdaiils@gmail.com",
        address: "85 Hang Bai",
      },
      depends: ["001", "002", "003"],
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual("Nguyen Quoc Dai");
  });
});
