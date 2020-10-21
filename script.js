	$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 100){
		  $("header ul a img").addClass("shrink");
		  $("header ul.topnav li a").addClass("shrink1");
		  
		  
		}
		else
		{
			$("header ul a img").removeClass("shrink");
			$("header ul.topnav li a").removeClass("shrink1");
		}
	}
	);

	
	/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    document.getElementsByClassName("topnav1")[0].classList.toggle("responsive");
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive0");
}