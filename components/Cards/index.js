// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios
        .get('https://lambda-times-backend.herokuapp.com/articles')
        .then(res => {
                const cardCont= document.querySelector('.cards-container');
              
                //JS articles
                const topics = res.data.articles.javascript;
                // console.log(topics);
                for( let i= 0; i < topics.length; i++){
                        let curTopic= topics[i]
                        cardCont.appendChild( createCard(curTopic) );
                        // console.log(topics[i]);
                }//end for

                //bootstrap articles
                const topics1 = res.data.articles.bootstrap;
                // console.log(topics1);
                for( let i= 0; i < topics1.length; i++){
                        let curTopic= topics1[i]
                        cardCont.appendChild( createCard(curTopic) );
                        // console.log(topics1[i]);
                }//end for

                //Tech articles
                const topics2 = res.data.articles.technology;
                // console.log(topics);
                for( let i= 0; i < topics2.length; i++){
                        let curTopic= topics2[i]
                        cardCont.appendChild( createCard(curTopic) );
                        // console.log(topics2[i]);
                }//end for

                //jquery articles
                const topics3 = res.data.articles.jquery;
                // console.log(topics3);
                for( let i= 0; i < topics3.length; i++){
                        let curTopic= topics3[i]
                        cardCont.appendChild( createCard(curTopic) );
                        // console.log(topics3[i]);
                }//end for

                //node articles
                const topics4 = res.data.articles.node;
                // console.log(topics4);
                for( let i= 0; i < topics4.length; i++){
                        let curTopic= topics4[i]
                        cardCont.appendChild( createCard(curTopic) );
                        // console.log(topics4[i]);
                }//end for
                       
        })
        .catch(err => {
                console.log('Error: ', err);
        })


function createCard(info){

        //create elements
        const card= document.createElement('div');
        const headLine= document.createElement('div');
        const author= document.createElement('div');
        const imgCont= document.createElement('div');     
        const img= document.createElement('img');     
        const authorName= document.createElement('span');   

        // classes added
        card.classList.add('card');
        headLine.classList.add('headline');
        author.classList.add('author');
        imgCont.classList.add('img-container');

        //data added
        headLine.textContent= info.headline;
        img.src= info.authorPhoto;
        authorName.textContent= `By ${info.authorName}`;

        //structure
        card.appendChild(headLine);
        card.appendChild(author);
        author.appendChild(imgCont);
        imgCont.appendChild(img);
        card.appendChild(authorName);

        return card;
}//end func