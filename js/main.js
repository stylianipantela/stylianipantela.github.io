
 $(window).load(function() {

 	// hide all pages except for the about page
 	$(".page").hide();
 	$(".nav > li").removeClass("active");
 	var current_page = window.location.hash.substring(1);
 	if (current_page == "") {
 		$("#about_nav").addClass("active");
 		$("#about_page").show();	
 	} else {
 		$("#" + current_page + "_page").show();
 		$("#" + current_page + "_nav").addClass("active");
 	}
 	$(".footer").show();
 	

 	// make current page nav element active
 	$(".nav > li").click(function(e){
 		$(".nav > li").removeClass("active");
 		$(this).addClass("active");
 		$(".page").hide();

 		current_page = $(this).find("a").attr("href");
 		if (current_page == "#") {
 			$("#about_page").show();
 		} else {
 			$(current_page + "_page").show();
 		}
	});




 });