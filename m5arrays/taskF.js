// a) Display the value of the seventh element of array f.
// b) Initialize each of the five elements of one-dimensional array g to 8.
// c) Total the elements of array c, which contains 100 numeric elements.
// d) Copy 11-element array a into the first portion of array b, which contains 34 elements.
// e) Determine and print the smallest and largest values contained in 99-element floatingpoint array w.

function start()
{
   //Initializer creates each array
   
   var f = new Array(); //array f creation
   
   for (var i = 0; i < 7; ++i)
   {
      f[i]= i;
   } //end for
   
   outputArray( "The seventh element of array f:", f, document.getElementById( "taskF" ));
} // end function start

outputArray ( heading, theArray, output )
{
   var content = "<h2>" + heading + " " + theArray[7] + "</h2>";
   
   output.innerHTML = content; //enter content into html
}
window.addEventListener( "load", start, false);