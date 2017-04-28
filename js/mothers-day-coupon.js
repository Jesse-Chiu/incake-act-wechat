(function(){
	$(function(){
		
		fnInit();

	});
	
	function fnInit() {
		var $oContent = $(".content"),
			$aBtnExchange = $oContent.find(".btn-exchange"),
			$oMask = $("#mask-result"),
			$oBtnSure = $oMask.find("#btn-sure");
		
		$aBtnExchange.on("click",function(){
			$oMask.fadeIn();
		});
		
		$oBtnSure.on("click",function(){
			$oMask.fadeOut();
		});
		
	}
	
})();