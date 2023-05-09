import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";


describe("Cities - Create", () => {


  it("Create a register", async () => {
    const res1 = await testServer
      .post("/cities")
      .send({
        name: "Caxias do Sul"
      });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual("number");
  });

  it("Create a register with short name", async () => {
    const res1 = await testServer
      .post("/cities")
      .send({
        name: "S"
      });
    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty("errors.body.name");
  });
});