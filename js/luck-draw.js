(function() {

    $(function() {

        // 抽奖
        popupPrize();

    });

    function popupPrize() { 
    	var $oOrders = $('.orders'),
    		$oBtnLottery = $oOrders.find('#btn-lottery'),
    		$oTips = $oOrders.find('.tips'),
			$oGift = $('.gift'),
			$oImg = $oGift.find('img'),
			$oPopupShow = $('#popup-show'),
			$oGoLottery = $oPopupShow.find('.go-lottery'),
			$oPrizeShow = $('#prize-show'),
			$oBtnClose = $oPrizeShow.find('.btn-close'), 
			orderNum = 1,
    		phoneNum = 1,
			prize = 1;
		
		$oBtnLottery.click(function(){
			if(orderNum==0){
				$oTips.find('span').text('订单号');
				$oTips.show();
			}else if(phoneNum==0){
				$oTips.find('span').text('手机号');
				$oTips.show();
			}else{
				$oOrders.hide();
				$oGift.show();
				$oPopupShow.show();
			}
		});
		
		$oGoLottery.click(function(){
			$oImg.css({"visibility":"visible"}).addClass('animation');
			$oPopupShow.hide();
			setTimeout(function(){
				$oImg.removeClass('animation');
				if(prize==1){
					$oPrizeShow.find('.prize01').removeClass('hide');
				}else{
					$oPrizeShow.find('.prize02').removeClass('hide');
				}
				$oPrizeShow.show();
			},1000);
		});
		
		$oBtnClose.click(function(){
			$oPrizeShow.hide();
		});
		
	}
})();
