"use strict"
let like = document.getElementById("like");
let login = document.getElementById('tolog');
let admin = document.getElementById('admin');
let capcha = document.getElementById('capcha');
let create = document.getElementById('create__value');
let addto = document.getElementById('add__value');

function getPosition(){
	let x = 0;
  let y = 0;
  let e = window.event;
	if (e.pageX || e.pageY){
		x = e.pageX;
		y = e.pageY;
	} else if (e.clientX || e.clientY){
		x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	return {x: x, y: y}
}

var count = 0;
var toDelete = 0;
var spawnTime = 0;
let date = new Date();
var liveTime = 0;

function spamming(){
		let date = new Date();
    let time = date.getMilliseconds() + date.getSeconds() * 1000;
		if (liveTime == 0){
			 liveTime = time;
		 }
		if ((time - spawnTime) > 50){
			spawnTime = time;
		  count+=1;
	  	var coord = getPosition();
			let div = document.createElement("div");
			div.id = "Div" + count;
			div.appendChild(document.createTextNode("❤"));
			div.style.position = "absolute";
			div.style.left = coord.x+'px';
			div.style.top = coord.y+'px';
			div.style.content = "❤";
			document.body.appendChild(div);
			if ((time-liveTime) > 300){
				liveTime = time;
				let el = document.getElementById("Div" + toDelete);
				toDelete+=1;
				if (el){
				document.body.removeChild(el);
				}
			}
	}
}

like.addEventListener("click", () => {
  if (like.style.backgroundColor == "azure"){
    like.style.backgroundColor = "rgb(21, 200, 5)";
    like.style.color = "rgb(144, 8, 157)";
    document.body.addEventListener("mousemove",spamming);
  }
  else{
    document.body.removeEventListener("mousemove",spamming);
    like.style.backgroundColor = "azure";
    like.style.color = "rgb(152, 217, 255)";
  }
})

login.addEventListener("click", () => {
  let want = false;
  while (!want) {
    want = confirm("Ты хочешь зайти на сайт?");
    if (want){
      alert("Ты крутой!");
    }
    else{
      alert("Я сказал, ты хочешь зайти на сайт!!!");
  }
}
})

admin.addEventListener("click", () => {
    let login = prompt("Здравствуйте! Введите логин, чтобы зайти в панель админа");
    if (login == "Админ"){
      let password = prompt("Введите пароль");
      if (password == "Я главный"){
        alert("Я вам верю, проходите");
      }
      else{
        alert("Ты не админ!!! Обманщик");
      }
    }
    else if (login == null) {
      alert("ну и не надо");
    }
    else{
      alert("Вы кто такие? Я вас не звал. Уходите");
    }
})

capcha.addEventListener("click", () => {
	 var result = '';
	 var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	 var charactersLength = characters.length;
	 let min = 4;
   let max = 10;
	 for ( var i = 0; i < Math.floor(Math.random() * (max - min + 1) + min); i++ ) {
			 result += characters.charAt(Math.floor(Math.random() * charactersLength));
	 }
	 let answer = prompt(`Докажите, что вы человек, введите это:\n${result}`);
	 if (answer == result){
		 alert("Вы человек, поздравляю");
	 }
	 else if (answer == undefined){
		 alert("Ну и не надо");
	 }
	 else if (answer == ""){
		 alert("Ничего не ввели");
	 }
	 else {
		 let flag = false;
		 while(!flag){
			 let first = Math.ceil(Math.random()*10);
			 let second = Math.ceil(Math.random()*10);
			 answer = prompt(`Дам ещё один шанс. Введите сумму этих чисел:\n${first} + ${second}`);
			 if (answer == (first+second)){
				 alert("Хотя бы с этим вы справились, проходите");
				 flag = true;
			 }
			 else if (answer == ""){
				 alert("Вы ничего не ввели");
			 }
			 else if (answer == undefined){
				 alert("Ну не хотите и не надо");
				 flag = true;
			 }
			 else{
				 alert("Я хочу верить, что вы человек, попробуйте снова");
			 }
	 	}
	 }
})

function Accumulator(startingValue){
	this.value = startingValue;
	this.read = function(newvalue) {
		this.value += newvalue;
	}
	this.print = function() {
		let label = document.getElementById("add__label");
		label.textContent = "Значение объекта равно: " + this.value;
	}
}
var Accum = {};
create.addEventListener("click", () => {
	let value = prompt("Введите число для создания объекта");
	Accum = new Accumulator(parseInt(value));
	create.disabled = true;
	create.style.cursor = "default";
	addto.disabled = false;
	addto.style.cursor = "pointer";
	Accum.print();
})

addto.addEventListener("click", () => {
	let value = prompt("Введите число для добавления значения");
	Accum.read(parseInt(value));
	Accum.print();
})

function truncate(str,maxlength){
	if (str.length > maxlength){
		str = str.slice(0,maxlength) + "...";
		return str;
	}
}
let verylong = document.getElementById('verylongtext');
verylong.textContent = truncate(verylong.textContent,8);
