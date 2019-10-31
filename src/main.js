import React from 'react';
import ReactDOM from 'react-dom';

let obj = {
  blip: {
    prop: {
      nested: 'reall'
    },
    other: 'hey'
  },
  stuff: 'yeah'
}

// let obj = {
//   thisIsAnother: {
//     objectWithNested: 'properties',
//     other: 'hey'
//   },
//   stuff: {
//     exceptThereIs: {
//       moreNesting: {
//         inThisSecondObject: 'Your code should work either way :)'
//       }
//     }
//   }
// }

ReactDOM.render(
  <div id="app">
      <h1>Toucan Object explorer</h1>
      <h2>Test by ...</h2>
      <pre>{JSON.stringify(obj, null, 2)}</pre>
  </div>,
  document.getElementById('app')
);
