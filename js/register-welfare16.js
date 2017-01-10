(function($, window, document) {
	$(function() {
		
		// 解决Zepto点透bug
		FastClick.attach(document.body);
		
		// 初始化操作
		fnInit();
		
	});
	
    function fnInit(){
        var $oContent = $('.content'),
            $oMaskResult = $('#mask-result'),
            $oBtnVcode = $oMaskResult.find('.btn-vcode'),
            $oResultInfo = $oMaskResult.find(".result-info"),
            $oBtnReg = $oResultInfo.find('#btn-register'),
            $oRegTip = $oResultInfo.find('.tips'),
            $oBtnCloseMask = $oMaskResult.find('.btn-result-close'),
            regMobile = true, // 手机号验证
            regVcode = true,  // 验证码验证
            time = 58;
        
        setTimeout(function(){
        	$oMaskResult.fadeIn();
        },2000);
        
        
        // 获取验证码
	    $oBtnVcode.on("tap",function(){
	    	$oBtnVcode.text('59" 后重新发送');
	    	var interval = setInterval(function(){
	    		$oBtnVcode.text(time-- +'" 后重新发送');
	    		if(time==-1){
	    			clearInterval(interval);
	    			time = 58;
	    			$oBtnVcode.text('获取验证码');
	    		}
	    	},1000);
		});
        
	    // 立即领取
        $oBtnReg.on('tap', function(event) {
        	
        	// 手机号验证
        	if(regMobile){
        		// 验证码验证
        		if(regVcode){
        			$oMaskResult.fadeOut();
//  				setTimeout(function(){
			        	$(document).dialog({
							type: 'toast',
							infoIcon: 'dialog2/images/icon/success.png',
							infoText: '领取成功',
							autoClose: '1500'
						});
//			        },1000);
    				
        		}else{
        			$oRegTip.text('验证码不正确');
        		}
        	}else{
        		$oRegTip.text('手机号码格式不正确');
        	}
        	
        });
        
        // 关闭弹窗
		$oBtnCloseMask.on("tap",function(){
			$oMaskResult.fadeOut();
		});

    }
    
})(Zepto, window, document);