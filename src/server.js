const express = require("express")

const app = express()

//#region routes
const rootRouter = require("./routes/index")
//#endregion

app.use(rootRouter)

const start = (port) => {
  app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
  })
}

module.exports.start = start
