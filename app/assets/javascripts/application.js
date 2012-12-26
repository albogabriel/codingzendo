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

    	$("#fo1").hover(function(){shadow("#fo1");},function(){unShadow("#fo1");});	
    	$("#fo2").hover(function(){shadow("#fo2");},function(){unShadow("#fo2");});			
    	$("#rm1").hover(function(){shadow("#rm1");},function(){unShadow("#rm1");});			
    	$("#rm2").hover(function(){shadow("#rm2");},function(){unShadow("#rm2");});			
    	$("#is1").hover(function(){shadow("#is1");},function(){unShadow("#is1");});			
    	$("#is2").hover(function(){shadow("#is2");},function(){unShadow("#is2");});			
    	$("#empti1").hover(function(){shadow("#empti1");},function(){unShadow("#empti1");});			
    	$("#empti2").hover(function(){shadow("#empti2");},function(){unShadow("#empti2");});			
    	$("#ness1").hover(function(){shadow("#ness1");},function(){unShadow("#ness1");});			
    	$("#ness2").hover(function(){shadow("#ness2");},function(){unShadow("#ness2");});			

		function shadow(element){
			$(element).css("text-shadow", "2px 2px grey");
		};

		function unShadow(element){
			$(element).css("text-shadow", "");
		};
	

    	$("#fo1").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".textItems").css("display", "none");
    		$(".bulls").addClass("bull01");
    		$("#text01").css("display", "block");
    	});
    	$("#rm1").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".textItems").css("display", "none");
    		$(".bulls").addClass("bull02");
    		$("#text02").css("display", "block");
    	});
    	$("#is1").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".textItems").css("display", "none");
    		$(".bulls").addClass("bull03");
    		$("#text03").css("display", "block");
    	});
    	$("#empti1").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".textItems").css("display", "none");
    		$(".bulls").addClass("bull04");
    		$("#text04").css("display", "block");
    	});
    	$("#ness1").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".textItems").css("display", "none");
    		$(".bulls").addClass("bull05");
    		$("#text05").css("display", "block");
    	});
    	$("#empti2").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".textItems").css("display", "none");
    		$(".bulls").addClass("bull06");
    		$("#text06").css("display", "block");
    	});
    	$("#ness2").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".textItems").css("display", "none");
    		$(".bulls").addClass("bull07");
    		$("#text07").css("display", "block");
    	});
    	$("#is2").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".textItems").css("display", "none");
    		$(".bulls").addClass("bull08");
    		$("#text08").css("display", "block");
    	});
    	$("#fo2").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".textItems").css("display", "none");
    		$(".bulls").addClass("bull09");
    		$("#text09").css("display", "block");
    	});
    	$("#rm2").click(function(){
    		$(".bulls").removeClass().addClass("bulls");
    		$(".textItems").css("display", "none");
    		$(".bulls").addClass("bull10");
    		$("#text10").css("display", "block");
    	});
    });