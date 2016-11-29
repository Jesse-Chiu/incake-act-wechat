(function($, window, document) {
	$(function() {
		
		fnInit();
		
	});
	
    function fnInit(){
        var $oContent = $('.content'),
            $oBtnVcode = $oContent.find('.btn-vcode'),
            $oBtnBuy = $oContent.find('.btn-buy'),
            regMobile = true, // 手机号验证
            regVcode = true,  // 验证码验证
            regExchange = true, // 兑换码验证
            tips = '操作失败', // 提示信息
            icon = 'dialog2/images/icon/fail.png',
            time = 58;
            
        // 获取验证码
	    $oBtnVcode.on("click",function(){
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
        $oBtnBuy.on('click', function(event) {
        	
        	// 手机号验证
        	if(regMobile){
        		// 验证码验证
        		if(regVcode){
        			// 兑换码验证
        			if(regExchange){
        				tips = '优惠券将于24小时发送至您的账户';
        				icon = 'dialog2/images/icon/success.png';
        			}else{
        				tips = '兑换码不正确';
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

    }
})(Zepto, window, document);