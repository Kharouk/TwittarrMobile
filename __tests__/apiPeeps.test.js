import { fetchPeeps } from "../apiPeeps";

describe("Testing Fetching Peeps", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("calls Chitter and returns data", () => {
    fetch.mockResponseOnce(JSON.stringify({ body: "Hello World!" }));

    fetchPeeps().then(res => {
      expect(res.data).toEqual("Hello World!");
    });
  });
});
