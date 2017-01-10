(function($, window, document){
	$.extend($.fn, {
		fadeIn: function(ms,opacity){
    		if(typeof(ms) === 'undefined'){
    			ms = 250;
    		}
    		$(this).css({
    			display: 'block',
    			opacity:0
    		}).animate({
    			opacity: opacity || 1
    		},ms);
    		return this;
		},
		fadeOut: function(ms){
    		if(typeof(ms) === 'undefined'){
    			ms = 250;
    		}
    		$(this).animate({
    			opacity: 0
    		},ms,function(){
    			$(this).hide();
    		});
    		return this;
		}
	});
})(Zepto, window, document)