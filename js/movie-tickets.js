(function() {
	$(function() {
		
		/* 城市选择 */
		var $oSendCity = $('.send-city');
		var $a = $oSendCity.find('a');
		$a.on('click',function(){
			$a.removeClass('active');
			$(this).addClass('active');
		});
		
	});
})();