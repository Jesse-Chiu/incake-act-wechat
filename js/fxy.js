(function(){
	$(function(){
		
		fnInit();

	});
	
	/* 页面蛋糕点击事件 */
	function fnInit() {
		var $oContainer = $(".container"),
			$oCakeList = $oContainer.find(".cake-list"),
			$aBtnAdd = $oCakeList.find(".btn-add"),
			$oMask = $oContainer.find(".mask"),
			$oBuyHide = $oContainer.find(".buy-hide"),
			$obtnClose = $oBuyHide.find(".close");
		
		// 加入购物车
		$aBtnAdd.on("click",function(){
			$oMask.show();
			$oBuyHide.show().animate({
					bottom:0
			},500);
			
			$('body').css({
				"overflow": "hidden",
				'z-index': '-1'
			});
			// 禁止页面拖动
			$('body').bind('touchmove',function(e){
				e.preventDefault();
			});
		});
		
		//关闭购物车弹窗
		$obtnClose.on("click", function() {
			$oBuyHide.fadeOut(500,function(){
				$(this).css('bottom','-50%');
			});
			$oMask.fadeOut(500);
			
			$('body').css("overflow", "auto");
			$('body').unbind('touchmove');
		});
		
		//选购数量&价格
		var number = $(".countR .number").val();
		var price = $("#price").html();
		/* 数量减 */
		$(".subtract").click(function() {
			if (number > 1) {
				number -= 1;
				$(".countR .number").val(number);
				$("#price").html(parseInt(number) * parseInt(price)); //更改价格
				$(".subtract").css("color", "#4f4f4f");
				$(".add").css("color", "#4f4f4f");
			}else if(number <= 1){
				$(".subtract").css("color", "#d7d7d7");
			}
		});
		/* 数量增 */
		$(".add").click(function() {
			if (number < 100) {
				number = parseInt(number) + 1;
				$(".countR .number").val(number); //更改数量
				$("#price").html(parseInt(number) * parseInt(price)); //更改价格
				$(".subtract").css("color", "#4f4f4f");
			}else{
				$(".add").css("color", "#d7d7d7");
			}
		});
		
		// 系列筛选
		var $oBtnSeries = $oContainer.find(".btn-series"),
			$oScreen = $("#screen"),
			$aScreenItem = $oScreen.find("li.series"),
			$oCloseScreen = $oScreen.find(".btn-close");
		
		$oBtnSeries.on("click", function(){
			$oMask.show();
			$oScreen.animate({ right: 0 }, 300);
		});
		
		$aScreenItem.on("click", function(){
			$aScreenItem.removeClass("active");
			$(this).addClass("active");
		});
		
		$oCloseScreen.on("click", function(){
			$oMask.hide();
			$oScreen.animate({ right: "-44%" }, 300);
		});
		
		// 规格选择
		introduce();
		// 加入购物车
		fnAddCart();
		
	}
	
	/* 规格选择事件 */
	function introduce() {
		var $aType = $(".buyMde-list .type");
		
		$aType.on("click", function() {
			$aType.removeClass("cur");
			$(this).addClass("cur");
			$(".countR .number").val(1); //更改数量
			var aText = $(this).text();
			//修改规格信息
			switch (aText) {
				case "1.5磅":
					$('.buy-txtI').html("适合美味独享、1-2人食用");
					$('.price').html("<span>￥<span id='price'>169</span>&nbsp;</span>/1.5磅");
					break;
				case "2.5磅":
					$('.buy-txtI').html("适合亲密分享、2-3人食用");
					$('.price').html("<span>￥<span id='price'>229</span>&nbsp;</span>/2.5磅");
					break;
				case "3.5磅":
					$('.buy-txtI').html("适合家人共享、3-5人食用");
					$('.price').html("<span>￥<span id='price'>369</span>&nbsp;</span>/3.5磅");
					break;
				case "5.5磅":
					$('.buy-txtI').html("适合生日派对、5-7人食用");
					$('.price').html("<span>￥<span id='price'>499</span>&nbsp;</span>/5.5磅");
					break;
				default:
					$('.buy-txtI').html("其他");
					$('.price').html("<span><span id='price'>价格待定</span>&nbsp;</span>/其他");
					break;
			}
		});
	}
	
	/* 加入购物车 */
	function fnAddCart() {
		var $oCart = $('#mask-cart'),
			$oBuyHide = $('.buy-hide'),
			$oBtnContinue = $('#btnContinue');
		
		$('#btnAddCart').on('click', function() {
			$oCart.show();
			$oBuyHide.hide();
			$('.mask').hide();
		});
		
		$oBtnContinue.on('click', function() {
			$oCart.hide();
			$(".close").trigger('click');
		});
	}
	
})();