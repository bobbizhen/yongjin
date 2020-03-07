//公式配置
$(function(){
	if($('body').find('.zhm-alert').length<=0){
		$('body').append('<div class="zhm-alert"></div>');
	}
	//$('.formulaIn').on('click',function(){
		var html = '<div class="item"><div class="sign"><select class="form-control text-center"><option value=""></option><option value="0">＋</option><option value="1">－</option><option value="2">×</option><option value="3">÷</option></select></div><div class="pth1"></div><div class="elem"><select class="form-control"><option value="0">选择元素</option><option value="1">可结佣金额</option><option value="2">佣金基础点位</option><option value="3">佣金浮动系数</option><option value="4">奖惩金额</option><option value="5">预留系数</option><option value="6">点位调整</option></select></div><div class="pth2"></div></div>';
		var el = $('.formulaCont').find('.item').eq(0);
		var mnpth = 3;
		$('.formulaCont').on ('click','.item', function(){
			el = $(this);
			el.addClass('active').siblings('.item').removeClass('active');
		})
		$('.formulaBtndiv .btn').on('click',function(e){
			var act = $(this).attr('data-act');
			var target = $(this).attr('data-target');
			var elt = el.find('.'+target);
			if(target.match(/pth/)){
				var str = target.match(/pth1/)? '(' :')';
				console.log(target);
				if(elt.text().length+1 > mnpth && act =='ins') {
					ztakeAlert('success', '超过最大()个数!');
					return;
				} else {
					act =='ins' ? elt.text(elt.text()+str) : elt.text(elt.text().substring(0,elt.text().length-1));
				};
				
			} else if(target.match(/item/)){
				if(act == 'ins') {
					el.after(html);
					el = el.next('.item')
					el.addClass('active').siblings('.item').removeClass('active');
				} else if(act == 'del') {
					if(el.is('.item0')){
						ztakeAlert('success', '第一个元素不能删除!');
					} else {
						var _el = el.prev('.item');
						el.remove();
						el = _el;
						el.addClass('active');
					}
				}
			}
			
		})
	})
//})

			
			
	

