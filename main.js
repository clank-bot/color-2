var mouseEvent = "";
var last_x = "";
var last_y = "";
 canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");

 canvas.addEventListener("mousedown", my_mousedown);

 function my_mousedown(E)
 {
     color = document.getElementById("color").value;
     width_of_line = document.getElementById("width_of_line").value;
    

    mouseEvent = "mouseDown";
 }

 canvas.addEventListener("mouseleave", my_mouseleave);
 function my_mouseleave(E)
 {
     mouseEvent = "mouseleave";
 }

 canvas.addEventListener("mouseup", my_mouseup);
 function my_mouseup(E)
 {
     mouseEvent = "mouseUp";
 }

 canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(E)
 {
     new_x = E.clientX - canvas.offsetLeft;
     new_y = E.clientY - canvas.offsetTop;

     if (mouseEvent == "mouseDown") {
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = width_of_line;

         console.log("Last position of x and y coordinates = ");
         console.log("x = " + last_x + "y = " + last_y);
         ctx.moveTo(last_x, last_y);

         console.log("current position of x and y coordinates = ");
         console.log("x = " + new_x + "y = " + new_y);
         ctx.lineTo(new_x, new_y);
         ctx.stroke();
     }

     last_x = new_x;
     last_y = new_y;
 }