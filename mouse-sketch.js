

$(document).ready(function(){
	var pixels = 4; //default value for grid

	setup_grid('.sketch-container', pixels); //setup initial grid
	setup_event(3);

	//assigning prompt and event for buttons
	assign_event('input[name=new-sketchpad]', 0);
	assign_event('input[name=new-sketchpad-click]', 1);
	assign_event('input[name=new-sketchpad-random]', 2);
	assign_event('input[name=new-sketchpad-layered]', 3);
	

});

function assign_event(selector, event){
		$(selector).click(function(){
		do{
			//prompt user for new size
			pixels = prompt("What size of sketchpad? (4 = 4x4)");
			
			//if cancel is selected, do nothing and exit setup
			if(pixels === '' || pixels === null)
				return;

		}while(!$.isNumeric(pixels) || (pixels <= 0))
			setup_grid('.sketch-container', pixels);	//setup new grid
			setup_event(event);
	});
}


function setup_event(event_number){
	switch(event_number){
		case 1:
			$('.pixel').click(function(){
				$(this).toggleClass('activate');
			});
			break;
		case 2:
			$('.pixel').mouseover(function(){
				$(this).css('background-color', getRandomColor());
			});
			break;
		case 3:
			$('.pixel').mouseover(function(){
				$(this).css('background-color', get_color_decremented(this));
			});
			break;
		case 0:
		default:
			$('.pixel').mouseover(function(){
				$(this).addClass('activate');
			});
	}

}


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function get_color_decremented(selector){
	//ensure selctor is a jquery obejct
	selector = $(selector); 

	//get current color value
	var current_color = $(selector).css('background-color');

	//caluclate step size from number of steps desired
	var step = 10;
	step = Math.round(255 / step);
	

	//split rgb value into individual values
	var rgbvals = /rgb\((.+),(.+),(.+)\)/i.exec(current_color);
	var rval = parseInt(rgbvals[1]);
	var gval = parseInt(rgbvals[2]);
	var bval = parseInt(rgbvals[3]);
	
	//decrement value
	rval -= step;
	gval -= step;
	bval -= step;

	return 'rgb('+rval+','+gval+','+bval+')';	
}

function rgbToHex(rgb) {
  var rgbvals = /rgb\((.+),(.+),(.+)\)/i.exec(rgb);
  var rval = parseInt(rgbvals[1]);
  var gval = parseInt(rgbvals[2]);
  var bval = parseInt(rgbvals[3]);
  return '#' + ( 
    rval.toString(16) +
    gval.toString(16) +
    bval.toString(16)
  ).toUpperCase();
}
