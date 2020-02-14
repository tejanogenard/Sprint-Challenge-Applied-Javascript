

// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(Response => {
    console.log(Response.data)
})
.catch(error => {
    console.log("data was lost.", error)
})


function Tab(){
   let newTab = document.createElement('div'),
       topics = document.createElement('div'),
       title = document.createElement('span');



    //    title.textContent = ""
    //    topics.textContent = ""
    //   newTab.textContent = ""

        


}  