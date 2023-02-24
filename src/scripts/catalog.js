export const catalog = (harvestArray) => {
    let innerHTMLString = ``
    for(let foodItem of harvestArray) {
        innerHTMLString += `<Section class="plant">${foodItem.type}</Section>`
    }
    return innerHTMLString
}