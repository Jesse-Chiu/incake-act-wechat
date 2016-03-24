(function() {
	var $oBtnReg = $('.btn-reg');
	var interval;
	var time;
	var run = 0;
		
	$(function() {	
		// 验证码事件
		$oBtnReg.on('click',function(){
			if($('.phone').val()!=""){
				if(run == 0){
					time = 60;
					interval = setInterval(fnInterval,1000);	
				}				
			}else{
				alert("请输入手机号码");
			}
		});
		
	});
	
	function fnInterval() {
		if(time>0){
			$oBtnReg.text(time+" s");
			time--;
			run = 1;
		}else{
			$oBtnReg.text("重新发送");
			clearInterval(interval);
			run = 0;
		}
	}
	
})();