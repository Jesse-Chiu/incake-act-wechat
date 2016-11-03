(function() {

    $(function() {
		
		var $oContent = $('.content'),
			$oRotaryBg = $('.content').find('.rotary-bg');
    	
    	// 转盘LED
    	setInterval(function(){
    		var _src = $oRotaryBg.attr('src'),
				state = _src.indexOf('turntable_bg.png');
			
	    	if(state > 0){
	    		_src = _src.replace("_bg","_bg2");
	    	}else{
	    		_src = _src.replace("_bg2","_bg");
	    	}
		  	$oRotaryBg.attr('src',_src);
    	},500);
    	
    	// 城市选择
		fnSendCity($oContent);
		// 验证抽奖机会
		fnTestDraw($oContent);

    });
    
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
           		$oPopup.fadeOut(500);
            }else{
           		$oPopup.fadeIn(500);
            }
            
            $oPopup.toggleClass('active');
        });
		
		$aLi.on('click',function(){
			$aLi.removeClass('active');
			$(this).addClass('active');
			$('.addr-cur').text($(this).text());
			$oPopup.fadeOut(500);
       		$oPopup.removeClass('active');
		});
        
    }
    
    // 验证抽奖机会
    function fnTestDraw(_content){
    	var $oRotary = _content.find('.rotary'),
            $oBtnStart = $oRotary.find('.btn-start'),
            $oDrawNum = _content.find('#number');
    	
    	$oBtnStart.on('click',function(){
    		if($oDrawNum.text()>0){
//  			if($oDrawNum.text()==1){
//  				
//  			}
				//减少抽奖次数
				removeDrawNum();
				// 开始抽奖
    			Lottery($oRotary);
    		}else{
    			alert("没有机会喽~");
    		}
    	});
    	
    }
    
    // 减少抽奖机会-----------------------
	function removeLottery(){
		var $num = $('#lotteryNum').text();
		if($num>0){
			$num-=1;
			$('#lotteryNum').html($num);
			return true;
		}else{
			return false;
		}
		
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
					//还原之前状态
					$oDrawNum.html(parseInt($oDrawNum.text())+1); 
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
					showPrize(awards);//展示对应奖项
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
    
    // 奖品展示-----------------------------
	function showPrize(awards){
		var $prizeBg = $('.prize-bg');
		var prize = '.prize'+awards;
		var $prize = $(prize);
		
		//隐藏抽奖模块
		showRotaryTable(0);
		//展示奖品
		$prizeBg.removeClass('hide');
		$prize.removeClass('hide');
		//继续抽奖
		lotteryGoOn($prizeBg,$prize);
	}

})();
