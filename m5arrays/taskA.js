// a) Display the value of the seventh element of array f.
// b) Initialize each of the five elements of one-dimensional array g to 8.
// c) Total the elements of array c, which contains 100 numeric elements.
// d) Copy 11-element array a into the first portion of array b, which contains 34 elements.
// e) Determine and print the smallest and largest values contained in 99-element floatingpoint array w.

function start()
{
   //Initializer creates each array
   
   var f = [1,2,3,4,5,6,7]; //array f creation
   
   var g = [1,2,3,4,5,6,7,8]; //array g creation
   
   var c = new Array( 100 ); // array c creation
   var cTotal = 0; 
   for (var i = 0; i < c.length; ++i) // Initializing C and summing elements
   {
      c[i] = i;
      cTotal += c[i];
   }   
   
   var a = [1,2,3,4,5,6,7,8,9,10,11]; // Array a
   var b = new Array( 34 ); // array b
   b.push.apply(b,a); //copy a into b
   b.sort( function(a, b){return a-b} ); // sort b
   
   var w = new Array( 100 );
   for(var i = 0; i < w.length; ++i) 
   {   
      w[i]=i+0.001;
   }
   w.sort( function(a,b) {return a-b});
   
   outputArray( "The seventh element of array f:", f[6], document.getElementById( "taskA" ) );
   outputArray( "The elements of array g:", g, document.getElementById( "taskB"));
   outputArray( "The total of all elements in array c:", cTotal, document.getElementById( "taskC") );
   outputArray( "Array a has been copied into b:", b, document.getElementById( "taskD" ));
   outputArray( "The smallest in array w: " + w[0], "The largest in array w: " + w[99], document.getElementById( "taskE") );
} // end function start

function outputArray( heading, theArray, output )
{
   var content;
   
   content = "<h2>" + heading + " " + theArray + "</h2>";
   
   output.innerHTML = content; //enter content into html
}
window.addEventListener( "load", start, false);