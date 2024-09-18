const hiThere = document.getElementById('hello')
const residential = document.getElementById('residential')
const commercial = document.getElementById('commercial')
const industrial = document.getElementById('industrial')
const standard = document.getElementById('standard')
const premium = document.getElementById('premium')
const excelium = document.getElementById('excelium')
const numberOfApartments = document.getElementById('number-of-apartments')
const numberOfFloors = document.getElementById('number-of-floors')
const numberOfElevators = document.getElementById('number-of-elevators')
const maximumOccupancy = document.getElementById('maximum-occupancy')


const apartmentsInput = document.getElementById('apartments-input')
const floorsInput = document.getElementById('floors-input')
const elevatorsInput = document.getElementById('elevators-input')
const occupancyInput = document. getElementById('occupancy-input')

//---------------------------------------Added Event listeners----------------------------------------------------------------
 numberOfApartments.style.display = 'none'
 numberOfFloors.style.display = 'none'
 numberOfElevators.style.display = 'none'
 maximumOccupancy.style.display = 'none'

//  --------------------------------------These JavaScript tags are for making tabs appear and disappear-----------------------
 residential.addEventListener('click', () => {
    numberOfApartments.style.display = 'block'
    numberOfFloors.style.display = 'block'
    numberOfElevators.style.display = 'none'
    maximumOccupancy.style.display = 'none'
  })
  commercial.addEventListener('click', () => {
    numberOfFloors.style.display = 'block'
    maximumOccupancy.style.display = 'block'
     numberOfApartments.style.display = 'none'
      numberOfElevators.style.display = 'none'
  })
  industrial.addEventListener('click', () => {
    numberOfElevators.style.display = 'block'
     numberOfApartments.style.display = 'none'
     numberOfFloors.style.display = 'none'
     maximumOccupancy.style.display = 'none'
  })
// -------------------------The JavaScript Below is event listener attached to input field math to get it to respond properly----------------------------
const elevatorsRequired = document.getElementById('elevatorsRequired')
elevatorsInput.addEventListener('input', () => {
  console.log(elevatorsInput.value)
  elevatorsRequired.value = elevatorsInput.value
})
apartmentsInput.addEventListener('input', () => {
  console.log(apartmentsInput.value)
  console.log(floorsInput.value)
  const averageOfApartments = apartmentsInput.value / floorsInput.value 
  console.log(averageOfApartments)
  const requiredElevators = averageOfApartments / 6 
  console.log(requiredElevators)
  const elevatorBanks = floorsInput.value / 20
  console.log(elevatorBanks)
  finaleElevatorNumber= requiredElevators * elevatorBanks
  console.log(finaleElevatorNumber)
  elevatorsRequired.value = finaleElevatorNumber 
})
occupancyInput.addEventListener('input', () => {
  console.log(occupancyInput.value)
  console.log(floorsInput.value)
  const totalNumberOfOccupants = occupancyInput.value * floorsInput.value
  console.log(totalNumberOfOccupants)
  const  elevatorsNeed = totalNumberOfOccupants / 200
  console.log(elevatorsNeed)
  const elevatorBanks = floorsInput.value / 10
  console.log(elevatorBanks)
  const totalNumberOfElevators = elevatorsNeed *  elevatorBanks + elevatorBanks
  console.log(totalNumberOfElevators)
  elevatorsRequired.value = totalNumberOfElevators
})
// -----------------------------------------------------------------Total Cost information for JavaScript -------------------------------------------------------------
const costPerUnit = document.getElementById('costPerUnit')
const installationFee = document.getElementById('installationFee')
const totalCost= document.getElementById('totalCost')
// ---------------------------------------------------------Reflects the cost in the the input field-------------------------------
standard.addEventListener('click', () => {
  costPerUnit.value = 8000
  const endCost = elevatorsRequired.value * 8000
  console.log(endCost)
  const  standardFee = endCost * 0.10
  console.log(standardFee)
  const finalPrice = endCost + standardFee
  console.log(finalPrice)
   installationFee.value = standardFee
   totalCost.value = finalPrice
})
premium.addEventListener('click', () => {
  costPerUnit.value = 12000
  const endCost = elevatorsRequired.value * 12000
  console.log(endCost)
  const  premiumFee = endCost *  0.012
  console.log(premiumFee)
  const finalPrice = endCost + premiumFee
  console.log(finalPrice)
   installationFee.value = premiumFee
   totalCost.value = finalPrice
})
excelium.addEventListener('click', () => {
  costPerUnit.value = 15000
  const endCost = elevatorsRequired.value * 15000
  console.log(endCost)
  const  exceliumFee = endCost * 0.015
  console.log(exceliumFee)
  const finalPrice = endCost + exceliumFee
  console.log(finalPrice)
   installationFee.value = exceliumFee
   totalCost.value = finalPrice
})

// standard Fee 10%

// Premium Fee 15%
// Execelium Fee  20%
