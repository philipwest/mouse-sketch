

$(document).ready(function(){
	var pixels = 4; //default value for grid

	setup_grid('.sketch-container', pixels); //setup initial grid
	setup_hover();

	//assigning prompt for button
	$('input[name=new-sketchpad]').click(function(){
		do{
			//prompt user for new size
			pixels = prompt("What size of sketchpad? (4 = 4x4)");
		}while(!$.isNumeric(pixels) || (pixels <= 0))
			setup_grid('.sketch-container', pixels);	//setup new grid
			//setup_hover();
			setup_event('default');
	});

	//assigning prompt for button
	$('input[name=new-sketchpad-random]').click(function(){
		do{
			//prompt user for new size
			pixels = prompt("What size of sketchpad? (4 = 4x4)");
		}while(!$.isNumeric(pixels) || (pixels <= 0))
			setup_grid('.sketch-container', pixels);	//setup new grid
			//setup_hover();
			setup_event(2);
	});

	//assigning prompt for button
	$('input[name=new-sketchpad-click]').click(function(){
		do{
			//prompt user for new size
			pixels = prompt("What size of sketchpad? (4 = 4x4)");
		}while(!$.isNumeric(pixels) || (pixels <= 0))
			setup_grid('.sketch-container', pixels);	//setup new grid
			//setup_hover();
			setup_event(1);
	});
});


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setup_hover(){
	//apply class on hover
	$('.pixel').mouseover(function(){
		$(this).addClass('activate');
	//	$(this).css('background-color', getRandomColor());

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
		default:
			$('.pixel').mouseover(function(){
				$(this).addClass('activate');
			});

	}

}