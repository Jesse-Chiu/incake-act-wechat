(function() {
	
	var $oMask = $('.mask');
	
	$(function() {
		// 邀请好友获得抽奖码
		$oMask.hide();
		fnInvitation();
	});
	
	function fnInvitation() {
		var $oInvitation = $('.invitation');
		// 邀请好友获得抽奖码
		$oInvitation.on('click',function(){
			$('body').css("overflow", "hidden");
			// 禁用页面拖动
			$('body').bind('touchmove', function(e) {
				e.preventDefault();
			});
			$oMask.show();
		});
	}
	
})();