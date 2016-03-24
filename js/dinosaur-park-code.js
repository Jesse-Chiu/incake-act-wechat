(function() {
	
	var $oMask = $('.mask');
	
	$(function() {
		// 邀请好友获得抽奖码
		$oMask.hide();
		fnLottery();
	});
	
	function fnLottery() {
		var $oLottery = $('.lottery');
		var $oBtnClose = $('.btn-close');
		// 邀请好友获得抽奖码
		$oLottery.on('click',function(){
			$('body').css("overflow", "hidden");
			// 禁用页面拖动
			$('body').bind('touchmove', function(e) {
				e.preventDefault();
			});
			$oMask.show();
		});
		$oBtnClose.on('click',function(){
			$('body').css("overflow", "auto");
			$('body').unbind('touchmove');
			$oMask.hide();
		});
	}
	
})();