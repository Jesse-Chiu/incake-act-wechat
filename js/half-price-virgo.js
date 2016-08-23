(function(){
	$(function(){
		
		//图片加载
		fnPreLoadImg();	
		
	});
	
	//图片加载
	function fnPreLoadImg(){		
		var arrImg = [
			'banner_bg.png',
			'banner_prefect.png',
			'banner_rotate.png',
			'btn_buy.png',
			'cake.png',
			'icon.png',
			'price.png',
			'speak.png',
			'tips.png'
		];		
		var num = 0;
		$.each(arrImg, function(index, obj) {
			var objImg = new Image();
			objImg.src = 'img/half-price-virgo/' + obj;
			objImg.onload = function() {
				num++;
				if (num == arrImg.length) {
					fnAnimate();
				}
			};
			//图片加载错误或不全
			objImg.onerror = function() {
				fnAnimate();
			};
		});		
	}
	
	function fnAnimate(){
		var $oContent = $('.content'),
			$oRotate = $oContent.find('.rotate'),
			$oPrefect = $oContent.find('.prefect'),
			$oTips = $oContent.find('.tips'),
			$oFlag = $oContent.find('.flag'),
			$oSpeak = $oContent.find('.speak'),
            tl = new TimelineLite();

        tl.clear();
        tl.set($oTips, {perspective: 500});
        tl.set($oFlag, {transformOrigin: '8% 84.2%'});
        tl.set($oSpeak, {transformOrigin: 'right center'});

        tl.to($oRotate, .2, {
            rotation: 90,
            repeat: 5,
            yoyo: true,
            ease: Linear.easeInOut
        }).to($oPrefect, 2, {
            left: '18.2%',
            ease: Elastic.easeOut
        }).fromTo($oTips.find('img'), 1, {
            z: 500
        }, {
            z: 0,
            ease: Bounce.easeOut
        }).to($oFlag, .2, {
            rotation: -5,
            yoyo: true,
            repeat: 5
        }).fromTo($oSpeak, 1, {
            opacity: 0,
            scale: 0
        }, {
            opacity: 1,
            scale: 1
        });	

	}
	
})();
