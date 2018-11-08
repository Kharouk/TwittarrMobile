import { fetchPeeps } from "../apiPeeps";

describe("Testing Fetching Peeps", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("calls Chitter and returns data", () => {
    fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));

    fetchPeeps().then(res => {
      expect(res.data).toEqual("12345");
    });
  });
});
