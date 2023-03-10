window.addEventListener("load", init);
let kepIndex = 0;
function init() {
  const galeria = [
    "kepek/1.jpg",
    "kepek/2.jpg",
    "kepek/3.jpg",
    "kepek/4.jpg",
    "kepek/5.jpg",
  ];
  const ARTICLE = document.querySelector("ARTICLE");
  const SECTION = document.querySelector("SECTION");
  const BAL = document.getElementsByClassName("BAL");
  const JOBB = document.getElementsByClassName("JOBB");
  
  SECTION.innerHTML = `<div><img src="${galeria[0]}" alt=""></div>`;
  for (let index = 0; index < galeria.length; index++) {
    ARTICLE.innerHTML += `<div><img src="${galeria[index]}" alt=""></div>`;
  }
  const KISKEP = document.querySelectorAll("ARTICLE div img");
  for (let index = 0; index < galeria.length; index++) {
    KISKEP[index].addEventListener("click", () => {
      const NAGYKEP = document.querySelectorAll("section img");
      kepIndex == index;
      console.log(NAGYKEP[0])
      NAGYKEP[0].src = `${galeria[index]}`;
      console.log(galeria[index])
      
    });
  }
}

function kiskepKattintas(event) {
  console.log(event.target);
}
