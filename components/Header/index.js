// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function createHeader() {
    //Create new elements 
 
    let headerContainer = document.createElement('div')
    let date = document.createElement('span')
    let title = document.createElement('h1')
    let temperature = document.createElement('span')

    //Class Names
    headerContainer = classList.add('header-container')

    //Set up the structure of our elements 
    headerContainer.append(date)
    headerContainer.append(title)
    headerContainer.append(temperature)

    date.textContent = "March 28, 2019"
    title.textContent = "Lambda Times"
    temperature.textContent = "temp, 98 °"



    return headerContainer
}


