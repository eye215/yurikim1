// JavaScript Document
$(document).ready(function() {
	
	$(".home").click(
		function(){
			
			$("#wrap1").stop().animate({"top":"0%"},800);
			$("#wrap2").stop().animate({"top":"-100%"},400);
			$("#wrap3").stop().animate({"top":"-100%"},400);
			$("#wrap4").stop().animate({"top":"-100%"},400);
			});
	$(".profile").click(
		function(){
			$("#wrap1").stop().animate({"top":"-100%"},400);
			$("#wrap2").stop().animate({"top":"0%"},400);
			$("#wrap3").stop().animate({"top":"-100%"},400);
			$("#wrap4").stop().animate({"top":"-100%"},400);
			});
	$(".works").click(
			function(){
			$("#wrap1").stop().animate({"top":"-100%"},400);
			$("#wrap2").stop().animate({"top":"-100%"},400);
			$("#wrap3").stop().animate({"top":"0%"},800);
			$("#wrap4").stop().animate({"top":"-100%"},400);
			});
	
	$(".contact").click(
			function(){
				$("#wrap1").stop().animate({"top":"-100%"},400);
				$("#wrap2").stop().animate({"top":"-100%"},400);
				$("#wrap3").stop().animate({"top":"-100%"},400);
				$("#wrap4").stop().animate({"top":"0%"},800);
				});
	
		


    $(".main_menu>li:nth-child(1)").mouseover(
	function(){
		$(".main_menu>.menu_span").stop().animate({"left":"9%"},400);
		
		});
		
		 $(".main_menu>li:nth-child(2)").mouseover(
	function(){
		$(".main_menu>.menu_span").stop().animate({"left":"32%"},400);
		});
		 $(".main_menu>li:nth-child(3)").mouseover(
	function(){
		$(".main_menu>.menu_span").stop().animate({"left":"54%"},400);
		});
	 $(".main_menu>li:nth-child(4)").mouseover(
	function(){
		$(".main_menu>.menu_span").stop().animate({"left":"76%"},400);
		});
		






		 $(".main_menu>li").mouseleave(
	function(){
		$(".menu_span").stop().animate({"left":"-100%"},400);
		});
	


    $(".main_menu>li:nth-child(1)").mouseover(
	function(){
		$(".main_menu>.menu_span").stop().animate({"left":"9%"},400);
		
		});
		
		 $(".main_menu>li:nth-child(2)").mouseover(
	function(){
		$(".main_menu>.menu_span").stop().animate({"left":"32%"},400);
		});
		 $(".main_menu>li:nth-child(3)").mouseover(
	function(){
		$(".main_menu>.menu_span").stop().animate({"left":"54%"},400);
		});
	 $(".main_menu>li:nth-child(4)").mouseover(
	function(){
		$(".main_menu>.menu_span").stop().animate({"left":"76%"},400);
		});
		

		 $(".main_menu>li").mouseleave(
	function(){
		$(".menu_span").stop().animate({"left":"-100%"},400);
		});


			$(".close").click(
		function(){
			$(".pop").stop().css({"display":"none"});
	});
	
	$(".box_text.a7").mouseover(
		function(){
		$(".box_s.aa7").stop().animate({"top":"75%"},800);
	});
	$(".box_text.a7").mouseleave(
		function(){
			$(".box_s.aa7").stop().animate({"top":"100%"},800);
		});


		$(".box_text.a1").mouseover(
			function(){
			$(".box_s.aa1").stop().animate({"left":"25%"},800);
		});
		$(".box_text.a1").mouseleave(
			function(){
				$(".box_s.aa1").stop().animate({"left":"-100%"},800);
			});


	
			$(".box_text.a5").mouseover(
				function(){
				$(".box_s.aa5").stop().animate({"top":"25%"},800);
			});
			$(".box_text.a5").mouseleave(
				function(){
					$(".box_s.aa5").stop().animate({"top":"-100%"},800);
				});


				$(".box_text.a9").mouseover(
					function(){
					$(".box_s.aa9").stop().animate({"top":"0"},800);
				});
				$(".box_text.a9").mouseleave(
					function(){
						$(".box_s.aa9").stop().animate({"top":"-100%"},800);
					});


			$(".box_text.a4").mouseover(
					function(){
					$(".box_s.aa4").stop().animate({"left":"37.5%"},800);
				});
				$(".box_text.a4").mouseleave(
					function(){
						$(".box_s.aa4").stop().animate({"left":"-100%"},800);
					});
				
			$(".box_text.a2").mouseover(
					function(){
					$(".box_s.aa2").stop().animate({"top":"25%"},800);
				});
				$(".box_text.a2").mouseleave(
					function(){
						$(".box_s.aa2").stop().animate({"top":"-100%"},800);
					});

		$(".box_text.a3").mouseover(
					function(){
					$(".box_s.aa3").stop().animate({"top":"50%"},800);
				});
				$(".box_text.a3").mouseleave(
					function(){
						$(".box_s.aa3").stop().animate({"top":"100%"},800);
					});
		$(".box_text.a8").mouseover(
					function(){
					$(".box_s.aa8").stop().animate({"left":"50%"},800);
				});
		$(".box_text.a8").mouseleave(
					function(){
						$(".box_s.aa8").stop().animate({"left":"100%"},800);
					});
		$(".box_text.a6").mouseover(
					function(){
					$(".box_s.aa6").stop().animate({"top":"50%"},800);
				});
		$(".box_text.a6").mouseleave(
					function(){
						$(".box_s.aa6").stop().animate({"top":"-100%"},800);
					});
		$(".box_text.a10").mouseover(
					function(){
					$(".box_s.aa10").stop().animate({"left":"50%"},800);
				});
		$(".box_text.a10").mouseleave(
					function(){
						$(".box_s.aa10").stop().animate({"left":"100%"},800);
					});


				
					start();

});

function start(){
	$('.home_text_wrap1').eq(0).stop().css({"left":"-100%"});
	setInterval(function(){text_slide1();},900);
	
}
function text_slide1(){
	$('.home_text_wrap1').stop().animate({"left":"200%"},700);
	setInterval(function(){text_slide2();},300);
	}
function text_slide2(){
	$('.home_text_wrap2').stop().animate({"left":"200%"},700);
}