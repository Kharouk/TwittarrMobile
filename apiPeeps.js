export async function fetchPeeps() {
  try {
    let response = await fetch(
      "https://chitter-backend-api.herokuapp.com/peeps"
    );
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
