(function() {
	$(function() {
		
		fnVoucher();
		
	});
	
	// 兑换券点击事件
    function fnVoucher(){
        var $oMaskResult = $('#mask-result'),
	        $oMaskClose = $oMaskResult.find('.btn-result-close'),
	        $oResultLogin = $oMaskResult.find('.result-login'),
	        $oResultFalse = $oMaskResult.find('.result-false'),
	        $oResultTrue = $oMaskResult.find('.result-true'),
	        $oBtnBuy = $('.btn-buy'),
	        $oBtnRegister = $('#btn-register');

        $oBtnBuy.on('click', function(event) {
            event.preventDefault();
            /* Act on the event */

			var isLogin = false;   // 用户是否登录 登录：true，未登录：false

			if (isLogin) {
				checkStatus(status);
            }else{
                $oResultLogin.fadeIn(function(){
                    $oMaskResult.fadeIn();
                });
            }
			
        });

		$oBtnRegister.on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            checkStatus(status);
            
        });
		
        $oMaskClose.on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $oMaskResult.find('.result-info').hide(function(){
                $oMaskResult.hide();
            });
        });
    }
    
    // TODO 检测是否已领取
    function checkStatus(){
    	var $oMaskResult = $('#mask-result'),
	        $oResultLogin = $oMaskResult.find('.result-login'),
	        $oResultFalse = $oMaskResult.find('.result-false'),
	        $oResultTrue = $oMaskResult.find('.result-true'),
	        status = false;	   // 用户是否领取 已领：true，未领：false
    	
    	$oResultLogin.hide();
        //判断用户是否领取 已领：true，未领：false
        if (status) {
            $oResultFalse.fadeIn(function(){
                $oMaskResult.fadeIn();
            });
        }else{
        	$oResultTrue.fadeIn(function(){
                $oMaskResult.fadeIn();
            });
        	
        }
    }
	
})();