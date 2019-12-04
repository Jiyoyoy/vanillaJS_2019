/*
alert('Hello World! lolol');
*/

/*
console.log('Hello World! lolol');
*/

/*
a = 4;
b = 300 - a;
console.log(b);
*/

/*
CREATE/
INITIALIZE/
USE/
*/

/* let a = 4;
let b = 300 - a;
a = 5
console.log(b, a);*/


/*
let a = 4;
const b = 6;
console.log(a, b);


/* string
const what = "miaaaaa";
*/
/* boolean
const wat = true;
*/
/* number
const wat = 666;
*/
 /*
 float
 const wat = 55.1;
*/

/* //ARRAY
const daysOFweek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(daysOFweek[1])
*/

/* //OBJECT
const JiYoInfo = {
  name : "JiYo",
  age : "26",
  gender : "female",
  city : "Seoul",
  favMovie : [
    {
      name : "Wild",
    fun : true
    },
    {
    name : "Pan's Labyrinth",
    fun : false
    }
    ]
}

console. log(JiYoInfo.favMovie[1].fun)
*/

/* //FUNCTION
function SayHello(name, food, what){
  console.log("Hello! I'm", name, "I like", food, "I'm ", what)
}

SayHello("JiYo", "apple", "cool as hell")
*/

/*
function SayHello(name, food, what){
  console.log(`Hello! I'm ${name}. I fancy ${food}. I'm ${what}`)
}

SayHello("JiYo", "apple", "smart as hell")
const greetings = SayHello("JiYo", "apple", "cool as hell")
console. log(greetings)
*/

/*
function SayHello(name, food, what){
  return(`Hello! I'm ${name}. I fancy ${food}. I'm ${what}`)
}
const greetings = SayHello("JiYo", "apple", "cool as hell")
console. log(greetings)
*/

//          20190928

/*
const cal= {
  plus: function(a, b){
    return a + b;
  },
  minus: function(a, b){
    return a - b;
  },
  multiply: function(a, b){
    return a * b;
  },
  square: function(a, b){
    return a ** b;
  },
  divide: function(a, b){
    return a / b;
  },

}

const calPlus= cal.plus(5,7);
const calMinus= cal.minus(5,7);
const calMul= cal.multiply(5,7);
const calSqr= cal.square(5,7);
const calDiv= cal.divide(5,7);

console. log (calPlus, calMinus, calMul, calSqr, calDiv)
*/

/*
const age = prompt("How old are you");
if (age >= 15 && age <= 19){
  console.log ("you can drink but you shouldnt");
} else if   (age > 19){
  console.log ("you can drink");
}
else{
    console.log ("you cant");
  }
  */
/*
 console.dir (document)
const Title = document.getElementById("Title")

 const Title = document.querySelector("#Title")

 document.title= "Hi from JS!"
 Title.innerHTML = "Heloo from JS"

const BASECOLOR = "rgb(116, 185, 255)";
const OTHERCOLOR = "rgb(255, 118, 117)";

function handleClick(){
  const currentColor = Title.style.color;
  if (currentColor === BASECOLOR){
  Title.style.color = OTHERCOLOR;
  } else {
  Title.style.color = BASECOLOR;
  }
}


function init(){
  Title.style.color = BASECOLOR;
  Title.addEventListener("click",handleClick);

}
init();
*/

/*
function handleOnline(){
console.log ("welcome back!")
}
function handleOffline(){
  console.log ("Bye!")
  }

window.addEventListener("online",handleOnline);
window.addEventListener("offline",handleOffline);
*/

/* 20190928
console.dir (document)
const Title = document.querySelector("#Title");

const CLICKED_CLASS = "clicked";


function handleClick(){
  const currentClass = Title.className;
  if( currentClass !== CLICKED_CLASS) {
    Title.className = CLICKED_CLASS;
  } else{
    Title.className =  "" ;
  }
}

function init(){
  Title.addEventListener("click",handleClick);
}

init();
*/


//20190929
console.dir (document)
const Title = document.querySelector("#Title");

const CLICKED_CLASS = "clicked";

          /*
          function handleClick(){
            const hasClass = Title.classList.contains(CLICKED_CLASS)
            if(hasClass) {
              Title.classList.remove(CLICKED_CLASS);
            } else{
              Title.classList.add(CLICKED_CLASS);
            }
          }
          */

function handleClick(){
  const hasClass = Title.classList.toggle(CLICKED_CLASS)
}

function init(){
  Title.addEventListener("click",handleClick);
}

init();
