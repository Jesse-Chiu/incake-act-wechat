(function() {

    $(document).ready(function() {

        // 动画实例
        var tl = new TimelineLite();

        // 调用飞机入场动画
        fnPlaneAnimation(tl);

		var $oFrmContainer = $('#frm-container');
		
		if($oFrmContainer.length > 0){
			fnScroll();
		}
        
    });
    
    // 飞机入场动画
    function fnPlaneAnimation(tl) {
        var $oPlane = $('#plane').find('img');

        tl.clear();
        tl.to($oPlane, 3, {
            'left': '10%',
            ease: Ease.easeOut,
            onComplete: function() {
				fnSilkAnimation();
            }
        });
    }
	
	function fnScroll(){
    	var clientH = $(window).height(),
            $oBtnFooter = $('#float-footer'),
            iBtnFooterH = $oBtnFooter.height(),
            $oFrmRegister = $('#frm-register'),
            iFrmRegisterH = $oFrmRegister.offset().top;

        $(window).on('scroll', function() {
            var scrollT = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollT > (iFrmRegisterH - clientH)) {
                $oBtnFooter.hide();
            } else {
                $oBtnFooter.show();
            }
        });

        // 浏览器尺寸改变时重新计算变量值
        $(window).on('resize', function() {
            clientH = $(window).height();
            iBtnFooterH = $oBtnFooter.height();
            iFrmRegisterH = $oFrmRegister.offset().top;
        });
        
        $oBtnFooter.on('click', function() {
            fnScrollTop($oFrmRegister);
        });
	
	    // 滑倒指定位置
	    function fnScrollTop($obj) {
	        $('html,body').animate({ scrollTop: $obj.offset().top }, 800);
	    }
		
    }

    // 丝带动画
    function fnSilkAnimation() {
        $.fn.silk({
            minSize: 10,
            maxSize: 20,
            newOn: 400
        });
    }

    // 丝带飘落
    $.fn.silk = function(options) {
        var documentHeight = $(document).height(),
            documentWidth = $(document).width(),
            defaults = {
                minSize: 15, //丝带的最小尺寸
                maxSize: 30, //丝带的最大尺寸
                newOn: 1000, //丝带出现的频率
                flakeColor: "#fff",
                imgUrl: "img/supermaca/",
                imgArr: ['silk01.png', 'silk02.png', 'silk03.png', 'silk04.png', 'silk05.png', 'silk06.png', 'silk07.png', 'silk08.png', 'silk09.png', 'silk10.png']
            },
            options = $.extend({}, defaults, options);
        var interval = setInterval(function() {
            var startPositionLeft = Math.random() * documentWidth - 40,
                startOpacity = 0.5 + Math.random(),
                sizeFlake = options.minSize + Math.random() * options.maxSize,
                endPositionTop = documentHeight - 40,
                endPositionLeft = Math.random() * documentWidth - 40,
                durationFall = documentHeight * 6 + Math.random() * 5000;

            var currImg = options.imgUrl + options.imgArr[Math.floor(Math.random() * 10)];
            var img = '<img src="' + currImg + '" width="' + sizeFlake + '" />';

            var $flake = $('<div class="silk-box" />').css({
                'position': 'absolute',
                'top': '0'
            }).html(img);
            $flake.clone().appendTo('body').css({
                left: startPositionLeft,
                opacity: startOpacity,
                color: options.flakeColor
            }).animate({
                top: endPositionTop,
                left: endPositionLeft,
                opacity: 0.2
            }, durationFall, 'linear', function() {
                $(this).remove();
            });
        }, options.newOn);
    };
    
})();