(function($, window, document) {
	$(function() {
		
		// 解决Zepto点透bug
		FastClick.attach(document.body);

		// 初始化操作
		fnInit();
		
		// 城市选择
		fnSendCity();
		
	});
	
    function fnInit(){
        var $oContent = $('.content'),
            $oBtnVcode = $oContent.find('.btn-vcode'),
            $oBtnExchange = $oContent.find('.btn-exchange'),
            $oMaskResult = $('#mask-result'),
            $oResultInfo = $oMaskResult.find(".result-info"),
            $oBtnCloseMask = $oMaskResult.find('.btn-result-close'),
            regOverdue = false, // 活动过期验证
            regMobile = false, // 手机号验证
            regVcode = false,  // 验证码验证
            regCoupon = false,  // 优惠券验证
            regCity = true,	//城市选择
            tips = '操作失败', // 提示信息
            icon = 'dialog2/images/icon/fail.png',
            time = 58;
            
        // 活动过期验证
        if(regOverdue){
    		var $oMaskResult = $('#mask-result'),
    			$oTimeOut = $oMaskResult.find(".result-timeout"),
    			$aBtnClose =  $oTimeOut.find(".btn-close");
    		
    		// 展示相应弹窗
        	$oMaskResult.css("display",'block');
    		$oTimeOut.css('display','block');
        	
    		// 关闭弹窗
    		$aBtnClose.on("click",function(){
    			$oMaskResult.css("display",'none');
        		$oTimeOut.css('display','none');
    		});
        }
        
        // 城市选择验证
        if(regCity){
    		var $oMaskResult = $('#mask-result'),
    			$oCheckCity = $oMaskResult.find(".result-check-city"),
    			$ali = $oCheckCity.find('li'),
    			$aBtnConfirm =  $oCheckCity.find(".btn-confirm");
    		
    		// 展示相应弹窗
        	$oMaskResult.css("display",'block');
    		$oCheckCity.css('display','block');
        	
        	$ali.on('tap',function(){
        		$ali.removeClass('active');
        		$(this).addClass('active');
        	});
        	
    		// 关闭弹窗
    		$aBtnConfirm.on("tap",function(){
    			$oMaskResult.css("display",'none');
        		$oCheckCity.css('display','none');
    		});
        }
        
        // 获取验证码
	    $oBtnVcode.on("tap",function(){
	    	$oBtnVcode.css('backgroundColor','#c8c8c8').text('59" 后重新发送');
	    	var interval = setInterval(function(){
	    		$oBtnVcode.text(time-- +'" 后重新发送');
	    		if(time==-1){
	    			clearInterval(interval);
	    			time = 58;
	    			$oBtnVcode.css('backgroundColor','#726d81');
	    			$oBtnVcode.text('获取验证码');
	    		}
	    	},1000);
		});
        
	    // 立即兑换
        $oBtnExchange.on('tap', function(event) {
        	
        	// 手机号验证
        	if(regMobile){
        		// 验证码验证
        		if(regVcode){
        			// 优惠券验证
        			if(regCoupon){
        				tips = '优惠券可在配送完成后24小时内激活使用';
        				icon = 'dialog2/images/icon/success.png';
        			}else{
        				tips = '没有可使用的优惠券';
        			}
        		}else{
        			tips = '验证码不正确';
        		}
        	}else{
        		tips = '手机号码格式不正确';
        	}
        	
        	var dialog = $(document).dialog({
				type: 'toast',
				infoIcon: icon,
				infoText: tips,
				autoClose: '1500'
			});
			
        });
        
        // 关闭弹窗
		$oBtnCloseMask.on("tap",function(){
			$oMaskResult.css("display",'none');
    		$oResultInfo.css('display','none');
		});

    }
    
    // 城市选择
    function fnSendCity(){
        var $oContent = $('.content'),
            $oLocation = $oContent.find('.city-location'),
            $oPopup = $oContent.find('.location-popup'),
            $aLi = $oPopup.find('li');

        $oLocation.on('tap', function() {
            if($oPopup.hasClass('active')){
           		$oPopup.hide(500);
           		$oPopup.removeClass('active');
            }else{
           		$oPopup.show(500);
           		$oPopup.addClass('active');
            }
        });
		
		$aLi.on('tap',function(){
			$aLi.removeClass('active');
			$(this).addClass('active');
			$('.addr-cur').text($(this).text());
			$oPopup.hide(500);
       		$oPopup.removeClass('active');
		});
        
    }
    
})(Zepto, window, document);