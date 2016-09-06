(function() {

    $(function() {

		fnJoin();

    });
    
    // 注册按钮点击事件
    function fnJoin(){
    	var $oBtnJoin = $('#btn-join'),
         	$oMaskResult = $('#mask-result'),
            $oBtnClose = $oMaskResult.find('.btn-close');

    	$oBtnJoin.on('click', function() {
			// 用户是否可参与活动 可以：true 不可：false
			var status = false;
            
            if(status){
            	location.href = 'questionnaireB.html';
        	}else{
        		$oMaskResult.fadeIn(500);
        	}
        });

        $oBtnClose.on('click', function() {
            $oMaskResult.fadeOut(500);
        });
        
    }

})();
