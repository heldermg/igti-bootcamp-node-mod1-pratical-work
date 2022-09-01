import express, { json } from 'express'
import brandsRouter from './cars/brand.router.js'

const app = express()
app.use(json())

app.use("/brands", brandsRouter);

app.listen(3000, () => {
  console.log("Express server listen on 3000")
})