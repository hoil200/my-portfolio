// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['My favorite color is purple ', 'I am 20 years old', 'Hakuna Matata', 'That was totatally wicked'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function loadComments(){
    /*console.log('Getting data');
    const responsePromise = fetch('/data');
    responsePromise.then(handleResponse);*/

    fetch('/dataStore').then(response => response.json()).then((shows) =>{
        //console.log('test');
        const comments = document.getElementById('comments');
        //comments.inntertext = shows;
        shows.forEach((text)=>{
            comments.appendChild(createCommentElement(text));
        })
    });
}

function createCommentElement(text){
  const commentElement = document.createElement('text');
  commentElement.className = 'shows';
  const showElement = document.createElement('span');
  showElement.innerText = text.comments

  commentElement.appendChild(showElement);

  return commentElement;

}


/*function handleResponse(response){
    console.log('Handling the response');
    const textPromise = response.text();
    textPromise.then(addQuoteToDom);
}

function addQuoteToDom(shows){
    console.log('Adding quote to the dom:' + shows);
    const showContainer = document.getElementById('show-container');
    showContainer.innerText = shows;
}*/
