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

//---------------------------------------Styling to make tabs appear when going to the webpage----------------------------------------------------------------
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
  elevatorsRequired.value = elevatorsInput.value

})

floorsInput.addEventListener('input', () => {
  if (residential.checked) {
    const averageOfApartments = Math.ceil(apartmentsInput.value / floorsInput.value) 
    const requiredElevators =  Math.ceil(averageOfApartments / 6)
    const elevatorBanks =  Math.ceil(floorsInput.value / 20)
    finaleElevatorNumber=  Math.ceil(requiredElevators * elevatorBanks)
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
apartmentsInput.addEventListener('input', () => {
  const averageOfApartments = Math.ceil(apartmentsInput.value / floorsInput.value) 
  const requiredElevators =  Math.ceil(averageOfApartments / 6)
  const elevatorBanks =  Math.ceil(floorsInput.value / 20)
  finaleElevatorNumber=  Math.ceil(requiredElevators * elevatorBanks)
  elevatorsRequired.value = finaleElevatorNumber 
})
occupancyInput.addEventListener('input', () => {
  const totalNumberOfOccupants =  Math.ceil(occupancyInput.value * floorsInput.value)
  const  elevatorsNeed =  Math.ceil(totalNumberOfOccupants / 200)
  const elevatorBanks =  Math.ceil(floorsInput.value / 10)
  const totalNumberOfElevators =  Math.ceil(elevatorsNeed *  elevatorBanks + elevatorBanks)
  elevatorsRequired.value = totalNumberOfElevators
})
// -----------------------------------------------------------------Total Cost information for JavaScript -------------------------------------------------------------
const costPerUnit = document.getElementById('costPerUnit')
const installationFee = document.getElementById('installationFee')
const totalCost= document.getElementById('totalCost')
// ---------------------------------------------------------Reflects the cost in the the input field-------------------------------
// MY CALCULATIONS 
standard.addEventListener('click', () => {
  costPerUnit.value = 8000
  const endCost = Math.ceil(elevatorsRequired.value * 8000)
  const  standardFee = Math.ceil(endCost * 0.10)
  const finalPrice = Math.ceil(endCost + standardFee)
   installationFee.value = standardFee
   totalCost.value = finalPrice.toFixed(2)
})
premium.addEventListener('click', () => {
  costPerUnit.value = 12000
  const endCost = Math.ceil(elevatorsRequired.value * 12000)
  const  premiumFee = Math.ceil(endCost *  0.15)
  const finalPrice = Math.ceil(endCost + premiumFee)
   installationFee.value = premiumFee
   totalCost.value = finalPrice.toFixed(2)
})
excelium.addEventListener('click', () => {
  costPerUnit.value = 15000
  const endCost = Math.ceil(elevatorsRequired.value * 15000)
  const  exceliumFee = Math.ceil(endCost * 0.20)
  const finalPrice = Math.ceil(endCost + exceliumFee)
   installationFee.value = exceliumFee
   totalCost.value = finalPrice.toFixed(2)
})

// standard Fee 10%

// Premium Fee 15%
// Execelium Fee  20%
