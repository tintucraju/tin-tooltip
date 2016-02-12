;(function($){
	$.fn.TinTip = function(){
		$('[pop-title]').each(function(){
				var me = $(this);
				var pos = me.position();
				var L   = pos.left-10;
				var T   = pos.top-10;
				var lbl = me.attr("pop-title");
				var me_span = $("<span style='color:white;padding:5px;border-radius:20px;display:none;background:black;border:solid 1px #383838;position:fixed;top:"+T+";left:"+L+";'>"+lbl+"</span>")
				me_span.appendTo(me);
				me.mousemove(function(){
					me_span.show();
				});
				me.mouseleave(function(){
					me_span.hide();
				});
		});
	}
})(jQuery);
