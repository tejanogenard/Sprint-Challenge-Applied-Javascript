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

function createHeader(obj) {
    //Create new elements 
 
    let headerContainer = document.createElement('div')
    let date = document.createElement('span')
    let title = document.createElement('h1')
    let temperature = document.createElement('span')


     //Set up the structure of our elements 
     headerContainer.appendChild(date)
     headerContainer.appendChild(title)
     headerContainer.appendChild(temperature)
 

    //Class Names
    headerContainer = classList.add('header')

   //Text Content
    date.textContent = obj.date
    title.textContent = obj.title
    temperature.textContent = obj.temperature


    return headerContainer
}

//Append to document

 let container = document.querySelector('.header-container')
    container.appendChild(createHeader())


// container.appendChild(header)

// console.log(container)




