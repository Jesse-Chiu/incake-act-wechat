(function(){
	$(function(){
		//图片加载
		fnPreLoadImg();	
		
		var $cakeImg = $('.cakeImg');
		var $cakeImg2 = $('.cakeImg2');
		var $flowerBox = $('.flowerBox');
		var $flowerBox2 = $('.flowerBox2');
		var $sparklingWine = $('.sparklingWine');
		var $sparklingWine2 = $('.sparklingWine2');
		
		$cakeImg.on('click',function(){
			$cakeImg.addClass('hide');
			$cakeImg2.removeClass('hide');
			setTimeout("$('.cakeImg2').addClass('hide');$('.cakeImg').removeClass('hide');",500);
		});
		
		$flowerBox.on('click',function(){
			$flowerBox.addClass('hide');
			$flowerBox2.removeClass('hide');
			setTimeout("$('.flowerBox2').addClass('hide');$('.flowerBox').removeClass('hide');",500);
		});
		
		$sparklingWine.on('click',function(){
			$sparklingWine.addClass('hide');
			$sparklingWine2.removeClass('hide');
			setTimeout("$('.sparklingWine2').addClass('hide');$('.sparklingWine').removeClass('hide');",500);
		});
		
	});
	
	//图片加载
	function fnPreLoadImg(){		
		var arrImg = [
			'cake2.png', 
			'cake1.png', 
			'header-bg.png', 
			'flower2.png', 
			'sparkling-wine2.png', 
			'flower1.png', 
			'sparkling-wine1.png', 
			'button-bg.png', 
			'flower-logo.png', 
			'sled-img.png', 
			'header-img01.png', 
			'header-img04.png', 
			'header-img03.png', 
			'header-img06.png', 
			'header-img02.png', 
			'header-img05.png', 
			'header-img07.png'
		];		
		var num = 0;
		$.each(arrImg, function(index, obj) {
			var objImg = new Image();
			objImg.src = 'img/merry-christmas/' + obj;
			objImg.onload = function() {
				num++;
				if (num == arrImg.length) {
					fnShowStar();
				}
			};
			//图片加载错误或不全
			objImg.onerror = function() {
				fnShowStar();
			};
		});		
	}
	
	// 星星动画
	function fnShowStar(){
		var $oLeftStarOne = $('.img01');
		var $oLeftStarTwo = $('.img02');
		var $oLeftStarThree = $('.img03');
		var $oRightStarOne = $('.img04');
		var $oRightStarTwo = $('.img05');
		var $oRightStarThree = $('.img06');
		var $oRightStarFour = $('.img07');		
		$oRightStarTwo.animate({
			top : '0'
		},600,function(){
			$oLeftStarOne.animate({
				top : '0'
			},600,function(){
				$oLeftStarTwo.animate({
					top : '0'
				},600,function(){
					$oRightStarFour.animate({
						top : '47.5%'
					},600,function(){
						$oRightStarThree.animate({
							top : '0'
						},600,function(){
							$oLeftStarThree.animate({
								top : '0'
							},600,function(){
								$oRightStarOne.animate({
									top : '0'
								},600,function(){
									fnShowCar();
								});
							});
						});
					});
				});
			});
		});		
	}
	
	// 鹿车动画
	function fnShowCar(){
		$('.sled').css({
			display : 'block'
		})
		.animate({
			right : '12%',
			top : '12%'
		}, 3000, function() {
			fnButtonRotate();
			fnShowSnow();
		});
	}
	
	// 按钮动画
	function fnButtonRotate(){
		
		$('.buyNow').css({
			'transform-origin': 'top center',
			'-webkit-transform-origin': 'top center',
			'transform': 'rotateY(360deg)',
			'-webkit-transform': 'rotateY(360deg)',
			'transition': '1s',
			'-webkit-transition': '1s'
		}).animate({}, 2000, function(){});
	}
	
	// 下雪动画
	function fnShowSnow(){
		$.fn.snow({ 
			minSize: 5,		//雪花的最小尺寸
			maxSize: 50, 	//雪花的最大尺寸
			newOn: 300		//雪花出现的频率 这个数值越小雪花越多
		});
	}
	
})();
