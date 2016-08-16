/**
 * 落叶效果
 */
(function(){
	$.fn.snow = function(options){
		
		var leaf = '<img src="img/half-price-leo/leaf.png" />',
			$flake = $('<div id="leafbox" />').css({'position': 'absolute', 'top': '50%'}).html(leaf),
			documentHeight = $(document).height(),
			documentWidth = $(document).width(),
			defaults = {
							minSize		: 10,		//最小宽度
							maxSize		: 20,		//最大宽度
							newOn		: 3000		//频率
						},
			options	= $.extend({}, defaults, options);
		
		var interval = setInterval( function(){
			var startPositionLeft = Math.random() * documentWidth-40,
				 	startOpacity = 0.8 + Math.random(),
					sizeFlake = options.minSize + Math.random() * options.maxSize,
					rotate = Math.random() * 1000,
					endPositionTop = documentHeight - 40,
					endPositionLeft = Math.random() * documentWidth-40,
					durationFall = documentHeight * 10 + Math.random() * 5000;
				$flake.clone().appendTo('body').css({
							left: startPositionLeft,
							opacity: startOpacity,
							'transform': 'rotate('+rotate+'deg)',
							'-webkit-transform': 'rotate('+rotate+'deg)',
							'font-size': sizeFlake
						}).animate({
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 0.2
						},durationFall,'linear',function(){
							$(this).remove()
						}
				);
		}, options.newOn);
	
	};
})();