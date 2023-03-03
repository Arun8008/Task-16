let proverb=[
            "All that glitters is not gold.",
			"A picture is worth a thousand words.",
			"The apple doesn’t fall far from the tree. ",
			"Better safe than sorry.",
			"Blood is thicker than water.",
			"Every cloud has a silver lining.",];
let btn1=document.querySelector("#btn");
let right=document.querySelector(".right");


btn1.addEventListener("click",function(){
	a=Math.floor(Math.random()*proverb.length);
	right.innerHTML=proverb[a];
	right.style.boxShadow="0 0 2px 3px #ccc";
	right.style.padding="30px";
});	


let date=new Date();
document.write(date.toLocaleString());

setTimeout(function(){
   alert("WELCOME TO ALL")},2000);
