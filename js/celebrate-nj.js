(function() {
	
	$(function() {
		changePage();
		popupClose();
		popupShare();
	});
	
	function changePage() {
		var $oPage1 = $('.page01');
		var $oBtnBuy = $oPage1.find('.btnBuy');
		var $oPage2 = $('.page02');
		var $oBtnSubmit = $oPage2.find('.btnSubmit');
		var $oPage3 = $('.page03');
		$oBtnBuy.click(function(){
			$oPage1.addClass('hide');
			$oPage2.removeClass('hide');
		});
		$oBtnSubmit.click(function(){
			$oPage2.addClass('hide');
			$oPage3.removeClass('hide');
		});
	}

	function popupClose() { 
		var $oPopupShow = $('#popup-show');
		var $oBtnClose = $oPopupShow.find('a');
		$oBtnClose.click(function(){
			$oPopupShow.hide();
		});
	}
	
	function popupShare() { 
		var $oBtnShare = $('.btnShare');
		var $oPopupShare = $('#popup-share');
		$oBtnShare.click(function(){
			$oPopupShare.show();
		});
	}
	
})();