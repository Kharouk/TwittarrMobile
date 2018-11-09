const fetch = require("node-fetch");
// export async function fetchPeeps() {
//   try {
//     let response = await fetch(
//       "https://chitter-backend-api.herokuapp.com/peeps"
//     );
//     let responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     console.error(error);
//   }
// }

function postData() {
  return fetch("https://chitter-backend-api.herokuapp.com/users", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: {
        handle: "crikey",
        password: "pass"
      }
    })
  }).then(response => response.json());
}

// postData()
//   .then(data => console.log(JSON.stringify(data)))
//   .catch(error => console.log(error));

const warning = postData().then(data =>
  console.log(JSON.stringify(data.handle))
);

console.log(warning);
