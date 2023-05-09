const { Router } = require("express")
const path = require("path")

const rootRouter = Router()

rootRouter.get("/", (req, res) => {
  const pagePath = path.resolve(__dirname, "../pages/home.html")
  res.sendFile(pagePath)
})

module.exports = rootRouter
