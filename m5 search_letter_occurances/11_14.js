
var alphabet = new Array ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" );

function updateHtml(alphCount)
{
   var results = "<table><caption>Number of Letters</caption><tbody>";
   for(i = 0; i < alphCount.length; i++)
   {
   	results += "<tr><td>" + alphabet[i] + "'s:</td><td>" + alphCount[i] + "</td></tr>";
   }
   results += "</tbody></table>";
   document.getElementById("results").innerHTML = results;	
}

function buttonPressed()
{
   var alphCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
   var inputField = document.getElementById( "inputField" );
   var counter;
   var letters=inputField.value;
   var lowerLetters = letters.toLowerCase();
   for( var i = 0; i < alphCount.length; ++i)
   {
	counter = 0;
	index=0;
	newIndex=0;
	while ((lowerLetters.indexOf(alphabet[i], index)) != -1)
	{
	   newIndex = lowerLetters.indexOf( alphabet[i], index);
	   ++counter;
	   index=newIndex+1
	}
	alphCount[i] = counter;
   }
   updateHtml(alphCount)
}

function start()
{
   var inputButton = document.getElementById( "inputButton" );
   inputButton.addEventListener("click", buttonPressed, false);   
}
window.addEventListener( "load", start, false);