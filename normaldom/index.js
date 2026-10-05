console.log("hello");

const root = document.getElementById("root");
console.log(root);

const button = document.getElementById("btn");
const heading = document.createElement("h2");

const loader = document.createElement("h1");

async function showdata() {
  try {
    // Show loader
    loader.innerHTML = `<h2>Loading data...</h2>`;
    root.appendChild(loader);

    // Fetch data
    const serverdata = await fetch("https://fakestoreapi.com/products");

    const jsondata = await serverdata.json();

    // Create table
    let table = `
      <table border="1">
        <tr>
          <th>Image</th>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
        </tr>

        ${jsondata
          .map((ele) => {
            return `
            <tr>
              <td>
                <img src="${ele.image}" height="200" width="200">
              </td>

              <td>${ele.id}</td>

              <td>${ele.title}</td>

              <td>$${ele.price}</td>
            </tr>
          `;
          })
          .join("")}

      </table>
    `;

    heading.innerHTML = table;
    root.appendChild(heading);
  } catch (error) {
    console.log(error);
  } finally {
    // Remove loader
    loader.remove();
  }
}

button.addEventListener("click", showdata);
