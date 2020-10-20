	$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 100){
		  $("header ul a img").addClass("shrink");
		  $("header ul li a").addClass("shrink1");
		  $("header h1-2").addClass("shrink2");
		}
		else
		{
			$("header ul a img").removeClass("shrink");
			$("header ul li a").removeClass("shrink1");
			$("header h1-2").removeClass("shrink2");
		}
	}
	);

	
	/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    document.getElementsByClassName("topnav1")[0].classList.toggle("responsive");
}