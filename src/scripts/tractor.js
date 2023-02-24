//seeds here
import { createAsparagus } from './seeds/asparagus.js'

import { createCorn } from './seeds/corn.js'

import { createPotato } from './seeds/potato.js'

import { createSoybean } from './seeds/soybean.js'

import { createSunflower } from './seeds/sunflower.js'

import { createWheat } from './seeds/wheat.js'
//field here
import { addPlant } from './field.js'

import { usePlants } from './field.js'
//tractor function here
export const plantSeeds = (yearlyPlan) => {
    for(let plan of yearlyPlan) {
        for(let seed of plan) {
            if(seed === 'Soybean') {
                let soybean = createSoybean()
                addPlant(soybean)
            } else if(seed === 'Corn') {
                let corn = createCorn()
                addPlant(corn)
            } else if(seed === 'Asparagus') {
                let asparagus = createAsparagus()
                addPlant(asparagus)
            } else if(seed === 'Potato') {
                let potato = createPotato()
                addPlant(potato)
            } else if(seed === 'Wheat') {
                let wheat = createWheat()
                addPlant(wheat)
            } else if(seed === 'Sunflower') {
                let sunflower = createSunflower()
                addPlant(sunflower)
            }
        }
    }
    return usePlants()
}
