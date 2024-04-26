const React = require('react');
const ReactDOMServer = require('react-dom/server');

const MyComponent = () => (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const renderedComponent = ReactDOMServer.renderToString(<MyComponent />);
console.log(renderedComponent);
