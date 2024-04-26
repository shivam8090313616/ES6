const React = require('react');
const ReactDOMServer = require('react-dom/server');

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item, index) => React.createElement('p', { key: index }, item));

const renderedList = ReactDOMServer.renderToString(myList);
console.log(renderedList);

