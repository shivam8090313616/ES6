const React = require('react');
const ReactDOM = require('react-dom');

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item, index) => React.createElement('p', { key: index }, item));

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
