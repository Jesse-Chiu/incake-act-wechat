(function(){
	$(function(){
		
		fnInit();

	});
	
	/* 蛋糕购买事件 */
	function fnInit() {
		var $oContent = $(".content"),
			$aBtnBuy = $oContent.find(".btn-buy"),
			$oMask = $("#mask-select"),
			showList = document.querySelector('#showList'),
			cakeId = document.querySelector('#cakeId')
			cakes = 0;
		
		var data = [
		    {'id': '1.5磅', 'value': '1.5磅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¥189'},
		    {'id': '2.5磅', 'value': '2.5磅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¥279'},
		    {'id': '3.5磅', 'value': '3.5磅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¥369'},
		    {'id': '4.5磅', 'value': '4.5磅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¥579'},
		    {'id': '5.5磅', 'value': '5.5磅&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¥829'}
		];
		
		// 选择规格
		$aBtnBuy.on("click",function(){
			var cakeId = showList.dataset['id'];
	        var cakePrice = showList.dataset['value'];
	        cakes = $(this).index();
	        
	        var cakeSelect = new IosSelect(1, 
	            [data],
	            {
	            	
	                title: '蛋糕磅数选择',
	                // 每一项的高度，可选，默认 35
	                itemHeight: 40,
	                headerHeight: 40,
	                //组件展示选项数目 可以为3,5,7,9 默认为7
	                itemShowCount: 5,
	                
	                callback: function (selectOneObj) {
	                    cakeId.value = selectOneObj.id;
	                    showList.innerHTML = selectOneObj.value;
	                    
	                    showList.dataset['id'] = selectOneObj.id;
	                    showList.dataset['value'] = selectOneObj.value;
	                }
	        });
		});
		
		// 去结算
		$(document).on("click",'.sure', function(){
			// cakes=点击购买蛋糕的id------------showList.dataset['id']=选中的蛋糕规格
			alert(cakes+'--------'+showList.dataset['id']);
		});
		
	}
	
})();