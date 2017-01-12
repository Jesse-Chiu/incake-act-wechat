(function($, window, document) {
	$(function() {
		
		// 解决Zepto点透bug
		FastClick.attach(document.body);
		
		// 初始化操作
		fnInit();
		
	});
	
    function fnInit(){
        var $oContent = $('.content'),
        	$oBtnBuy = $oContent.find('.btn-buy'),
            $oMaskTip = $('#mask-tip'),
            $oMaskResult = $('#mask-result'),
            $oBtnVcode = $oMaskResult.find('.btn-vcode'),
            $oResultInfo = $oMaskResult.find(".result-info"),
            $oBtnReg = $oResultInfo.find('#btn-register'),
            $oBtnOther = $oResultInfo.find('.btn-other'),
            $oRegTip = $oResultInfo.find('.tips'),
            $oBtnCloseMask = $oMaskResult.find('.btn-result-close'),
//          regLogin = false, // 验证是否登录
            regMobile = true, // 手机号验证
            regVcode = true,  // 验证码验证
            regUser = false, // 新老用户验证   true：新用户   false：老用户
            tipIcon = 'dialog2/images/icon/success.png',
            tipText = '领取成功',
            count = 0, // 验证重复获取验证码
            _interval = '',
            time = 58;
        
        $oMaskTip.css({
			'right':'0',
			'transition':'.5s'
		});
        setTimeout(function(){
        	$oMaskTip.css({
				'right':'-30%',
				'transition':'.5s'
			});
        	$oMaskResult.fadeIn();
        },2000);
        
        // 获取验证码
	    $oBtnVcode.on("tap",function(){
	    	// 验证重复获取验证码
	    	if(count == 0){
	    		count = 1;
		    	$oBtnVcode.css({'background-color':'#99807f','border-color':'#99807f'});
		    	$oBtnVcode.text('59" 后重新发送');
		    	_interval = setInterval(function(){
		    		$oBtnVcode.text(time-- +'" 后重新发送');
		    		if(time==-1){
		    			count = 0;
		    			clearInterval(_interval);
		    			time = 58;
		    			$oBtnVcode.text('获取验证码');
		    			$oBtnVcode.css({'background-color':'#983023','border-color':'#983023'});
		    		}
		    	},1000);
	    	}	    	
		});
        
	    // 立即领取
        $oBtnReg.on('tap', function(event) {
        	
        	// 手机号验证
        	if(regMobile){
        		// 验证码验证
        		if(regVcode){
        			//新老用户验证
        			if(regUser){
						tipIcon='dialog2/images/icon/success.png';
						tipText='领取成功';
        			}else{
        				tipIcon = 'dialog2/images/icon/fail.png';
						tipText = '您已是老用户';
        			}
	    			clearInterval(_interval);
        			$oMaskResult.fadeOut();
		        	$(document).dialog({
						type: 'toast',
						infoIcon: tipIcon,
						infoText: tipText,
						autoClose: '1500'
					});
					$oMaskTip.css({
						'right':'0',
						'transition':'.5s'
					});
//					regLogin = true;
        		}else{
        			$oRegTip.text('验证码不正确');
        		}
        	}else{
        		$oRegTip.text('手机号码格式不正确');
        	}
        	
        });
        
        // 关闭弹窗
		$oBtnCloseMask.on("tap",function(){
			$oResultInfo.find('input').val('');
			$oBtnVcode.text('获取验证码');
			$oBtnVcode.css({'background-color':'#983023','border-color':'#983023'});
			clearInterval(_interval);
			time = 58;
			count = 0;
			$oMaskResult.fadeOut();
			$oMaskTip.css({
				'right':'0',
				'transition':'.5s'
			});
		});
		
		// 快注弹窗
		$oMaskTip.on('tap',function(){
			$oMaskTip.css({
				'right':'-30%',
				'transition':'.5s'
			});
			$oBtnReg.show();
			$oBtnOther.hide();
        	$oMaskResult.fadeIn();
		});
		
		// 立即订购
		$oBtnBuy.on("tap",function(){
//			if(regLogin){
//				// 跳转至相应页面
//			}else{
				$oBtnReg.hide();
				$oBtnOther.show();
				$oMaskTip.css({
					'right':'-30%',
					'transition':'.5s'
				});
				$oMaskResult.fadeIn();
//			}
		});
		
    }
    
})(Zepto, window, document);