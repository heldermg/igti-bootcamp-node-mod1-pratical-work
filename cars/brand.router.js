import express from 'express'
import { findLargestBrand, findSmallestBrand, findXLargestBrand, findXSmallestBrand, findModels } from './brand.service.js'

const brandRouter = express.Router();

brandRouter.get("/largestBrand", (_, res) => {
  try {
    res
      .status(200)
      .send(findLargestBrand())
  } catch (err) {
    res
      .status(500)
      .send({ error: `${req.method} ${req.baseUrl}: ${err}` })
  }
})

brandRouter.get("/smallestBrand", (_, res) => {
  try {
    res
      .status(200)
      .send(findSmallestBrand())
  } catch (err) {
    res
      .status(500)
      .send({ error: `${req.method} ${req.baseUrl}: ${err}` })
  }
})

brandRouter.get("/largestBrand/:x", (req, res) => {
  try {
    res
      .status(200)
      .send(findXLargestBrand(req.params.x))
  } catch (err) {
    res
      .status(500)
      .send({ error: `${req.method} ${req.baseUrl}: ${err}` })
  }
})

brandRouter.get("/smallestBrand/:x", (req, res) => {
  try {
    res
      .status(200)
      .send(findXSmallestBrand(req.params.x))
  } catch (err) {
    res
      .status(500)
      .send({ error: `${req.method} ${req.baseUrl}: ${err}` })
  }
})

brandRouter.post("/findModels", (req, res) => {
  const { brandName } = req.body

  try {
    res
      .status(200)
      .send(findModels(brandName))
  } catch (err) {
    res
      .status(500)
      .send({ error: `${req.method} ${req.baseUrl}: ${err}` })
  }
})

export default brandRouter