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

