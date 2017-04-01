(function() {
	
	$(function() {
		
		fnInit();
		
	});
	
    function fnInit(){
        var $oMaskResult = $('#mask-result'),
			$oBtnClose = $oMaskResult.find(".btn-close");
        
        // 关闭弹窗
        $oBtnClose.on('click', function() {
        	$oMaskResult.hide();
        });
        

    }
    
})();