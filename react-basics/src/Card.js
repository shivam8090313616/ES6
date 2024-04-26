export default function Card(props) {
  return (
    <div style={cardStyle}>
      <div style={cardHeaderStyle}>
        This Is Card header height= {props.Hheight} and width = {props.Hwidth}
        <p>This is card header</p>
      </div>
      <div style={cardBodyStyle}>
        This Is Card body height= {props.Bheight} and width = {props.Bwidth}
        <p> This is card Body</p>
      </div>
    </div>
  );
}

const cardHeaderStyle = {
  backgroundColor: "lightblue",
  height: "180px",
  width: "100%",
  borderRadius: "5px",
  marginBottom: "5px",
};

const cardBodyStyle = {
  backgroundColor: "lightgreen",
  height: "520px",
  width: "100%",
  borderRadius: "5px",
  backgroundImage:
    "url('https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png')",
  backgroudSize: "cover",
  color: "white",
};

const cardStyle = {
  backgroundColor: "gray",
  height: "710px",
  width: "100%px",
  border: "1px solid gray",
  borderRadius: "5px",
  padding: "5px",
  marginTop: "3%",
};
