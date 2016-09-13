(function(){

	$(function(){

		fnInit();		
		fnAddr();
	});

	function fnInit(){
		var $oCakes = $('.cakes'),
			$aCake = $oCakes.find('.cake'),
			$aCakeHide = $oCakes.find('.cake-hide'),
			$aNumber = $oCakes.find('.number'),
			$aPrice = $oCakes.find('.price'),
			$aPriceHide = $oCakes.find('.price-hide'),
			$aBtnBuy = $oCakes.find('a');
		
		for (var i = 0; i < $aNumber.length; i++) {
			if($($aNumber[i]).text()=='已售罄'){
				$($aCake[i]).hide();
				$($aCakeHide[i]).show();
				$($aNumber[i]).addClass('cur');
				$($aPrice[i]).hide();
				$($aPriceHide[i]).show();
				$($aBtnBuy[i]).hide();
			}
		}
		
		
	}
	
	function fnAddr(){
		var $oContent = $('.content'),
			$oAddr = $oContent.find('.address'),
			$oAddrCur = $oAddr.find('.addr-cur').children('span'),
			$aLi = $oAddr.find('li');
			
			$aLi.on('click',function(){
				$aLi.removeClass('cur');
				$(this).addClass('cur');
				$oAddrCur.text($(this).text());
			});
	}

})();