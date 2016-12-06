(function($, window, document) {
	
	var tl = new TimelineLite();
	
	$(function() {
		
		fnInit();
		
	});
	
	// 滑倒指定位置
    function fnScrollTop($obj) {
    	tl.clear();
    	tl.to($('html,body'), 0.8, {
    		scrollTop: $obj.offset().top
    	});
    }
    
    function fnInit(){
        var $oContent = $('.content'),
            $oBtnDown = $oContent.find('.btn-down'),
            $oExchange = $('.exchange'),
            $oBtnVcode = $oContent.find('.btn-vcode'),
            $oBtnBuy = $oContent.find('.btn-buy'),
            $oMaskResult = $('#mask-result'),
			$oBtnClose = $oMaskResult.find(".btn-close"),
			$oBtnOk =  $oMaskResult.find(".btn-ok"),
			$aLi = $oMaskResult.find('li'),
            regCity = false,
            regMobile = true, // 手机号验证
            regVcode = true,  // 验证码验证
            tips = '操作失败', // 提示信息
            time = 58;
        
        // 滑到指定位置
        $oBtnDown.on('click', function() {
        	fnScrollTop($oExchange);
        });
        
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
        			// 选择领券城市
		    		$oMaskResult.css("display",'block');
        		}else{
        			fnPopupShow('验证码不正确');
        		}
        	}else{
        		fnPopupShow('手机号码格式不正确');
        	}
        	
        });
        
        // 关闭城市选择弹窗
        $oBtnClose.on('click', function() {
        	$oMaskResult.css("display",'none');
        });
        
        // 选择城市
        $aLi.on('click', function() {
        	$(this).addClass('active').siblings().removeClass('active');
        	regCity = true;
        });
        
        // 确定城市选择
        $oBtnOk.on('click', function() {
        	$oMaskResult.css("display",'none');
        	if(regCity){
        		var dialog = $(document).dialog({
					type: 'toast',
					infoIcon: 'dialog2/images/icon/success.png',
					infoText: '优惠券将于24小时发送至您的账户',
					autoClose: '1500'
				});
        	}
        });

    }
    
    function fnPopupShow(_tip){
    	var dialog = $(document).dialog({
			type: 'toast',
			infoIcon: 'dialog2/images/icon/fail.png',
			infoText: _tip,
			autoClose: '1500'
		});
    }
    
})(Zepto, window, document);