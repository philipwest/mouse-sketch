function setup_grid(container_selector, pixel_num){
	var pixel_class = 'pixel';
	var pixel_dimension;
	var pixel = '<div class="'+ pixel_class + '"></div>';
	container_selector = $(container_selector);

	container_selector.empty();	//empty grid before beginning

	//Add Pixels to grid
	for(i = 0, total = Math.pow(pixel_num, 2); i < total; i++){
		container_selector.append(pixel);	
	}

	//give dynamic dimensions to pixels
	pixel_dimension = container_selector.width() / pixel_num; 
	$('.'+pixel_class).css('width', pixel_dimension).css('height', pixel_dimension);

}