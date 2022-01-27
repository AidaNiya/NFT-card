const body = document.querySelector("body");
body.style.margin = "0";
body.style.backgroundColor = "hsl(217, 54%, 11%)";
body.style.fontSize = "18px";

//Общий div
const wrapper = document.createElement("div");
document.body.appendChild(wrapper);
wrapper.style.margin = "0 auto";
wrapper.style.maxWidth = "1440px";
wrapper.style.marginTop = "100px";
wrapper.style.justifyContent = "center";

//Обертка
const innerWrapper = document.createElement("div");
wrapper.appendChild(innerWrapper);
innerWrapper.style.width = "400px";
innerWrapper.style.backgroundColor = "hsl(216, 50%, 16%)";
innerWrapper.style.marginLeft = "520px";
innerWrapper.style.borderRadius = "20px";
innerWrapper.style.padding = "20px 20px 20px";

//Главное фото
const imgCard = document.createElement("img");
innerWrapper.appendChild(imgCard).src = "/images/image-equilibrium.jpg";
imgCard.style.width = "90%";
imgCard.style.paddingLeft = "20px";
imgCard.style.paddingTop = "20px";
imgCard.style.alignItems = "center";
imgCard.style.marginRight = "auto";
imgCard.style.marginBottom = "20px";

//Заголовок
const title = document.createElement("h1");
title.innerText = "Equilibrium #3429 ";
innerWrapper.appendChild(title);
title.style.color = "white";
title.style.margin = "0";
title.style.marginLeft = "20px";

//Параграф с описанием
const paragraph = document.createElement("p");
paragraph.innerText = "Our Equilibrium collection promotes balance and calm.";
innerWrapper.appendChild(paragraph);
paragraph.style.color = "hsl(215, 51%, 70%)";
paragraph.style.maxWidth = "90%";
paragraph.style.marginLeft = "20px";

//Div
const sum = document.createElement("div");
innerWrapper.appendChild(sum);
sum.style.display = "flex";
sum.style.justifyContent = "space-between";

//Div для эфириума
const current = document.createElement("div");
sum.appendChild(current);
sum.style.marginLeft = "20px";

const imgIcon = document.createElement("img");
current.appendChild(imgIcon).src = "/images/icon-ethereum.svg";
imgIcon.style.marginRight = "20px";

const subparagraph = document.createElement("p");
subparagraph.innerText = " 0.041 ETH";
current.appendChild(subparagraph);
subparagraph.style.color = "hsl(178, 100%, 50%)";
subparagraph.style.display = "inline-block";

//Div для отсчета времени
const counter = document.createElement("div");
sum.appendChild(counter);
counter.style.display = "flex";
counter.style.alignItems = "center";

const imgIcon2 = document.createElement("img");
counter.appendChild(imgIcon2).src = "/images/icon-clock.svg";
imgIcon2.style.marginRight = "10px";

const subparagraph2 = document.createElement("p");
subparagraph2.innerText = "3 days left";
counter.appendChild(subparagraph2);
subparagraph2.style.color = "hsl(215, 51%, 70%)";
subparagraph2.style.paddingRight = "20px";

//Раделительная линия
const line = document.createElement("hr");
innerWrapper.appendChild(line);
line.style.borderColor = "hsl(215, 32%, 27%)";

//Сведения об авторе
const userImage = document.createElement("img");
innerWrapper.appendChild(userImage).src = "/images/image-avatar.png";
userImage.style.maxWidth = "50px";
userImage.style.borderRadius = "200px";
userImage.style.border = "4px solid white";
userImage.style.marginLeft = "20px";
userImage.style.marginRight = "20px";

const firstPart = document.createElement("span");
firstPart.innerText = "Creation of ";
innerWrapper.appendChild(firstPart);
firstPart.style.color = "hsl(215, 51%, 70%)";

const secondPart = document.createElement("span");
secondPart.innerText = " Jules Wyvern";
innerWrapper.appendChild(secondPart);
secondPart.style.color = "white";
secondPart.style.paddingLeft = "5px";
