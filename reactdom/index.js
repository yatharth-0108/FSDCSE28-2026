const container = document.getElementById("root");
console.log(container);
const root = ReactDOM.createRoot(container);
const h2 = React.createElement("h2", {}, "Welcome to react");
const h1 = React.createElement(
  "h1",
  { style: { color: "brown", backgroundColor: "white" } },
  "ABES",
);
const image = React.createElement("img", {
  src: "result.png",
  style: { height: "300px", width: "300px" },
});
const divi = React.createElement(
  "div",
  { style: { border: "3px dotted black" } },
  h1,
  h2,
  image,
);

const name = React.createElement("h1", { color: "Blue" }, "Yogendra");
const Skills = React.createElement(
  "h1",
  { color: "blue" },
  "Java ",
  "Python ",
  "html",
);

const div = React.createElement("div", { color: " Blue " }, name, Skills);
// root.render(h2);
// root.render(h1);
const hx = <h2>"Welcome"</h2>;
root.render(hx);
