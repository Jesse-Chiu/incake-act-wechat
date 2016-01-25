(function() {

	//阻止默认行为
	$(document).on('touchmove', function(ev) {
		ev.preventDefault();
	});

	$(function() {

		var $oContainer = $('.container-wrapper');
		var $aSection = $oContainer.find('.section');
		var viewHeight = $(window).height();
		$oContainer.height(viewHeight);

		fnSlideSection();

		// 滑屏操作
		function fnSlideSection() {

			var startY = 0,
				step = 1 / 4,
				currIndex = 0,
				nextOrPrevIndex = 0,
				btnOff = true;

			$aSection.on('touchstart', function(ev) {

				if (btnOff) {

					btnOff = false;
					var touch = ev.originalEvent.changedTouches[0];
					startY = touch.pageY;
					currIndex = $(this).index();

					$aSection.on('touchmove.move', function(ev) {

						var touch = ev.originalEvent.changedTouches[0];
						$(this).siblings().hide();
						if (touch.pageY < startY) { //向上滑动
							nextOrPreIndex = currIndex == $aSection.length - 1 ? 0 : currIndex + 1;
							$aSection.eq(nextOrPreIndex).css('transform', 'translateY(' + (viewHeight + touch.pageY - startY) + 'px)');
						} else { //向下滑动							
							nextOrPreIndex = currIndex == 0 ? $aSection.length - 1 : currIndex - 1;
							$aSection.eq(nextOrPreIndex).css('transform', 'translateY(' + (-viewHeight + touch.pageY - startY) + 'px)');
						}
						$aSection.eq(nextOrPreIndex).show().addClass('zIndex');
						$(this).css('transform', 'translateY(' + (touch.pageY - startY) * step + 'px) scale(' + (1 - Math.abs((touch.pageY - startY)) * step / viewHeight) + ')');

						$aSection.on('touchend.move', function(ev) {
							var touch = ev.originalEvent.changedTouches[0];
							if (touch.pageY < startY) { //向上滑动
								$aSection.eq(currIndex).css('transform', 'translateY(' + (-viewHeight * step) + 'px) scale(' + (1 - step) + ')');
							} else { //向下滑动
								$aSection.eq(currIndex).css('transform', 'translateY(' + (viewHeight * step) + 'px) scale(' + (1 - step) + ')');
							}
							$aSection.eq(currIndex).css('transition', '0.3s');
							$aSection.eq(nextOrPreIndex).css('transform', 'translateY(0)');
							$aSection.eq(nextOrPreIndex).css('transition', '0.3s');
							$aSection.off('.move');
						});

					});
				}

			});

			//动画完成后触发
			$aSection.on('transitionEnd webkitTransitionEnd', function(ev) {
				if (!$aSection.is(ev.target)) {
					return;
				}
				resetFn();
			});

			function resetFn() {
				$aSection.css('transform', '').css('transition', '').eq(nextOrPreIndex).removeClass('zIndex').siblings().hide();
				btnOff = true;
			}

		}
		
		
	});

})();