function computeRGB()
{
	var value = $("#valueInput").val();
	value /= 100;
	
	var H = value * 240;
	var S = 1
	var V = 1;
	var C = V * S;
	
	var H2 = H / 60;
	var X = C * (1 - Math.abs(H2 % 2 - 1));
	
	var R, G, B;
	switch(Math.floor(H2))
	{
		case 0 :
		R = C;
		G = X;
		B = 0;
		break;
		case 1 :
		R = X;
		G = C;
		B = 0;
		break;
		case 2 :
		R = 0;
		G = C;
		B = X;
		break;
		case 3 :
		R = 0;
		G = X;
		B = C;
		break;
		case 4 :
		R = X;
		G = 0;
		B = C;
		break;
		case 5 :
		R = C;
		G = 0;
		B = X;
		break;
		default :
		break;
	}
	
	m = V - C;
	R += m;
	R *= 255;
	G += m;
	G *= 255;
	B += m;
	B *= 255;
	
	$("#coloredSquare").css("background-color", "rgb(" + R + "," + G + "," + B + ")");
}

$("#valueInput").keyup(function(event){
    if(event.keyCode == 13){
        $("#button").click();
    }
});