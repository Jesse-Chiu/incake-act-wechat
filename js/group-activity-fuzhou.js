;(function(){
	var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
            loop: true,
            centeredSlides: true,
            autoplay: 5000,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            preloadImages: false,
            lazyLoading: true
		});
		
	$(".sure").click(function(){
		$shade.fadeOut();
		$(".btn").css('background-color','#757575').text('参团成功');
	});
	
	var $btn = $(".btn"),
		$shade = $(".shade");
	$btn.click(function(){
		$shade.fadeIn();
	});
	$shade.click(function(e){
		if(e.target === $shade[0]){
			$shade.fadeOut();
		}
	});
	
	$(function leftTimer(year,month,day,hour,minute,second){ 
		 var leftTime = (new Date(year,month,day,hour,minute,second)) - (new Date()); //计算剩余的毫秒数 
		 var days = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10); //计算剩余的天数 
		 var hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时 
		 var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟 
		 var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数 
		 days = checkTime(days); 
		 hours = checkTime(hours); 
		 minutes = checkTime(minutes); 
		 seconds = checkTime(seconds); 
		 setInterval(function(){
		 	leftTimer(2017,4,30,06,00,00);
		 },100)
		 $("#day").html(days+"天" + hours+"小时" + minutes+"分"+seconds+"秒");
	});
	function checkTime(i){
		if(i<10){ 
		  i =+ i; 
		}
		return i; 
	}; 
})();
