const hiThere = document.getElementById('hello')
// <--------------------------------------These lines help you connect your JavaScript code to specific parts of the HTML so you can change or control those parts!---------------->
const residential = document.getElementById('residential')
const commercial = document.getElementById('commercial')
const industrial = document.getElementById('industrial')
const standard = document.getElementById('standard')
const premium = document.getElementById('premium')
const excelium = document.getElementById('excelium')


// ---------------------------------These lines of code:Find specific elements on the webpage using their unique id attributes.Store those elements in variables so they can be easily referenced later in the script.For example, later in the code, you can hide, show, or modify these fields (e.g., setting their value or visibility) based on user input or actions.-------------------------->>
const numberOfApartments = document.getElementById('number-of-apartments')
const numberOfFloors = document.getElementById('number-of-floors')
const numberOfElevators = document.getElementById('number-of-elevators')
const maximumOccupancy = document.getElementById('maximum-occupancy')


const apartmentsInput = document.getElementById('apartments-input')
const floorsInput = document.getElementById('floors-input')
const elevatorsInput = document.getElementById('elevators-input')
const occupancyInput = document. getElementById('occupancy-input')

//---------------------------------------Styling to make tabs appear when going to the webpageAll these lines hide their corresponding fields on the webpage by setting their display to 'none'. This means:The fields for number of apartments, number of floors, number of elevators, and maximum occupancy will be invisible, and they won't take up any space on the page.Purpose: It could be used in a scenario where certain fields are irrelevant based on the user's choice (like when switching between residential and commercial options).This helps control what users see, simplifying the interface based on their selections---------------------------------------------------------------->>>>
 numberOfApartments.style.display = 'none'
 numberOfFloors.style.display = 'none'
 numberOfElevators.style.display = 'none'
 maximumOccupancy.style.display = 'none'

//  --------------------------------------These JavaScript tags are for making tabs appear and disappear  When the residential option is clicked, the function:Shows the fields for number of apartments and number of floors (since these are important for residential buildings).Hides the fields for number of elevators and maximum occupancy (since they are not immediately needed for residential buildings).This ensures the user sees only the relevant input fields for residential buildings.----------------------------------------->>>>>.
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

// <-----------------------------Summary:When you input the number of floors, the code checks if it's a residential building.It calculates how many elevators are needed based on the number of apartments per floor and how many floors there are.The result is displayed by updating the elevatorsRequired field with the final number of elevators.---------------------------->
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

// -------------------------------------------Summary:When you enter the number of apartments, the code calculates:How many apartments are on each floor.How many elevators are needed based on that number.How many elevator banks are required for the total number of floors.It multiplies everything to get the final number of elevators and displays that result.In short: It figures out how many elevators the building needs and updates the result when the number of apartments changes.------------------------------------------------------>>>>
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
// <<<-----------------------------------------------------------------Total Cost information for JavaScript These three lines of code connect your JavaScript to specific parts of an HTML page. Each variable (costPerUnit, installationFee, and totalCost) stores a reference to an input or display field on the webpage. This allows the JavaScript code to get, update, or display values in those specific fields.------------------------------------------------------------->>>
const costPerUnit = document.getElementById('costPerUnit')
const installationFee = document.getElementById('installationFee')
const totalCost= document.getElementById('totalCost')
// ---------------------------------------------------------Reflects the cost in the the input field   These three lines of code connect your JavaScript to specific parts of an HTML page. Each variable (costPerUnit, installationFee, and totalCost) stores a reference to an input or display field on the webpage. This allows the JavaScript code to get, update, or display values in those specific fields.-------------------------------

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


