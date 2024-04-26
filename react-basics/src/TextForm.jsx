export default function TextForm(props) {
  return (
    <div>
      <label>{props.heading}</label><br/>
      <textarea style={textArea} rows="3"></textarea>
    </div>
  )
}

const textArea={
    width:"90%",
    fontSize:"24px"
}