export const harvestPlants = (array) => {
    let plantsHarvested = []
    for (let plant of array) {
        if(plant.type === 'Corn') {
            let i = 0
            while(i<plant.output/2) {
                plantsHarvested.push(plant)
                i++
            }
        } else {
            let i = 0
            while(i<plant.output) {
                plantsHarvested.push(plant)
                i++
            }
        }
    }
    return plantsHarvested
}