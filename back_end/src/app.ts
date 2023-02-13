import "reflect-metadata"
import cors from "cors"
import express from "express"
import "express-async-errors"
import { AppRoutes } from "./routes"
import { errorMiddleware } from "./middlewares/error.middleware"

const app = express()

app.use(express.json())

app.use(cors())

AppRoutes(app)

app.use(errorMiddleware)

export default app