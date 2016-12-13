$(".rule").click(function(){
			$(".info").show().addClass("animat");
			$(".shade").show();
			$('html,body').animate({scrollTop: '170%'}, 100);
			$(document).bind('touchmove',function(e) {
			     var e = e || event;
			     e.preventDefault();
			});
			if(Boolean($(".info").show())){
				$(".shade").click(function(){
					$(".info").hide();
					$(".shade").hide();
					$(document).unbind("touchmove");
				})
			}
		})
		$(".info span").click(function(){
			$(".info").hide().removeClass("animat");
			$(".shade").hide();
			$(document).unbind("touchmove");
		});
		$(".rule_a").click(function(){
			$(".info_a").show().addClass("animat");
			$(".shade").show();
			$('html,body').animate({scrollTop: '730%'}, 100);
			$(document).bind('touchmove',function(e) {
			     var e = e || event;
			     e.preventDefault();
			})
			if(Boolean($(".info_a").show())){
				$(".shade").click(function(){
					$(".info_a").hide();
					$(".shade").hide();
					$(document).unbind("touchmove");
				})
			}
		})
		$(".info_a span").click(function(){
			$(".info_a").hide().removeClass("animat");
			$(".shade").hide();
			$(document).unbind("touchmove");
		});
		$(".rule_b").click(function(){
			$(".info_b").show().addClass("animat");
			$(".shade").show();
			$('html,body').animate({scrollTop: '1250%'}, 100);
			$(document).bind('touchmove',function(e) {
			     var e = e || event;
			     e.preventDefault();
			});
			if(Boolean($(".info_b").show())){
				$(".shade").click(function(){
					$(".info_b").hide();
					$(".shade").hide();
					$(document).unbind("touchmove");
				})
			}
		})
		$(".info_b span").click(function(){
			$(".info_b").hide().removeClass("animat");
			$(".shade").hide();
			$(document).unbind("touchmove");
})