// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios
        .get('https://lambda-times-backend.herokuapp.com/topics')
        .then(response => {
                const topics = document.querySelector('.topics');
                const topicData = response.data.topics;
                // console.log(topico);

                topicData.forEach( parameter => {
                        topics.appendChild(createTab(parameter) );
                        // console.log(parameter);
                })
                // console.log(response);
        })
        .catch(errorrr => {
                console.log('Error: ', errorrr);
        })


//Create Tab function
function createTab(topic){

        //Create Element
        const tab= document.createElement('div');

        //Add class
        tab.classList.add('tab');

        //Add content
        tab.textContent= topic;
        return tab;
}//end function