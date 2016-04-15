(function() {
		
	$(function() {	
		//弹窗
		fnPopupMask();
		
	});
	
	/* 弹窗 */
	function fnPopupMask(){
		var $oReceive = $('#receive');
		var $oPopupMask = $('#popup-mask');
		var $oBtnReceive = $oPopupMask.find('.btnReceive');
		var $aBtnClose = $oPopupMask.find('.btnClose');
		$oReceive.on('click',function(){
			$oPopupMask.removeClass('hide');
		});
		$oBtnReceive.on('click',function(){
			$(this).parents('.box-left').addClass('hide').siblings('.box-right').removeClass('hide');
		});
		$aBtnClose.on('click',function(){
			$oPopupMask.addClass('hide');
		});
	}
	
})();