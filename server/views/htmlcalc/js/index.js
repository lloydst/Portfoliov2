// Get all the keys from index.html
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Get the screen and button values
		var screen = document.querySelector('.screen');
		var inputVal = screen.innerHTML;
		var buttonVal = this.innerHTML;
		
		// If clear key is pressed, clear screen
		if(buttonVal == 'C') {
			screen.innerHTML = '';
			// If = key is pressed, calculate and display the result
		} else if(buttonVal == '=') { 
            
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			//  x with '*' and ÷ with '/' so js can actually do calculations g comes from regexp (makes it happen everywhere)
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
			if(operators.indexOf(lastChar) > -1 || lastChar == '.') {
				equation = equation.replace(/.$/, '');
            }
			if(equation) {
                screen.innerHTML = eval(equation);
            }
				
			
		} else if(operators.indexOf(buttonVal) > -1) {
			// Operator is clicked
			// Get the last character from the equation and only add a operator if there is already a number on screen
			var lastChar = inputVal[inputVal.length - 1];
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1) {
                screen.innerHTML += buttonVal;
            }
			// Allow minus if the string is empty for negative numbers
			else if(inputVal == '' && buttonVal == '-') {
                screen.innerHTML += buttonVal;
            }
			
			// Replaces a operator with a new one if the last char. was a operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				// Here, '.' means any character $ means at the end of the string
				screen.innerHTML = inputVal.replace(/.$/, buttonVal);
			}
			
			
		}
		// if any other key is pressed, just add it to the inner html of the screen
		else {
			screen.innerHTML += buttonVal;
		}
	} 
}