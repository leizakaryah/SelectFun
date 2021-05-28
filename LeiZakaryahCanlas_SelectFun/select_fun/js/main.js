/**
*
* Part 1:
*
*/

// 1. Go to style.css and add a class called fun. Style that class with your choice of background-color and text color.
//----------------------d o n e--------------------------
// 2. Using jQuery, add the fun class to the elements with the class .box
function boxes() {
	$(".box").toggleClass("fun");
	//this query added the class "fun" in the class "box"
// 3. When #box2 is clicked on
	// a) Remove the crazy class from all the items with a class of .box
	// b) Add the crazy class to the h1
	// c) Slide toggle #box3
	$("#box2").on("click", function() {
		$(".box").removeClass("crazy");
		$("h1").addClass("crazy");
		$("#box3").slideToggle();
	})
	/*when "Box number 2" in html is clicked, it will remove the dotted borders and transfer it to the "h1" or "Select Fun Fun Fun Fun!" then "Box number 3" will slide out of the screen and come back once you click again*/

// 4. When any .box is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
	$(".box").on("click", function() {
		$("h1").html("jQuery Ninja");
	})
}
/*this query will change the text from "Select Fun Fun Fun Fun!" to "jQuery Ninja" and it will happen at the same time any of the boxes is clicked*/

// 5. Have the following code execute when the #box1 is clicked. Write a JavaScript comment with a description of what happened.
$("#box1").on("click", function() {
	boxes()
})
//i wrapped the steps 2-4 in a function and called it "boxes" so the queries before this step wont work unless i clicked the "Box number 1" on html

// 6. when box one is clicked you are changing the attribute of src to moto.jpg

$("#box1").on("click", function() {
	$("img").attr('src','images/moto.jpg');
})
// when i click on "Box number 1" a picture of motorcycle will show up because i added a source attribute with file path of an image to the <img> tag


/**
*
* Part 2:
*
*/

// 6. Hide the item with the id #dropdownMenu
$("#dropdownMenu").hide()
// hides the menu by default

// 7. When the element with the id #dropdownButton is clicked,
	// a) slide toggle #dropdownMenu
$("#dropdownButton").on("click", function() {
	$("#dropdownMenu").slideToggle()
})
/*this query will trigger the "CLICK ME" button and make the list from the id=dropdownMenu show up by sliding down and hide again by clicking the button*/

/**
*
* Part 3:
*
*/

// 8. Hide the item with the id #answer2
$("#answer2").hide()
// hides the answer by default

// 9. Show the item with the id #answer1
$("#answer1").show()
// shows the answer by default

// 10. When #question2 is clicked:
	// a) Slide down #answer2
	// b) Slide up #answer1
	// c) Remove the active class from all list items
	// d) Add the active class to #question2
$("#question2").on("click", function() {
	$("#answer2").slideDown();
	$("#answer1").slideUp();
	$("li").removeClass("active")
	$("#question2").addClass("active")
})
//when the question "HOW CAN I REACH YOU?" is clicked on html it will slide down the answer for the said question while sliding up the question for "WHAT ARE YOUR HOURS?". It also removes the class named "active" in the list items and adding it to the id named "question2"


// 11. When #question1 is clicked:
	// a) Slide down #answer1
	// b) Slide up #answer2
	// c) Remove the active class from all list items
	// d) Add the active class to #question1
$("#question1").on("click", function() {
	$("#answer1").slideDown();
	$("#answer2").slideUp();
	$("li").removeClass("active")
	$("#question1").addClass("active")
})
//this query does the vice versa of the previous step
//when the question "WHAT ARE YOUR HOURS?" is clicked on html it will slide down the answer for the said question while sliding up the question for "HOW CAN I REACH YOU?". It also removes the class named "active" in the list items and adding it to the id named "question1"
