(function() {
	$(function() {
		
		fnVoucher();
		
	});
	
	// 兑换券领取事件
    function fnVoucher(){
        var $oMaskResult = $('#mask-result'),
            $oMaskClose = $oMaskResult.find('.btn-result-close'),
            $oResultLogin = $oMaskResult.find('.result-login'),
            $oResultOk = $oMaskResult.find('.result-ok'),
            $oResultFail = $oMaskResult.find('.result-fail'),
            $oBtnBuy = $('.btn-buy'),
            $oBtnRegister = $('#btn-register'),
            isLogin = false,
            isCouponExists = false;   // 是否领取过 存在：true，不存在：false

        $oBtnBuy.on('click', function(event) {
            event.preventDefault();
            /* Act on the event */

			//判断用户是否登录
			if (isLogin) {
				// 处理领用检测
	            if (isCouponExists) {
	            	$oResultLogin.hide();
	                $oResultFail.fadeIn(function(){
	                    $oMaskResult.fadeIn();
	                });
	            }else{
	            	$oResultLogin.hide();
	                $oResultOk.fadeIn(function(){
	                    $oMaskResult.fadeIn();
	                });
	            }
            }else{
                $oResultLogin.fadeIn(function(){
                    $oMaskResult.fadeIn();
                });
            }
			
        });

		$oBtnRegister.on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
           
            // TODO 处理领用检测
            if (isCouponExists) {
            	$oResultLogin.hide();
                $oResultFail.fadeIn(function(){
                    $oMaskResult.fadeIn();
                });
            }else{
            	$oResultLogin.hide();
                $oResultOk.fadeIn(function(){
                    $oMaskResult.fadeIn();
                });
            }
            
        });
		
        $oMaskClose.on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $oMaskResult.find('.result-info').hide(function(){
                $oMaskResult.hide();
            });
        });
    }
    
})();