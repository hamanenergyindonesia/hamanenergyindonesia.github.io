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
	});