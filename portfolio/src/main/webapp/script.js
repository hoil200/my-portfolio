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

google.charts.load('current', {'packages':['timeline']});
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawCookieChart);
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
    fetch('/dataStore').then(response => response.json()).then((comments) =>{
        const commentContainer = document.getElementById('comments');
        comments.forEach((line)=>{
            commentContainer.appendChild(createCommentElement(line));
        })
    });
}

function createCommentElement(text){
  const commentElement = document.createElement('text');
  commentElement.className = 'commets';

  const showElement = document.createElement('li');
  showElement.innerText = text.text;

  commentElement.appendChild(showElement);

  return commentElement;

}

function drawChart(){
    const container = document.getElementById('chart-container');
    const chart = new google.visualization.Timeline(container);
    const dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'Term' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });

    dataTable.addRows([
      [ '1', 'ACM-W', new Date(2018, 9, 1), new Date(2020, 3, 4) ],
      [ '2', 'Phi Sigma Rho', new Date(2019, 2, 5),  new Date(2020, 3, 4) ]
      ]);

    const options = {
      colors: ['#a30ac9', '#99065c'],
      timeline: { rowLabelStyle: {fontName: 'Lucida Sans Regular', fontSize: 24, color: '#603913' },
                     barLabelStyle: { fontName: 'Lucida Sans Regular', fontSize: 14 } }
    };

    chart.draw(dataTable, options);
  
}

function drawCookieChart(){
    fetch('/cookie-data').then(response => response.json()).then((cookieVotes) =>{
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Cookie');
    data.addColumn('number', 'Votes');
    Object.keys(cookieVotes).forEach((cookie) => {
      data.addRow([cookie, cookieVotes[cookie]]);
    });

    const options = {
      'title': 'Girl Scout Cookies',
      'width':600,
      'height':500
    };

    const chart = new google.visualization.ColumnChart(
        document.getElementById('cookie-container'));
    chart.draw(data, options);
  });
}


