arrayData = organizationsData();
// const container = document.getElementById("container");
const mainContainer = document.getElementById("mainContainer");
arrayData.forEach((e) => {
  const headerOforg = document.createElement("h1");
  const imageOfOrg = document.createElement("img");
  const container = document.createElement("div");
  container.id = "container";
  imageOfOrg.id = "imges";
  const paragraph = document.createElement("p");
  const buttonOfOrg = document.createElement("button");
  buttonOfOrg.id = "donateBt";
  headerOforg.innerText = e.nameOfOrg;
  imageOfOrg.setAttribute("src", e.imgeofOrg);
  paragraph.innerHTML = e.aboutOrg;
  buttonOfOrg.innerText = "Donate";
  console.log(e);
  mainContainer.appendChild(container);
  container.appendChild(headerOforg);
  container.appendChild(imageOfOrg);
  container.appendChild(paragraph);
  container.appendChild(buttonOfOrg);
});

window.onload = arrayData;
