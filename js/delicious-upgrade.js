(function(){

	$(function(){

		fnInit();		

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

})();