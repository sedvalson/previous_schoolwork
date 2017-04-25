
var letters = "11.13 Write a script that inputs several lines of text and a" + 
   "search character and uses String method indexOf to determine the" +
   "number of occurrences of the character in the text";

function buttonPressed()
{
   var inputField = document.getElementById( "inputField" );
   var value = document.getElementById("inputField").value;
   var counter = 0;
   var index = 0;
   var newIndex;
   while (letters.indexOf(value, index) != -1)
   {
	newIndex = letters.indexOf( value, index);
	++counter;
	index = newIndex + 1;
   }
   document.getElementById( "results").innerHTML = "<p>Result: " + counter + "</p>";
}

function start()
{
   var searchButton = document.getElementById( "searchButton" );
   searchButton.addEventListener("click", buttonPressed, false);   
}
window.addEventListener( "load", start, false);