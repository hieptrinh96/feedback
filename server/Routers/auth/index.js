import { Router } from "express";

const app = Router()

app.get('/', () => console.log('route was hit'))

export { app }