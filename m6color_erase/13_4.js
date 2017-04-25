// A simple drawing program.
// initialization function to insert cells into the table
function createCanvas()
{
   var side = 100;
   var tbody = document.getElementById( "tablebody" );
   
   for ( var i = 0; i < side; ++i )
   {
      var row = document.createElement( "tr" );

         for ( var j = 0; j < side; ++j )
         {
            var cell = document.createElement( "td" );
            cell.setAttribute( "class", "white" );
            row.appendChild( cell );
         } // end for

      tbody.appendChild( row );
   } // end for
   // register mousemove listener for the table
   document.getElementById( "canvas" ).addEventListener(
      "mousemove", processMouseMove, false );
      
   var erase = document.getElementById("erase");
   erase.addEventListener("click", newCanvas, false);
   
} // end function createCanvas

function newCanvas()
{
   var tdLength = document.getElementsByTagName("td").length;
   for (var a = 0; a < tdLength; ++a)
   {
      document.getElementsByTagName("td")[a].setAttribute("class", "white");
   }
}

// processes the onmousemove event
function processMouseMove( e )
{
   if ( e.target.tagName.toLowerCase() == "td" )
   {
   // turn the cell blue if the Ctrl key is pressed
      if ( e.ctrlKey)
      {
         e.target.setAttribute( "class", "blue" );
      } // end if

      // turn the cell red if the Shift key is pressed
      if ( e.shiftKey )
      {
         e.target.setAttribute( "class", "red" );
      } // end if
      
      // turn the cell white if the Alt key is pressed
      if ( e.altKey )
      {
         e.target.setAttribute( "class", "white" );
      }
   } // end if
} // end function processMouseMove



window.addEventListener( "load", createCanvas, false );
