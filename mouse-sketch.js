

$(document).ready(function(){

//	var pixels = prompt("How many squares for your Mouse Sketchpad?");
	var pixels = 4;

	setup_grid($('.sketch-container'), pixels);
//	setup-hover();

	$('input[name=new-sketchpad]').click(function(){
		do{
			pixels = prompt("what size of sketchpad? (4 = 4x4)");
		}while(!$.isNumeric(pixels) || (pixels <= 0) )

		$('.sketch-container').empty();
		setup_grid($('.sketch-container'), pixels);
	})

});

function setup_grid(container, pixel_num){
	var pixel = '<div></div>';
	var pixel_dimension = container.width() / pixel_num; 


	//Add Pixels to grid
	for(i = 0, total = Math.pow(pixel_num, 2); i < total; i++){
		container.append(pixel);	
	}

	//apply class and dynamic dimensions to pixels
	container.children().addClass('pixel');
	$('.pixel').css('width', pixel_dimension).css('height', pixel_dimension);

	//apply class on hover
	$('.pixel').mouseover(function(){
		$(this).addClass('activate');
	//	$(this).css('background-color', getRandomColor());

	})
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}