(function(){
	$(function(){
		
		// 问卷调查
		forQuestion();
		// 是否同意条款
		termsAgreed();
		// 领取成功
		receive();
		
	});
	
	// 问卷调查
	function forQuestion(){ 
		var $question=$('.question'); 
		var $options=$question.find('a');
		
		$options.on('click',function(){
			var dd = $(this).parent('dd')
			var brother = dd.siblings('dd');
			brother.removeClass('active')
			dd.addClass('active');
		});
	} 
	
	// 是否同意条款
	function termsAgreed(){
		var $termsAgreed = $('.termsAgreed');
		var span = $termsAgreed.find('span');
		var i = $termsAgreed.find('i');
		var btn = $termsAgreed.siblings('a');
		
		i.on('click',function(){
			$(this).attr('style','display:none');
			$(btn).removeClass('btn_agreed');
		});
		
		span.on('click',function(){
			i.attr('style','display:black');
			$(btn).addClass('btn_agreed');
			
		});
	}
	
	// 领取成功
	function receive(){
		var $btnSubmit = $('.btn_submit');
		var $popupTip = $('.popup-tip');
		var $btnClose = $('.btn-close');
		
		$btnSubmit.on('click',function(){
			if($btnSubmit.hasClass('btn_agreed')){//判断是否同意协议
				$('body').css("overflow", "hidden");
				// 禁用页面拖动
				$('body').bind('touchmove', function(e) {
					e.preventDefault();
				});
				$popupTip.removeClass('hide');
			}
		});
		
		$btnClose.on('click',function(){
			$('body').css("overflow", "auto");
			$('body').unbind('touchmove');
			$popupTip.addClass('hide');
		});
		
	}
	
})();
