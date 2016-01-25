(function() {
	$(function() {

		var tl = new TimelineLite();
		// 获奖列表滚动 
		setInterval(Marquee, 50);
		// 加载转盘抽奖
		loadingLottery();


		// 获奖列表滚动 
		function Marquee() {
			var demo = document.getElementById("scroll");
			var demo2 = document.getElementById("scroll2");
			var demo1 = document.getElementById("scroll1");
			demo2.innerHTML = demo1.innerHTML;

			if (demo2.offsetHeight - demo.offsetHeight <= 0)
				demo.scrollTop -= demo1.offsetHeight;
			else {
				demo.scrollTop++;
			}

			if (demo1.offsetHeight - demo.scrollTop <= 0) { //判断内容第一次是否循环完了 
				demo.scrollTop = 0;
			}
		}

		// 转盘抽奖
		function loadingLottery() {

			var $lotteryBtn = $("#lotteryBtn");

			//超时函数
			var timeOut = function() {

				tl.clear();
				
				// to【执行动画】（ 执行目标，持续时间【秒】{ rotation：旋转角度，onComplete：动画完成时回调函数 } ）
				tl.to($lotteryBtn, 10, {
					rotation: 2130,	//设置请求超时后返回的角度，360*6-30
					onComplete: fnTimeout
				});

				function fnTimeout() {
					alert('网络超时');
					$('#lotteryNum').html(parseInt($('#lotteryNum').text()) + 1);
					tl.to($("#lotteryBtn"), 0, {
						rotation: 0
					});
				}

			};

			var rotateFunc = function(awards, angle) { //awards:奖项，angle:奖项对应的角度

				tl.clear();
				tl.to($lotteryBtn, 5, {
					rotation: angle + 1440,	//angle是图片上各奖项对应的角度，1440是让指针旋转4圈。所以最后的结束的角度就是这样子
					onComplete: function() {
						showPrize(awards);
					}
				});
			};

			$lotteryBtn.on('click', function() {

				//验证抽奖机会
				if (removeLottery()) {
					var time = [1];
					time = time[Math.floor(Math.random() * time.length)];
					if (time == 0) {
						timeOut(); //网络超时
					}
					if (time == 1) {
						var data = [1, 2, 3, 4, 5, 6]; //返回的数组
						data = data[Math.floor(Math.random() * data.length)];
						if (data == 1) {
							rotateFunc(1, 360)
						}
						if (data == 2) {
							rotateFunc(2, 60)
						}
						if (data == 3) {
							rotateFunc(3, 120)
						}
						if (data == 4) {
							rotateFunc(4, 180)
						}
						if (data == 5) {
							rotateFunc(5, 240)
						}
						if (data == 6) {
							rotateFunc(6, 300)
						}
					}
				} else {
					//弹窗提示
					lotteryTip();
				}

			});

		}

		// 减少抽奖机会
		function removeLottery() {
			var $num = $('#lotteryNum').text();
			if ($num > 0) {
				$num -= 1;
				$('#lotteryNum').html($num);
				return true;
			} else {
				return false;
			}

		}

		// 奖品展示
		function showPrize(awards) {
			var $prizeBg = $('.prize-bg');
			var prize = '.prize' + awards;
			var $prize = $(prize);

			//隐藏抽奖模块
			showRotaryTable(0);
			//展示奖品
			$prizeBg.removeClass('hide');
			$prize.removeClass('hide');
			//继续抽奖
			lotteryGoOn($prizeBg, $prize);
		}

		// 显示&隐藏抽奖转盘
		function showRotaryTable(state) {
			var $rotary = $('.rotary');
			var $rotaryTable = $rotary.find('.rotary-table');
			var $clickBtn = $rotary.find('.click-button');
			var $hand = $rotary.find('.hand');
			//显示
			if (state == 1) {

				tl.to($("#lotteryBtn"), 0, {
					rotation: 0	//angle是图片上各奖项对应的角度，1440是让指针旋转4圈。所以最后的结束的角度就是这样子
				});

				$rotaryTable.removeClass('hide');
				$clickBtn.removeClass('hide');
				$hand.removeClass('hide');
			} else { //隐藏
				$rotaryTable.addClass('hide');
				$clickBtn.addClass('hide');
				$hand.addClass('hide');
			}

		}

		// 继续抽奖
		function lotteryGoOn(prizeBg, prize) {
			var $btnGoOn = $('.btn_goOn');

			$btnGoOn.on('click', function() {
				prizeBg.addClass('hide');
				prize.addClass('hide');
				//展示抽奖模块
				showRotaryTable(1);
			});
		}

		// 抽奖弹窗提示
		function lotteryTip() {
			var $popupBg = $('.popup-bg');
			var $popupTip = $('.popup-tip');
			var $btnReturn = $('.return');

			$popupBg.removeClass('hide');
			$popupTip.removeClass('hide');
			//返回
			$btnReturn.on('click', function() {
				$popupBg.addClass('hide');
				$popupTip.addClass('hide');
			});
		}

	});

})();