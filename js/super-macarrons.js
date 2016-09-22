(function() {

    $(function() {
		
		// 初始化产品库存
		fnInit();
		// 城市选择
		fnSendCity();

    });
    
    function fnInit(){
    	var $oMacaBox = $('.maca-box'),
    		macaNum = 0; // 库存数量
    		
    	if(macaNum==0){
    		$oMacaBox.find('img').toggleClass('hide');
    		$oMacaBox.find('a').hide();
    	}
    	
    	
    }
    
    // 城市选择
    function fnSendCity(){
        var $oContent = $('.content'),
            $oLocation = $oContent.find('.city-location'),
            $oPopup = $oContent.find('.location-popup'),
            $aLi = $oPopup.find('li');

        $oLocation.on('click', function() {
            if($oPopup.hasClass('active')){
           		$oPopup.hide(500);
           		$oPopup.removeClass('active');
            }else{
           		$oPopup.show(500);
           		$oPopup.addClass('active');
            }
        });
		
		$aLi.on('click',function(){
			$aLi.removeClass('active');
			$(this).addClass('active');
			$('.addr-cur').text($(this).text());
			$oPopup.hide(500);
       		$oPopup.removeClass('active');
		});
        
    }

})();
