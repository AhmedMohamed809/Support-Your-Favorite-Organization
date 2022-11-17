arrayData = organizationsData();
const container = document.getElementById("container");
const headerOforg = document.querySelectorAll("#header-org");
const imageOfOrg = document.getElementById("img-org");
const paragraph = document.getElementById("par-org");
arrayData.forEach((e) => {
  headerOforg.innerText = e.nameOfOrg;
});
for (let i = 0; i < arrayData.length; i++) {
  container.appendChild(headerOforg);
  container.appendChild(imageOfOrg);
  container.appendChild(paragraph);
}
console.log("hi");
