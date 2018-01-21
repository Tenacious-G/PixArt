// 1. Define your variables
// 2. Add event listeners
// 3. Set the size of the cross stitch canvas as an N by M grid with the makeGrid() function.

// Define your variables by selecting the DOM elements that the user will interact with. This is where your jQuery skills can come into play! For instance, the submit button, the table, and the color picker need to be accessed. The value of the color selected needs to be stored as well, since the clicked cell in the table needs to be set to the selected color.
//tip: if you set a variable with JQuery in the beginning, var table = $('#pixel_canvas'); it is less expensive to use it later. So instead of calling JQuery again here $('#pixel_canvas').on('click', 'td', function() , you should use table.on('click','td',function() https://fewd-challenge.slack.com/archives/C7UAG58FK/p1516315168000397


$( document ).ready(function() {

	const sizePicker = $('#sizePicker');
	const table = $('#pixel_canvas');
	const colorPicker = $('#colorPicker');
	//var colorSelected = $("input[type='color']").val(); //moved this into the function as it was 'only' picking up the initial (on page load) value of the colour picker

	// Select color input
	//table is the element that we want to change, not Colour Picker
	/**
	*@description 	//use event listener - when OK is clicked, use the chosen colour
	*@param			//on click, table data (individual cell)
	*@returns		//fill the cell with the selected colour
	*/

	$(table.on('click', "td", function(){
		//store the chosen colour, need this to fill the clicked cell	
		let colorSelected = $("input[type='color']").val();
		//fill the cell with the selected colour
		$(this).attr("bgColor", colorSelected);
	}));

	//create a new grid when the "Submit" button is clicked
	$(sizePicker.on('submit', function(evt){
		//prevent the default action (the form being submitted) from taking place
		 evt.preventDefault();
		 makeGrid()
	}));

	/**
	*@description 	//use input values to create a blank grid
	*@param			//parameters declared inside function
	*@returns		//creates a blank grid
	*/
	function makeGrid() {
	   let inputWidth = $("#input_width").val();
	   let inputHeight = $("#input_height").val();  

	   //clear existing table 
		table.children().remove();
		
		//create table with nested FOR loops
		for (let row=0; row < inputHeight; row++)
		{table.append("<tr></tr>");
			  for (let col=0; col < inputWidth; col++)
			  {table.children().last().append("<td></td>");}
		}
		//no need for "display table" code here
	};
});	