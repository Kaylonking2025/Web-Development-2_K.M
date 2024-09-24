const hiThere = document.getElementById('hello')
// Variable for Building Type and Product Tier used to create Radio Button
const residential = document.getElementById('residential')
const commercial = document.getElementById('commercial')
const industrial = document.getElementById('industrial')
const standard = document.getElementById('standard')
const premium = document.getElementById('premium')
const excelium = document.getElementById('excelium')


// Store those elements in variables so they can be easily referenced later in the code.

const numberOfApartments = document.getElementById('number-of-apartments')
const numberOfFloors = document.getElementById('number-of-floors')
const numberOfElevators = document.getElementById('number-of-elevators')
const maximumOccupancy = document.getElementById('maximum-occupancy')


const apartmentsInput = document.getElementById('apartments-input')
const floorsInput = document.getElementById('floors-input')
const elevatorsInput = document.getElementById('elevators-input')
const occupancyInput = document. getElementById('occupancy-input')

// All these lines hide their corresponding fields on the webpage by setting their display to 'none'

 numberOfApartments.style.display = 'none'
 numberOfFloors.style.display = 'none'
 numberOfElevators.style.display = 'none'
 maximumOccupancy.style.display = 'none'

//Event Listeners below hides and shows fields
// Residential
 residential.addEventListener('click', () => {
    numberOfApartments.style.display = 'block'
    numberOfFloors.style.display = 'block'
    numberOfElevators.style.display = 'none'
    maximumOccupancy.style.display = 'none'
    floorsInput.value = 0
    elevatorsInput.value = 0
    occupancyInput.value = 0 
    apartmentsInput.value = 0
  })
  // Commercial
  commercial.addEventListener('click', () => {
    numberOfFloors.style.display = 'block'
    maximumOccupancy.style.display = 'block'
    numberOfApartments.style.display = 'none'
    numberOfElevators.style.display = 'none' 
    elevatorsInput.value = 0
    occupancyInput.value = 0 
    apartmentsInput.value = 0
    floorsInput.value = 0
  })
  // Industrial 
  industrial.addEventListener('click', () => {
    numberOfElevators.style.display = 'block'
     numberOfApartments.style.display = 'none'
     numberOfFloors.style.display = 'none'
     maximumOccupancy.style.display = 'none'
     occupancyInput.value = 0 
     floorsInput.value = 0
     apartmentsInput.value = 0
     elevatorsInput.value = 0
  })
// Elevators Required Field calculates how many elevators are required.
const elevatorsRequired = document.getElementById('elevatorsRequired')
elevatorsInput.addEventListener('input', () => {
  elevatorsRequired.value = elevatorsInput.value
})

// Residential Event Listner helps calculates the finale number of elevators & if statement
floorsInput.addEventListener('input', () => {
  if (residential.checked) {
    const averageOfApartments = Math.ceil(apartmentsInput.value / floorsInput.value) 
    const requiredElevators =  Math.ceil(averageOfApartments / 6)
    const elevatorBanks =  Math.ceil(floorsInput.value / 20)
    finaleElevatorNumber =  Math.ceil(requiredElevators * elevatorBanks)
    elevatorsRequired.value = finaleElevatorNumber 
  }
  if (commercial.checked) { 
    const totalNumberOfOccupants =  Math.ceil(occupancyInput.value * floorsInput.value)
    const  elevatorsNeed =  Math.ceil(totalNumberOfOccupants / 200)
    const elevatorBanks =  Math.ceil(floorsInput.value / 10)
    const totalNumberOfElevators =  Math.ceil(elevatorsNeed *  elevatorBanks + elevatorBanks)
    elevatorsRequired.value = totalNumberOfElevators
  }
})

//Residential Event Listner helps calculates the finale number of elevators
apartmentsInput.addEventListener('input', () => {
  const averageOfApartments = Math.ceil(apartmentsInput.value / floorsInput.value) 
  const requiredElevators =  Math.ceil(averageOfApartments / 6)
  const elevatorBanks =  Math.ceil(floorsInput.value / 20)
  finaleElevatorNumber =  Math.ceil(requiredElevators * elevatorBanks)
  elevatorsRequired.value = finaleElevatorNumber 
})
occupancyInput.addEventListener('input', () => {
  const totalNumberOfOccupants =  Math.ceil(occupancyInput.value * floorsInput.value)
  const  elevatorsNeed =  Math.ceil(totalNumberOfOccupants / 200)
  const elevatorBanks =  Math.ceil(floorsInput.value / 10)
  const totalNumberOfElevators =  Math.ceil(elevatorsNeed *  elevatorBanks + elevatorBanks)
  elevatorsRequired.value = totalNumberOfElevators
})
// Input fields on the webpage 
const costPerUnit = document.getElementById('costPerUnit')
const installationFee = document.getElementById('installationFee')
const totalCost = document.getElementById('totalCost')

// Standard Caculates Total Cost and rounds it to nearest whole number
standard.addEventListener('click', () => {
  costPerUnit.value = 8000
  const endCost = Math.ceil(elevatorsRequired.value * 8000)
  const  standardFee = Math.ceil(endCost * 0.10)
  const finalPrice = Math.ceil(endCost + standardFee)
   installationFee.value = standardFee
   totalCost.value = finalPrice.toFixed(2)
})
// Premium calculates Total Cost and rounds it to the nearest whole number
premium.addEventListener('click', () => {
  costPerUnit.value = 12000
  const endCost = Math.ceil(elevatorsRequired.value * 12000)
  const  premiumFee = Math.ceil(endCost *  0.15)
  const finalPrice = Math.ceil(endCost + premiumFee)
   installationFee.value = premiumFee
   totalCost.value = finalPrice.toFixed(2)
})

// Excelium calculates Total Cost and rounds it to the nearest whole number 
excelium.addEventListener('click', () => {
  costPerUnit.value = 15000
  const endCost = Math.ceil(elevatorsRequired.value * 15000)
  const  exceliumFee = Math.ceil(endCost * 0.20)
  const finalPrice = Math.ceil(endCost + exceliumFee)
   installationFee.value = exceliumFee
   totalCost.value = finalPrice.toFixed(2)
})


