canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

//Create a reference for canvas 

img_width=90
img_height=140
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
img_x=5
img_y=352

function add() {
	bg_tag=new Image();
    bg_tag.onload=uploadBackground;
    bg_tag.src=background_image;

	bg1_tag=new Image();
    bg1_tag.onload=uploadgreencar;
    bg1_tag.src=greencar_image;

	//upload car, and background images on the canvas.
}

function uploadBackground() {
	ctx.drawImage(bg_tag,0,0,canvas.width,canvas.height);
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	ctx.drawImage(bg1_tag,img_x,img_y,img_width,img_height);
	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
  if(img_y > 0){
	img_y = img_y-10
	console.log(img_y)
    uploadBackground()
	uploadgreencar()
  }
	//Define function to move the car upward
}

function down()
{
	if(img_y < 500){
		img_y = img_y+10
		console.log(img_y)
		uploadBackground()
		uploadgreencar()
	  }
	//Define function to move the car downward
}

function left()
{
	if(img_x > 0){
		img_x = img_x-10
		console.log(img_x)
		uploadBackground()
		uploadgreencar()
	  }
	//Define function to move the car left side
}

function right()
{
	if(img_x < 750){
		img_x = img_x+10
		console.log(img_x)
		uploadBackground()
		uploadgreencar()
	  }
	//Define function to move the car right side
}