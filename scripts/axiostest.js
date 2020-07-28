var axios = require("axios");

// let sources = ["https://httpbin.org/get?source=lenta.ru", "https://httpbin.org/get?source=mos.ru"]
// let tasks = []
// let result = []
// for (let source in sources) {
//   console.log("pushing task");
//   tasks.push(
//       axios.get(sources[source])
//           .then(response => {
//             // console.log(response.data)
//             result.push(response.data)
//
//           })
//           .catch(error => {
//             console.log(error)
//           })
//   );
// }
//
// Promise.all(tasks).then(() => {
//   console.log("ALL TASKS DONE")
//   console.log(result)
//   console.log("EXITING SCOPE OF Promise.all")
// })



axios.get("https://lenta.ru/rss/news")
  .then(response => {
    console.log(response.data)
    }
)
axios.get("https://www.mos.ru/rss")
    .then(response => {
          console.log(response.data)
        }
    )



