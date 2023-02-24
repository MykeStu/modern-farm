console.log("Welcome to the main module")

import { createPlan } from './plan.js'
//All imports from ./seeds here
import { createAsparagus } from './seeds/asparagus.js'

import { createCorn } from './seeds/corn.js'

import { createPotato } from './seeds/potato.js'

import { createSoybean } from './seeds/soybean.js'

import { createSunflower } from './seeds/sunflower.js'

import { createWheat } from './seeds/wheat.js'

import { addPlant } from './field.js'

import { usePlants } from './field.js'

import { plantSeeds } from './tractor.js'

import { harvestPlants } from './harvester.js'

import { catalog } from './catalog.js'

let yearlyPlan = createPlan()
console.log(yearlyPlan)
let asparagusTest = createAsparagus()
let cornTest = createCorn()
let potatoTest = createPotato()
let soybeanTest = createSoybean()
let sunflowerTest = createSunflower()
let wheatTest = createWheat()
console.log(asparagusTest)
console.log(cornTest)
console.log(potatoTest)
console.log(soybeanTest)
console.log(sunflowerTest)
console.log(wheatTest)

addPlant(cornTest)
addPlant(asparagusTest)
addPlant(potatoTest)
addPlant(soybeanTest)
addPlant(sunflowerTest)
addPlant(wheatTest)

const plantsUsed = usePlants()
console.log(plantsUsed)



let plantsInField = plantSeeds(yearlyPlan)
let plantsHarvested = harvestPlants(plantsInField)
console.log(plantsHarvested)

const parentHTMLElement = document.querySelector(".container")

parentHTMLElement.innerHTML = catalog(plantsHarvested)
