const mongoose = require("mongoose")
const app = require("./app")
const port = process.env.port || 3000

const database = "mongodb://127.0.0.1:27017/tours"

mongoose
  .connect(database, {
    UseNewUrlParser: true,
  })
  .then(() => console.log("DB sukses terkoneksi"))
// .catch((err) => err)

app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
