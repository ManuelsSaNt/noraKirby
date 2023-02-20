
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


const modos = {
  hambre: false,
  sueno: false
}

const kirby = document.getElementById("kirbo");

let images = ["chill.gif", "kirbiseantao.gif", "mimido.gif", "cocina.gif"]

let opt = getRandomInt(4);
kirby.src = images[opt];

if (opt === 2){
  modos.sueno = true;
}
if (opt === 3) {
  modos.hambre = true;
}

const btEat = document.getElementById('eat');
const btMimi = document.getElementById("mimirTIme");
const carBtn = document.getElementById('cari');


if (modos.sueno) {
  btMimi.innerHTML = "Despertar!!";
} else {
  btMimi.innerHTML = "Dormir";
}

carBtn.addEventListener('click', () => {
  if (!modos.sueno){
    kirby.src = "carinos.gif"
  } else {
    alert("shhhhhhhhhh esta dormido zzz")
  }

  setTimeout(()=>{
    kirby.src = "kirbiseantao.gif";
  }, 2000)


})

btMimi.addEventListener('click', () => {
  if (modos.sueno) {
    kirby.src = "kirbiseantao.gif";
    btMimi.innerHTML = "Dormir";
    modos.sueno = false;
    modos.hambre = true;
  } else{
    kirby.src = "mimido.gif";
    btMimi.innerHTML = "Despertar!!";
    modos.sueno = true;
    modos.hambre = false;
  }
})

btEat.addEventListener('click', () => {
  if (modos.hambre === true) {
    kirby.src = "comiendo.webp";

    setTimeout(()=> {
      kirby.src = "chill.gif";
    }, 2000)
  }
  else{
    if (modos.sueno){
      alert("Kirby esta dormido...");
    }
  }

})










