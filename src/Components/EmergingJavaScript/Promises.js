// Emerging JavaScript

// Promises

// To fetch data from an API
let api = "https://jsonplaceholder.typicode.com/posts"

let getapi = (url) => {
  fetch(url)
    .then((response) => response.json()) // This will execute when promise get fulfilled
    .then((data) => console.log(data))
    .catch((error) => console.log(error)) // This will execute when promise get failed
}

getapi(api)

// OutPut ->

// [
//   ({
//     userId: 1,
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body:
//       "quia et suscipit\n" +
//       "suscipit recusandae consequuntur expedita et cum\n" +
//       "reprehenderit molestiae ut ut quas totam\n" +
//       "nostrum rerum est autem sunt rem eveniet architecto",
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "qui est esse",
//     body:
//       "est rerum tempore vitae\n" +
//       "sequi sint nihil reprehenderit dolor beatae ea dolores neque\n" +
//       "fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n" +
//       "qui aperiam non debitis possimus qui neque nisi nulla",
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     body:
//       "et iusto sed quo iure\n" +
//       "voluptatem occaecati omnis eligendi aut ad\n" +
//       "voluptatem doloribus vel accusantium quis pariatur\n" +
//       "molestiae porro eius odio et labore et velit aut",
//   })

//   ...
// ]
