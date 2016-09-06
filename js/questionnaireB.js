(function() {

    $(function() {

		fnInit();

    });
    
    function fnInit(){
    	var $oFrmQst = $('#frm-question'),
         	$aSex = $oFrmQst.find('.sex a'),
            $aCake = $oFrmQst.find('.question01 li'),
            $aPro = $oFrmQst.find('.question02 a'),
            $oSuggest = $oFrmQst.find('#txtSuggest'),
            $aTextarea = $oFrmQst.find('textarea'),
            $oBtnSubmit = $('#btn-submit'),
            $oMask = $('#mask-result'),
            $oBtnClose = $oMask.find('.btn-close');

    	$aSex.on('click', function() {
    		$aSex.removeClass('cur');
    		$(this).addClass('cur');
        });
    	
    	$aCake.on('click', function() {
    		$(this).toggleClass('cur');
        });
    	
    	$aPro.on('click', function() {
    		$aPro.removeClass('cur');
    		$(this).addClass('cur');
    		if($(this).hasClass('other')){
    			$(this).siblings('textarea').show();
    			$(this).siblings('.length').show();
    		}else{
    			$(this).siblings('textarea').hide();
    			$(this).siblings('.length').hide();
    		}
        });
    	
    	$aTextarea.on('keyup',function(){
    		var curLength=$(this).val().length; 
    		if(curLength>200){
				var txt=$(this).val().substr(0,200); 
				$(this).val(txt); 
			}else{ 
				$(this).siblings('.length').text(200-curLength+'/200'); 
			} 
    	});
    	
    	$oBtnSubmit.on('click', function() {
    		if(!$aSex.hasClass('cur')){
            	alert('请选择性别');
        	}else if(!$oCake.hasClass('cur')){
        		alert('请选择您订购的蛋糕');
        	}else if(!$oPro.hasClass('cur')){
        		alert('请选择您希望保留的产品');
        	}else if($oSuggest.val().length==0){
        		alert('请留下您的建议或意见');
        	}else{
        		$oMask.fadeIn(500);
        	}
            
        });

        $oBtnClose.on('click', function() {
            $oMask.fadeOut(500);
        });
    	
    }

})();
