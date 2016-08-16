(function(){
	$(function(){
		
		//图片加载
		fnPreLoadImg();	
		
	});
	
	//图片加载
	function fnPreLoadImg(){		
		var arrImg = [
			'banner_leaves.png',
			'dialogue.png',
			'leo_head01.png',
			'leo_head02.png',
			'leo_body.png',
			'speak.png',
			'banner_title.png',
			'cake_male.png',
			'price_male.png',
			'btn_buy.png',
			'cake_female.png',
			'price_female.png'
		];		
		var num = 0;
		$.each(arrImg, function(index, obj) {
			var objImg = new Image();
			objImg.src = 'img/half-price-leo/' + obj;
			objImg.onload = function() {
				num++;
				if (num == arrImg.length) {
					fnAnimateStar();
				}
			};
			//图片加载错误或不全
			objImg.onerror = function() {
				fnAnimateStar();
			};
		});		
	}
	
	function fnAnimateStar(){
		var $oLeoHead01 = $('.leo-head01'),
			$oLeoHead02 = $('.leo-head02'),
			$oLeoBody = $('.leo-body'),
			$oDialogue = $('.dialogue'),
			$oSpeak = $('.speak');
			

		$oDialogue.fadeOut(1500,function(){
			$oLeoHead01.fadeIn(1000);
			$oLeoBody.fadeIn(1000,function(){
				$oLeoHead01.fadeOut(1300);
				$oLeoHead02.fadeIn(1000,function(){
					$oLeoHead02.fadeOut(2000);
					$oLeoHead01.fadeIn(1000,function(){
						$oSpeak.animate({
							width: '28.8%',
							top: '13%',
							left: '2.2%'
						},2000,function(){
							fnLeavesShow();
						});
					});
				});
			});
		});

	}
	
	// 落叶动画
	function fnLeavesShow(){
		$.fn.snow({ 
			minSize		: 10,		//最小宽度
			maxSize		: 20,		//最大宽度
			newOn		: 3000		//频率
		});
	}
	
})();
