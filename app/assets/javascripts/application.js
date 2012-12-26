// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){

    	$("#fo1").hover(function(){
    		$("#fo1").css("text-shadow", "1px 1px grey");
    	},
    	function(){
    		$("#fo1").css("text-shadow", "");
    	});			

    	$("#fo2").hover(function(){
    		$("#fo2").css("text-shadow", "1px 1px grey");
    	},
    	function(){
    		$("#fo2").css("text-shadow", "");
    	});			

		$("#rm1").hover(function(){
    		$("#rm1").css("text-shadow", "1px 1px grey");
    	},
    	function(){
    		$("#rm1").css("text-shadow", "");
    	});			

    	$("#rm2").hover(function(){
    		$("#rm2").css("text-shadow", "1px 1px grey");
    	},
    	function(){
    		$("#rm2").css("text-shadow", "");
    	});		

    	$("#is1").hover(function(){
    		$("#is1").css("text-shadow", "1px 1px grey");
    	},
    	function(){
    		$("#is1").css("text-shadow", "");
    	});		

    	$("#is2").hover(function(){
    		$("#is2").css("text-shadow", "1px 1px grey");
    	},
    	function(){
    		$("#is2").css("text-shadow", "");
    	});		

    	$("#empti1").hover(function(){
    		$("#empti1").css("text-shadow", "1px 1px grey");
    	},
    	function(){
    		$("#empti1").css("text-shadow", "");
    	});		

    	$("#empti2").hover(function(){
    		$("#empti2").css("text-shadow", "1px 1px grey");
    	},
    	function(){
    		$("#empti2").css("text-shadow", "");
    	});

    	$("#ness1").hover(function(){
    		$("#ness1").css("text-shadow", "1px 1px grey");
    	},
    	function(){
    		$("#ness1").css("text-shadow", "");
    	});		

    	$("#ness2").hover(function(){
    		$("#ness2").css("text-shadow", "1px 1px grey");
    	},
    	function(){
    		$("#ness2").css("text-shadow", "");
    	});		



    	$("#fo1").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".bulls").addClass("bull01");
    	});
    	$("#rm1").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".bulls").addClass("bull02");
    	});
    	$("#is1").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".bulls").addClass("bull03");
    	});
    	$("#empti1").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".bulls").addClass("bull04");
    	});
    	$("#ness1").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".bulls").addClass("bull05");
    	});
    	$("#empti2").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".bulls").addClass("bull06");
    	});
    	$("#ness2").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".bulls").addClass("bull07");
    	});
    	$("#is2").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".bulls").addClass("bull08");
    	});
    	$("#fo2").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".bulls").addClass("bull09");
    	});
    	$("#rm2").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".bulls").addClass("bull10");
    	});
    });