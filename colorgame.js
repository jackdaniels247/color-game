var num= 6;

var color =randomcolors(num);

var squares= document.querySelectorAll(".square");
var message= document.getElementById("message");
var h1= document.querySelector("h1");
var hello= document.querySelector("#reset");
var easy= document.querySelector("#Easy");

var hard= document.querySelector("#Hard");


var pickedcolor=color[Math.floor(Math.random() * num)];

var hi= document.getElementById("hi");
hi.textContent=pickedcolor;

easy.addEventListener("click",function(){
	this.classList.add("select");
	hard.classList.remove("select");
	num=3;
     color =randomcolors(num);
     pickedcolor=color[Math.floor(Math.random() * num)];
     hi.textContent=pickedcolor;
     for(var i=0;i<squares.length;i++)
     {
     	if(color[i])
     	{
     		squares[i].style.background=color[i];
     	}
     	else
     	{
     		squares[i].style.display="none";
     	}
     }
      h1.style.background="steelblue";


});

hard.addEventListener("click",function(){
	this.classList.add("select");
	easy.classList.remove("select");
	num=6;
     color =randomcolors(num);
     pickedcolor=color[Math.floor(Math.random() * num)];
     hi.textContent=pickedcolor;
     for(var i=0;i<squares.length;i++)
     {
     	
     	
     		squares[i].style.background=color[i];
     	
     
     		squares[i].style.display="block";
     	
     }
     h1.style.background="steelblue";

})

hello.addEventListener("click",function(){

   color =randomcolors(num);

   pickedcolor=color[Math.floor(Math.random() * num)];
   this.textContent="New Colors";

   for(var i=0;i<squares.length;i++)
   {
   	squares[i].style.background= color[i];
   }
hi.textContent=pickedcolor;
   h1.style.background="steelblue";
   message.textContent= "";

});

for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=color[i];

	

	squares[i].addEventListener("click",function(){
		var clickedcolor = this.style.background;
		console.log(clickedcolor,pickedcolor)
		if(clickedcolor===pickedcolor)
		{
			message.textContent="Correct!!"
			changecolor(clickedcolor);
			h1.style.background=clickedcolor;
			hello.textContent="Play Again??";

		}
		else
		{
			this.style.background="#232323";
			message.textContent="Try Again!!"

		}
	})
}

function changecolor(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}
}

function randomcolors(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
arr.push(random());
	}
	return arr;
}

function random(){
	var r= Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b= Math.floor(Math.random() * 256);

	return "rgb("+r+", "+g+", "+b+")";
}






