let plants = []
export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)){
        plants.push(seedObject[0])
        plants.push(seedObject[1])
    } else {
        plants.push(seedObject)
    }
    return plants
}

export const usePlants = () => {
    return plants
}