$(document).ready(function () {
  $("#btn1").click(function () {
    $(this).css("color", "red");
  });
  // $('li:first').hide();           // select first item in first ul
  // $('li:last').hide();           // select last item in last ul
  // $('li:first-child').hide();           // select all first items in each ul in page
  // $('p').hide();                  // select all p in page
  // $('.me p').hide();              // select all p in me class
  // $(".me p:first").hide();            // select just the frist p in me class
  // $('.me p , .children p').hide();             // select all p in me,children classes
  // $('ul').hide();                           // select all ul in page
  // $("ul:first").hide();                     // select the first ul in page
  // $("ul:nth-child(2)").hide();            // select the second ul in page
  // $(".me li:nth-child(3)").hide();             // select the third li of me class
  // $("ul li:nth-child(2)").hide();                 // select the second li of each ul
  // $('button').hide();                 // select all buttons in pages
  // $("button:first").hide();               // select the frist button
  //  $('.me , .children').hide();               // select many classes together
  //  $('p,a,button').hide();               // select many different elements together
  //  $('.colors p:first').hide();               // select the first p in colors div
  //  $('p:first-child').hide();                 // select the first p in each div
  //  $('p:first-of-type').hide();                 // select the first p in each div
  //  $('div:first-of-type').hide();                 // select every first div as a child
  //  $('p:only-of-type').css('color','red');                 //select every p if it is the only child of type p in its parents
  //  $('p:only-child').css('color','red');                 //select every p if it is the only child in its parents
  //  $('p:only-of-type').hide();                 //the same
  // $('.links').hide();         // hide links div with its all children
  // $('.links').children().hide();         // hide just all child of links div
  // $('.links').children().css('color','red');         // change just all child color of links div
  // $('.links > p').css('color','red');         // ??select all p direct child of links div
  // $('.links p').css('color','red');         // select all p inside the links div
  // $('.links >  p').css('color','red');         // select all p inside the links div
  //  $('.inside  >  li').css('color','red');         // select all inside li
  //  $('.outside  >  li').css('color','red');         // select all outside li
  //  $('.items li').css('color','red');         // select all li in items class
  //  $('ul.outside > li').css('color','red');         // ?? select just direct li in ouside ul
  //  $("div:has('a')").css('color','red');         // select every div has a , change the font color if text
  //  $("div:has('a')").hide();         // select every div has a , hide them
  //  $("div:empty").css('background-color', 'red');         // select every empty div and change its background color
  //  $('div:contains("anas")').css('background-color', 'red');         // select every div has text (anas) change its background color
//    $('li:parent').css('color', 'red');         //??
  //  $("div:has('ul')").css('color', 'red');         //every div has ul as a child, change text color to red
});
