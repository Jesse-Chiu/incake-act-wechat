(function () {

    $(function () {
    	//商品显示
        fnBindProducts();
        //当日抢购倒计时
        fnCountdown();
    });

    // 商品显示
    function fnBindProducts() {
        // 获得当前日期 
        var today = new Date().getFullYear() + (new Date().getMonth()+1) + new Date().getDate();
		var i = -1;
		
		if(today==2049){
			i = 0;
		}else if(today==2050){
			i = 1;
		}else if(today==2051){
			i = 2;
		}else if(today==2052){
			i = 3;
		}
		if(i>=0&&i<4){
			fnchangeProducts(i);
		}
    
    }
    
    function fnchangeProducts(index){
    	var $oContent = $('.content'),
        	$oSeckill = $oContent.find('.seckill'),
            $oSeckillBox = $oContent.find('.seckill-box'),
            $aSeckillItem = $oSeckillBox.find('li'),
    		seckillHtml = '',
            listHtml = '';
    	
		$oSeckill.find('.btn-buy').children('img').attr('src','img/midautumn-seckill/btn_end.png');
    	for (var i = index; i >= 0; i--) {
    		$aSeckillItem.eq(i).find('.btn-buy').children('img').attr('src','img/midautumn-seckill/btn_end.png');
		}
    	$aSeckillItem.eq(index).find('.btn-buy').children('img').attr('src','img/midautumn-seckill/btn_buy.png');
		seckillHtml = $aSeckillItem.eq(index).html();
		listHtml = $oSeckill.html();
		
		$oSeckill.html(seckillHtml);
		$aSeckillItem.eq(index).remove();
		$oSeckillBox.prepend("<li>"+listHtml+"</li>");
    }
    
    //当日抢购倒计时
    function fnCountdown(){
		// 当前时间
		var nowTime = new Date().getTime();
		// 结束时间
		var endTime = new Date().getFullYear() + '/' + (new Date().getMonth()+1) +'/'+ (new Date().getDate()+1)+' '+'00:00:00';
		// 相差的时间
		var t = new Date(endTime).getTime() - nowTime;
		var h = Math.floor(t/1000/60/60%24);
		var m = Math.floor(t/1000/60%60);
		var s = Math.floor(t/1000%60);
		
		if(h.toString().length==1){
			h = '0'+h;
		}
		if(m.toString().length==1){
			m = '0'+m;
		}
		if(s.toString().length==1){
			s = '0'+s;
		}

		$('.act-time').html(h+':'+m+':'+s);
		
		setTimeout(fnCountdown, 1000);
	}
    

})();