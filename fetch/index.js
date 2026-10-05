const root = document.getElementById("container");
console.log(root);
const btn = document.getElementById("btn");
console.log(btn);

async function getdata() {
  const serverdata = await fetch("https://fakestoreapi.com/products/1");
  const jsondata = await serverdata.json();
  root.innerHTML = `<h1 style: color : red >${jsondata.title}</h1>`;
}
btn.addEventListener("click", getdata());
