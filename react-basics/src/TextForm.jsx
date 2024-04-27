import { useState } from "react";

export default function TextForm(props) {

  const [text , UpdateText] = useState("Enter text Here");
  return (
    <div>
      <label>{props.heading}</label>
      <br />
      <textarea style={textArea} onChange={(e)=>{ UpdateText(e.target.value)}} value={text} rows="3"></textarea>
      <br />
      <button style={Button}  onClick={()=>UpdateText(text.toUpperCase())} >Set To Upper</button>
    </div>
  );
}














// cSS
const textArea = {
  width: "90%",
  fontSize: "24px",
};

const Button = {
  background: "orange",
  height: "40px",
  border: "none",
  borderRadius: "8px",
  fontSize: "20px",
  color:"white",
  fontWeight:"bold"
};
