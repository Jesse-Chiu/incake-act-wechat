(function() {

    $(function() {
    	
    	// 城市选择
		fnSendCity();
		// 初始化抽奖
		fnInitLottery();
    });
    
    // 城市选择
    function fnSendCity(){
        var $oBanner = $('.banner'),
            $oLocation = $oBanner.find('.city-location'),
            $oArrow = $oBanner.find('.icon-arrow'),
            $oPopup = $oBanner.find('.location-popup'),
            $aLi = $oPopup.find('li');

        $oLocation.on('click', function() {
        	$oArrow.find('img').toggleClass('hide');
            
            if($oPopup.hasClass('active')){
           		$oPopup.hide(500);
            }else{
           		$oPopup.show(500);
            }
            $oPopup.toggleClass('active');
        });
		
		$aLi.on('click',function(){
			$aLi.removeClass('active');
			$(this).addClass('active');
			$('.addr-cur').text($(this).text());
			$oPopup.hide(500);
       		$oPopup.removeClass('active');
		});
    }
    
    function fnInitLottery() {
		var $oContent = $('.content'),
			$oChance = $oContent.find('.chance'),
			validNum = 0,
			isExpired = false; // 是否过期;
		
		// expireTime: 过期时间
		// validNum: 有效抽奖次数
		var _data = {
			expireTime: new Date(2016, 10, 9, 0, 35, 0), // 失效时间
			validNum: 3 // 有效抽奖次数
		};

		// 将当前有效抽奖次数放在全局变量validNum里面
		validNum = _data.validNum;
    	
		fnBindChance(_data);
    	function fnBindChance(_data) {

			var validTimes = _data.validNum,
				_html = '',
				startCountDown = false;
	
			var iNow = new Date().getTime();
			var timeDiff = _data.expireTime.getTime() - iNow;
	
			if(timeDiff < 0) { // 抽奖时间已失效
				isExpired = true;
				_html = '抽奖次数已失效，<span id="btn-timeout">为什么失效！</span>';
			} else {
	
				var diffSeconds = Math.round(timeDiff / 1000);
	
				// 判断当前时间离失效时间是否在15分钟之内
				if( diffSeconds <= 15 * 60 ) {
					var iMin = Math.floor(diffSeconds / 60),
						iSecond = diffSeconds % 60;
					_html = '可抽奖<span id="number">' + _data.validNum + '</span>次<span id="count-down">，<i id="minute">'+ iMin +'</i>分<i id="second">'+ iSecond + '</i>秒后失效</span>！';
					startCountDown = true;
				} else {
					_html = '可抽奖<span id="number">' + _data.validNum + '</span>次！';
				}
				
			}
			
			$oChance.html(_html);
			
			if(startCountDown) {
				// 开启倒计时
				fnMsgCountDown(_data.expireTime.getTime());
			}
		}
	
		// 抽奖过期倒计时
		function fnMsgCountDown(endTimestamp) {
			var $oMinute = $oChance.find("#minute"),
	            $oSecond = $oChance.find("#second"),
	            $oBtnGoOn = $('.btn-goOn'),
				timer = null,
	        	endTime = endTimestamp,
	        	curShowTimeSeconds = 0;
	
	        curShowTimeSeconds = getCurrentShowTimeSeconds();
	
	        timer = setInterval(function() {
	            render();
	            update();
	        }, 50);
	
	        function update() {
	            var nextShowTimeSeconds = getCurrentShowTimeSeconds();
	            var nextMinutes = parseInt(nextShowTimeSeconds / 60);
	            var nextSeconds = nextShowTimeSeconds % 60;
	            var curMinutes = parseInt(curShowTimeSeconds / 60);
	            var curSeconds = curShowTimeSeconds % 60;
	            if (nextSeconds != curSeconds) {
	                curShowTimeSeconds = nextShowTimeSeconds;
	            }
	        }
	
	        function render() {
	        	var minutes = parseInt(curShowTimeSeconds / 60);
	            var seconds = curShowTimeSeconds % 60;
	
	            if (minutes === 0 && seconds === 0) {
	                clearInterval(timer);
	                isExpired = true;
	                $oChance.html('抽奖次数已失效，<span id="btn-timeout">为什么失效！</span>');
	                $oBtnGoOn.addClass("btn-timeout");
	                $oBtnGoOn.unbind("click");
	            } else {
	            	$oMinute.html(minutes);
	            	$oSecond.html(seconds);
	            }            
	        }
	
	        function getCurrentShowTimeSeconds() {
	            var curTime = new Date().getTime();
	            var ret = endTime - curTime;
	            ret = Math.round(ret / 1000);
	            return ret >= 0 ? ret : 0;
	        }
		}
		
		// 转盘抽奖
		fnDraw($oContent,isExpired);
		
		// 查看我的奖品
		fnSelectPrize($oContent);
		
		// 加载失效提示窗
		var $oTimeOut = $(".result-timeout");
		
 		$oChance.on("click","#btn-timeout",function(){
 			fnPopupMask($oTimeOut,0);
 		});
		
    }
    
    // 查看我的奖品
    function fnSelectPrize(_content){
		var $oBtnMyGift = _content.find('.my-gift'),
			$oGetGift = $('.result-getGift'),
			$oLose = $('.result-lose'),
			status = false;
            
		 $oBtnMyGift.on('click',function(){
		 	// 验证是否获奖
		 	if(status){
		 		// -----------获得已中奖奖品信息更改弹窗内相应文字信息待完善
		 		
		 		fnPopupMask($oGetGift,0);
		 	}else{
		 		fnPopupMask($oLose,0);
		 	}
		 });
		 
    }
    
    // 转盘抽奖
    function fnDraw(_content,_isExpired){
		var $oBtnStart = _content.find('.btn-start'),
			$oResultLogin = $('.result-login');
            
		$oBtnStart.on('click',function(){
		 	// 验证登录状态
		 	if(fnTestLogin()){
		 		// 验证抽奖机会
		 		fnTestDrawNum(_content,_isExpired);
		 	}else{
		 		// 显示登录弹窗
		 		fnPopupMask($oResultLogin,0);
		 	}
		});
		 
    }

	// 验证登录状态并返回验证结果
    function fnTestLogin(){
    	var state = true;
    	// -----------------相关功能代码待完善
    	
		return state;
    }
    
    // 验证抽奖机会
    function fnTestDrawNum(_content,_isExpired){
    	var $oRotary = _content.find('.rotary'),
    		$oChance = _content.find('.chance'),
            $oDrawNum = $oChance.find('#number');
    	
    	// 倒计时验证
    	if(!_isExpired){
    		// 判断抽奖次数    
    		if($oDrawNum.text() == 0 && $oDrawNum.text()!=""){
				// 弹出次数不足提示窗
				var $oFrequency = $('.result-frequency');
		 		fnPopupMask($oFrequency,0);
			}else{
				if($oDrawNum.text() > 0){
					//改变抽奖次数
					if(fnRemoveDrawNum($oDrawNum)){
						// 开始抽奖
						fnLottery($oRotary);
					}
				}
			}
    	}	
    	
    }
    
    // 改变抽奖次数
	function fnRemoveDrawNum(_drawNum){
		var $num = _drawNum.text(),
			$oCountDown = $("#count-down");
		//仅有一次机会
		if($num==1){
			$oCountDown.hide();
		}
		$num--;
		_drawNum.text($num);
		return true;
	}
    
    // 开始抽奖
    function fnLottery(_rotary){
		var $oGiftItem = _rotary.find('.gift-item'),
            $oDrawNum = $('#number')
//          tl = new TimelineLite();
            
		var rotateFunc = function(_awards,_angle){  //_awards:奖项，_angle:奖项对应的角度
			$oGiftItem.stopRotate();
			$oGiftItem.rotate({
				angle:0, 
				duration: 5000, 
				animateTo: _angle+1440, //angle是图片上各奖项对应的角度，1440是让指针旋转4圈。所以最后的结束的角度就是这样子
				callback:function(){
					showPrize(_rotary,_awards);//返回对应奖项信息
				}
			}); 
//			tl.clear();
//			tl.to($oGiftItem, 8, {
//				rotation: _angle+3600,
//				ease: Circ.easeInOut,
//				onComplete: function() {
//					showPrize(_rotary,_awards);//返回对应奖项信息
//				}
//			});
		};
		
		// 判断对应奖品控制转盘角度
		// 此处设定奖品项为数组data中的每项
		var data = [1,2,3,4,5,6,7,8,9], //奖品项数组
			angle = 0; //转动角度
		//暂设为系统随机生成概率-------------------上线前需完善相关代码
		data = data[Math.floor(Math.random()*data.length)]; 
		
		switch (data){
			case 1:
				angle = 360;
				break;
			case 2:
				angle = 40;
				break;
			case 3:
				angle = 80;
				break;
			case 4:
				angle = 120;
				break;
			case 5:
				angle = 160;
				break;
			case 6:
				angle = 200;
				break;
			case 7:
				angle = 240;
				break;
			case 8:
				angle = 280;
				break;
			case 9:
				angle = 320;
				break;
		}
		// 转动转盘
		rotateFunc(data,angle);
		
    }
    
    // 获取对应奖品信息
	function showPrize(_rotary,awards){
		var $oArrow = _rotary.find('.gift-arrow'),
			$oGiftItem = _rotary.find('.gift-item'),
			$oBtnGoOn = _rotary.find('.btn-goOn'),
			prize = '.prize'+awards,
			$oPrize = _rotary.find(prize);
		
		//隐藏奖盘指针 & 奖盘展示奖品
		$oArrow.hide();
		$oGiftItem.hide();
		$(prize).css("display","block");
		$oBtnGoOn.css("display","block");
		
		//显示奖品对应弹窗提示
		fnPopupMask($oPrize,1);
		
		//继续抽奖
		lotteryGoOn($oArrow,$oPrize);
	}
	
	// 继续抽奖
	function lotteryGoOn(_arrow,prize){
		var $oGiftItem = _arrow.siblings('.gift-item'), 
			$oBtnGoOn = $('.btn-goOn');
		
		$oBtnGoOn.on('click',function(){
			//释放转盘&指针 & 隐藏上一次中奖信息
			$oGiftItem.show();
			_arrow.show();
			prize.hide();
			$(this).hide();
		});
	}
	
	// 弹窗提示
	function fnPopupMask(_result,_state){
		var $oMaskResult = $('#mask-result'),
			$oBtnRegister = $oMaskResult.find('#btn-register'),
			$aBtnClose = null;
		
		if(_state==1){
			// 奖品内容
			var $oTipText = $oMaskResult.find(".result-winning").find('.tip-text'),
				prize = _result.attr("name"),
				tip = "";
			if(_result.hasClass("coupon")){
				tip = "</span>，该奖品会在1天内发放到您的账户，请注意查看哦～";
			}else{
				if($(".location-popup .active").text()=="厦门"){
					tip = "</span>，该奖品会随单寄出，收到蛋糕后请注意查收～";
				}else{
					tip = "</span>，该奖品会在完成配送后7个工作日内寄出～";
				}
			}
			prize = "恭喜获得<span>"+prize+tip;
			$oTipText.html(prize);
			
			_result = $(".result-winning");
			
		}
		
		// 展示相应弹窗
		_result.fadeIn(function(){
        	$oMaskResult.fadeIn();
        });

		// 判断是登录弹窗or其他弹窗
		if(_result.find("a").hasClass("btn-ok")){
			$aBtnClose = $oMaskResult.find(".btn-ok");			
		}else{
			$aBtnClose = $oMaskResult.find(".btn-result-close");
		}
		
		// 关闭弹窗
		$aBtnClose.on("click",function(){
			_result.fadeOut();
			$oMaskResult.fadeOut();
		});
		
		// 完成登录or注册事件
		$oBtnRegister.on("click",function(){
			//----------------相关功能代码待完善
			
			// 验证抽奖机会
	 		fnTestDrawNum($('.content')); 
		});
		
	}

})();
