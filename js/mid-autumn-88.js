(function() {

    $(function() {

		fnRegister();

    });
    
    // 注册按钮点击事件
    function fnRegister(){
        var $oMaskResult = $('#mask-result'),
            $oResultOk = $oMaskResult.find('.result-ok'),
            $oResultFail = $oMaskResult.find('.result-fail'),
            $oResultRepeat = $oMaskResult.find('.result-repeat'),
            $oMaskShare = $oMaskResult.find('.share'),
            $oBtnRegister = $('#btn-register'),
            $oBtnShare = $oMaskResult.find('.btn-share'),
            $oBtnSelect = $oMaskResult.find('.btn-select'),
            $oBtnClose = $oMaskResult.find('.btn-result-close');

        $oBtnRegister.on('click', function(event) {
            event.preventDefault();
            /* Act on the event */

            // TODO 处理新老用户检测及登录注册逻辑
			var isCouponExists = false,   // 用户是否已领券 是:true, 否：false
            	isUserExists = false;   // 用户是否存在 存在：true，不存在：false
            
            if(isCouponExists){
        		$oResultRepeat.show(function(){
        			$oBtnShare.hide();
        			$oBtnSelect.show();
        			$oMaskResult.show();
        		});
        	}else{
				if (isUserExists) {
					$oResultFail.show(function(){
                        $oMaskResult.show();
                    });
				}else{
                    $oResultOk.show(function(){
                    	$oMaskResult.show();
                	});
                }
            }
            
        });

        $oBtnClose.on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $oMaskResult.find('.result-info').hide(function(){
                $oMaskResult.hide();
            });
        });
        
        $oBtnShare.on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $oMaskResult.find('.result-info').hide(function(){
            	$oBtnShare.hide();
            	$oMaskShare.show();
            });
        });
    }

})();
