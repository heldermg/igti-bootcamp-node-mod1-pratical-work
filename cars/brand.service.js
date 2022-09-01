import fs from 'fs'

global.CARS_DB_PATH = './cars/db/car-list.json'

function findLargestBrand() {
  const carsdb = JSON.parse(fs.readFileSync(CARS_DB_PATH, 'UTF-8'))
  const carsSorted = carsdb.sort((a, b) => {
    return b.models.length - a.models.length
  })
  let largestBrand = [carsSorted[0]]
  for (let i = 1; i <= carsSorted.length - 1; i++) {
    if (carsSorted[i].models.length === carsSorted[0].models.length) {
      largestBrand.push(carsSorted[i])
    } else {
      break
    }
  }
  return largestBrand.map(c => c.brand)
}

function findSmallestBrand() {
  const carsdb = JSON.parse(fs.readFileSync(CARS_DB_PATH, 'UTF-8'))
  const carsSorted = carsdb.sort((a, b) => {
    return a.models.length - b.models.length
  })
  let smallestBrand = [carsSorted[0]]
  for (let i = 1; i <= carsSorted.length - 1; i++) {
    if (carsSorted[i].models.length === carsSorted[0].models.length) {
      smallestBrand.push(carsSorted[i])
    } else {
      break
    }
  }
  return smallestBrand.map(c => c.brand)
}

function findXLargestBrand(x) {
  const carsdb = JSON.parse(fs.readFileSync(CARS_DB_PATH, 'UTF-8'))
  const carsSorted = carsdb.sort((a, b) => {
    const diff = b.models.length - a.models.length
    if (diff === 0) return a.brand.localeCompare(b.brand)
    return diff
  })

  return carsSorted
    .filter((_, idx) => idx < x)
    .map(c => `${c.brand} - ${c.models.length}`)
}

function findXSmallestBrand(x) {
  const carsdb = JSON.parse(fs.readFileSync(CARS_DB_PATH, 'UTF-8'))
  const carsSorted = carsdb.sort((a, b) => {
    const diff = a.models.length - b.models.length
    if (diff === 0) return a.brand.localeCompare(b.brand)
    return diff
  })

  return carsSorted
    .filter((_, idx) => idx < x)
    .map(c => `${c.brand} - ${c.models.length}`)
}

function findModels(brand) {
  const carsdb = JSON.parse(fs.readFileSync(CARS_DB_PATH, 'UTF-8'))
  console.log(carsdb.filter(c => c.brand.toLowerCase() === brand.toLowerCase()).map(c => c.models).flat());
  
  return carsdb
    .filter(c => c.brand.toLowerCase() === brand.toLowerCase())
    .map(c => c.models)
    .flat()
}

export { findLargestBrand, findSmallestBrand, findXLargestBrand, findXSmallestBrand, findModels }