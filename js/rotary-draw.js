(function() {

    $(function() {
		fnInit();
    });
    
    function fnInit() {
		var $oContent = $('.content');
    	
    	// 城市选择
		fnSendCity($oContent);
		// 转盘抽奖
		fnDraw($oContent);
    }
    
    // 城市选择
    function fnSendCity(_content){
        var $oBanner = _content.find('.banner'),
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
    
    // 转盘抽奖
    function fnDraw(_content){
		var $oBtnStart = _content.find('.btn-start');
            
		 $oBtnStart.on('click',function(){
		 	// 验证抽奖机会
		 	fnTestDrawNum(_content);
		 });
		 
    }
    
    // 验证抽奖机会
    function fnTestDrawNum(_content){
    	var $oRotary = _content.find('.rotary'),
            $oDrawNum = _content.find('#number');
    	
		if($oDrawNum.text()>0){
			//改变抽奖次数
			if(removeDrawNum($oDrawNum)){
				// 开始抽奖
				Lottery($oRotary);
			}
			
		}else{
			//-----------------------完善相关功能代码
			alert("没有机会喽~");
		}
    	
    }
    
    // 改变抽奖次数-----------------------完善相关功能代码
	function removeDrawNum(drawNum){
		var $num = drawNum.text();
		//仅有一次机会
		if($num==1){
			
		}else{ //多于一次机会
			
		}
		return true;
	}
    
    // 开始抽奖
    function Lottery(rotary){
		var $oGiftItem = rotary.find('.gift-item'),
            $oDrawNum = $('#number');
            
		//超时函数
		var timeOut = function(){  
			$oGiftItem.rotate({
				angle:0, 
				duration: 10000, 
				animateTo: 2160, //设置请求超时后返回的角度，360*6
				callback:function(){
					alert('网络超时');
					//还原抽奖次数 & 重启定时器
					$oDrawNum.html(parseInt($oDrawNum.text())+1);
					//-------补充：重启定时器相关代码
					
				}
			}); 
		}; 
		
		var rotateFunc = function(awards,angle){  //awards:奖项，angle:奖项对应的角度
			$oGiftItem.stopRotate();
			$oGiftItem.rotate({
				angle:0, 
				duration: 5000, 
				animateTo: angle+1440, //angle是图片上各奖项对应的角度，1440是让指针旋转4圈。所以最后的结束的角度就是这样子
				callback:function(){
					showPrize(rotary,awards);//返回对应奖项信息
				}
			}); 
		};
		
		$oGiftItem.rotate({ 
		    bind: {
				click: function(){
					// 判断超时事件，并赋给time相应状态值	【0：超时；1：正常】
					var time = [0,1];
					// 此处time值临时设定为系统随机生成
					time = time[Math.floor(Math.random()*time.length)];
					
					if(time==0){
						timeOut(); //网络超时
					}
					if(time==1){
						// 判断对应奖品控制转盘角度
						// 此处临时设定奖品项为数组data中的每项
						var data = [1,2,3,4,5,6,7,8,9], //奖品项数组
							angle = 0; //转动角度
						//暂设为系统随机生成概率
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
				}
			} 
		});
    }
    
    // 获取对应奖品信息
	function showPrize(_rotary,awards){
		var $oArrow = _rotary.find('gift-arrow'),
			prize = '.prize'+awards,
			$oPrize = _rotary.find(prize);
		
		//隐藏奖盘指针 & 奖盘展示奖品
		$oArrow.hide();
		$oPrize.fadeIn(500);
		//显示继续抽奖按钮-----------完善相关功能代码
		
		//显示弹窗提示
		lotteryTip();
		//继续抽奖
		lotteryGoOn($oArrow,$oPrize);
	}
	
	// 继续抽奖----------------完善相关功能代码
	function lotteryGoOn(_arrow,prize){
//		var $oBtnGoOn = $('#btn_goOn');
//		
//		$oBtnGoOn.on('click',function(){
//			//释放指针 & 隐藏上一次中奖信息
//			_arrow.show();
//			prize.hide();
//		});
	}
	
	// 弹窗提示----------------完善相关功能代码
	function lotteryTip(){
		
	}

})();
