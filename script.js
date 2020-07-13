color1=document.querySelector(".color1");
color2=document.querySelector(".color2");
body = document.getElementById("body");
currentvalue = document.querySelector(".h3");
function changecolor(){
	body.style.background="linear-gradient(to right, "
	+color1.value+", "+
	color2.value+")";
	currentvalue.textContent = body.style.background+";"

}

color1.addEventListener("input",changecolor);
color2.addEventListener("input",changecolor);