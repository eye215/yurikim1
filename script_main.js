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
			$(".skills_progress").stop().animate({"left":"0%"},1000);
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
		$(".main_menu>.menu_span").stop().animate({"left":"55%"},400);
		});
	 $(".main_menu>li:nth-child(4)").mouseover(
	function(){045             
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
		$(".main_menu>.menu_span").stop().animate({"left":"53%"},400);
		});
	 $(".main_menu>li:nth-child(4)").mouseover(
	function(){
		$(".main_menu>.menu_span").stop().animate({"left":"76%"},400);
		});
		

		 $(".main_menu>li").mouseleave(
	function(){
		$(".menu_span").stop().animate({"left":"-100%"},400);
		});

		$(".box_text").click(
			function(){
				$(".black").stop().animate({"left":"0%"},400);
		});
		$(".box_text.a1").click(
			function(){
				$(".box_text_pop_wrap.a1").stop().animate({"left":"0"},500);
		});
		$(".box_text.a2").click(
			function(){
				$(".box_text_pop_wrap.a2").stop().animate({"left":"0"},500);
		});

		$(".box_text.a3").click(
			function(){
				$(".box_text_pop_wrap.a3").stop().animate({"left":"0"},500);
		});

		$(".box_text.a4").click(
			function(){
				$(".box_text_pop_wrap.a4").stop().animate({"left":"0"},500);
		});

		$(".box_text.a5").click(
			function(){
				$(".box_text_pop_wrap.a5").stop().animate({"left":"0"},500);
		});

		$(".box_text.a7").click(
			function(){
				$(".box_text_pop_wrap.a7").stop().animate({"left":"0"},500);
		});

		$(".box_text.a10").click(
			function(){
				$(".box_text_pop_wrap.a10").stop().animate({"left":"0"},500);
		});


		$(".pop_close").click(
			function(){
				$(".box_text_pop_wrap").stop().animate({"left":"-100%"},500);
				$(".black").stop().animate({"left":"-100%"},500);
		});

			$(".close").click(
		function(){
			$(".pop").stop().css({"display":"none"});
	});
    
    $(".box_text").click(
		function(){
			$(this).children(".box_text_pop_wrap").stop().css({"display":"block"});
	});
    

    $(".box_text").mouseover(
		function(){
        $(this).children(".box_text_fixed").stop().animate({"opacity":"0"},800);
        
        
    });
    $(".box_text").mouseleave(
		function(){
        $(this).children(".box_text_fixed").stop().animate({"opacity":"100%"},800);
        
        
	});

	$(".box_text:first-child").mouseover(
		function(){
        $(this).children(".box_text_fixed").stop().animate({"opacity":"60%"},800);
	
    });
	


	$(".box_text.a7").mouseover(
		function(){
        $(".box_s.aa7").stop().animate({"top":"71%"},800);
        
        
	});
	$(".box_text.a7").mouseleave(
		function(){
			$(".box_s.aa7").stop().animate({"top":"100%"},800);
		});


		$(".box_text.a1").mouseover(
			function(){
			$(".box_s.aa1").stop().animate({"left":"32%"},800);
			$(".box_s.aa1>img").stop().animate({"opacity":"100%"},2000);
		});
		$(".box_text.a1").mouseleave(
			function(){
				$(".box_s.aa1").stop().animate({"left":"-100%"},800);
				$(".box_s.aa1>img").stop().animate({"opacity":"0"},800);
			});


	
			$(".box_text.a5").mouseover(
				function(){
				$(".box_s.aa5").stop().animate({"top":"19%"},800);
			});
			$(".box_text.a5").mouseleave(
				function(){
					$(".box_s.aa5").stop().animate({"top":"-100%"},800);
				});


			$(".box_text.a4").mouseover(
					function(){
					$(".box_s.aa4").stop().animate({"left":"46%"},800);
				});
				$(".box_text.a4").mouseleave(
					function(){
						$(".box_s.aa4").stop().animate({"left":"-100%"},800);
					});
				
			$(".box_text.a2").mouseover(
					function(){
					$(".box_s.aa2").stop().animate({"top":"19%"},800);
				});
				$(".box_text.a2").mouseleave(
					function(){
						$(".box_s.aa2").stop().animate({"top":"-100%"},800);
					});

		$(".box_text.a3").mouseover(
					function(){
					$(".box_s.aa3").stop().animate({"top":"47%"},800);
				});
				$(".box_text.a3").mouseleave(
					function(){
						$(".box_s.aa3").stop().animate({"top":"100%"},800);
					});

		$(".box_text.a10").mouseover(
					function(){
					$(".box_s.aa10").stop().animate({"left":"60%"},800);
				});
		$(".box_text.a10").mouseleave(
					function(){
						$(".box_s.aa10").stop().animate({"left":"100%"},800);
					});


					$('.box_text').mouseover(
						function(){
							$(this).children('.box_text_span.t').stop().animate({"left":"0"},300);
							$(this).children('.box_text_span.r').stop().animate({"top":"0"},300);
							$(this).children('.box_text_span.b').stop().animate({"left":"0"},300);
							$(this).children('.box_text_span.l').stop().animate({"top":"0"},300);
						});
					$('.box_text').mouseleave(
							function(){
					
								$(this).children('.box_text_span.t').stop().animate({"left":"-100%"},300);
								$(this).children('.box_text_span.r').stop().animate({"top":"-100%"},300);
								$(this).children('.box_text_span.b').stop().animate({"left":"100%"},300);
								$(this).children('.box_text_span.l').stop().animate({"top":"100%"},300);
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