const dotenv = require("dotenv")
dotenv.config()
console.clear()

const { start } = require("./server")

const PORT = process.argv[2] || process.env.PORT || 3000

start(PORT)
