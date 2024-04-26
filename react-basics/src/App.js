import './App.css';
import User from './User';
import Heading from './Heading';
import Paragraph from './Paragraph';
import List from './List';
import Hooks from './Hooks';
import BasicExample  from './BasicExample';
import Card from './Card';
import TextForm from './TextForm';
function App() {
  return (
    <div className="App">
      <h1>JSX 1</h1> 
      <User/>
      <Heading/>
      <TextForm heading="Enter Your Message : "/>
      <Paragraph/> 
      <List/> 
      <Hooks/>
      <BasicExample h="Home" c="Contact Us" a="about Us" g="gallery"/>
      <Card Hheight="180px" Bheight="320px" Bwidth="300px" Hwidth="300px" />
    </div>  
  );
}

export default App;
