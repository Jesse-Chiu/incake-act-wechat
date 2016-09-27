(function() {
	$(function() {
		
		fnVoucher();
		
	});
	
	// 兑换券点击事件
    function fnVoucher(){
        var $oMaskResult = $('#mask-result'),
            $oMaskClose = $oMaskResult.find('.btn-result-close'),
            $oResultLogin = $oMaskResult.find('.result-login'),
            $oResultOld = $oMaskResult.find('.result-old'),
            $oBtnBuy = $('.btn-buy'),
            $oBtnRegister = $('#btn-register');

        $oBtnBuy.on('click', function(event) {
            event.preventDefault();
            /* Act on the event */

            // TODO 处理登录检测
			var isLogin = false;   // 用户是否登录 登录：true，未登录：false
			
			//判断用户是否登录
			if (isLogin) {
                $oResultOld.fadeIn(function(){
                    $oMaskResult.fadeIn();
                });
            }else{
                $oResultLogin.fadeIn(function(){
                    $oMaskResult.fadeIn();
                });
            }
			
        });

		$oBtnRegister.on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
           
            // TODO 处理新老用户检测
            var isUserExists = true;   // 用户是否存在 存在：true，不存在：false
            
            //判断是否是老用户
            if (isUserExists) {
            	$oResultLogin.hide();
                $oResultOld.fadeIn(function(){
                    $oMaskResult.fadeIn();
                });
            }else{
            	//跳转购买页
            	
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