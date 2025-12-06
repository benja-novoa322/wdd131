const currentyear = document.querySelector("#currentyear");
currentyear.textContent = new Date().getFullYear();

const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = lastModified;

const products = [
    {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
},
    {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
},
    {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
},
    {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
},
    {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
}
];

const selectElement = document.querySelector("#productname");
products.forEach(product => {
    let option = document.createElement("option");
  option.value = product.id;   // el valor será el id
  option.textContent = product.name; // el texto visible será el nombre
    selectElement.appendChild(option);
});
