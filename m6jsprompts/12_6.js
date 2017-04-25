function start()
{
   var inputColor = prompt( "Enter a color name for the " +
      "background of this page", "" );
   var inputFont = prompt ( "Enter 1 for Serif font or 2 for Sans-serif font", "" );
   var text = document.getElementById("text")
   if(inputFont = "1")
   {
      document.body.setAttribute( "style", 
         "font-family: Times New Roman, Times, serif; background-color:" + inputColor );
      text.innerHTML = "<p>Welcome to our website! This is a Serif text and the background color is " +
         inputColor + ".</p>";
   }
   if(inputFont = "2")
   {
      text.setAttribute( "style", "font-family: Ariel, Helvetica, Sans-serif; backgorund-color:" + inputColor );
      text.innerHTML = "<p>Welcome to our website! This is a Sans-serif text and the background color is " +
         inputColor + ".</p>";
   }

} // end function start

window.addEventListener( "load", start, false );