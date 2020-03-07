
//左侧菜单
$(function(){
	$('.gotonext').on('click',function(){
					var url = 'frame.html?'+$(this).attr('data-url');
					console.log(url);
					window.location.href= url;
				})

	$(".mCustomScrollbar").mCustomScrollbar({
		scrollInertia: 0,
	});
	
	if($(".leftmenu .lmlist > ul > li.expand > ul")){
		$(".leftmenu .lmlist > ul > li.expand > ul").css("display", "block");
	}
	
	$(".leftmenu .lmlist > ul > li > a").click(function(){
		
		var $par = $(this).parent("li");
		var itoffsettop =$('.leftscrollbar .mCSB_container').offset().top;
		var clickN = $('.leftmenu .lmlist > ul > li').index($par);
		var prevN = $('.leftmenu .lmlist > ul > li').index($('.expand'));
		var prevNHeight = $('.leftmenu .lmlist > ul > li.expand >ul').height()?$('.leftmenu .lmlist > ul > li.expand >ul').height():0;
		
		$par.siblings("li").removeClass("expand");
		$par.toggleClass("expand");
		// console.log($('.leftscrollbar .mCSB_container').offset().top);
		$par.siblings("li").children("ul").css('display','none');
		// console.log($('.leftscrollbar .mCSB_container').height());
		if(prevN<clickN){
			var minTop = itoffsettop+prevNHeight+0<=78?itoffsettop+prevNHeight+0:78;
			$('.leftscrollbar .mCSB_container').offset({top:minTop});
			// console.log($('.leftscrollbar .mCSB_container').offset().top);
		}
		// console.log($('.leftscrollbar .mCSB_container').offset().top);
		// $('.leftscrollbar').mCustomScrollbar('scrollTo',_this);
			if($par.hasClass("expand")) {
				$par.children("ul").slideDown();
			} else {
				$par.children("ul").slideUp();
			}
	})
	$(".larrow").click(function(){
		$(this).toggleClass("larrow02");
		$(".leftmenu").toggleClass("leftmenu02");
		$(".rightdiv").toggleClass("rightdiv02");
		$(".indexbg").toggleClass("indexbg02");
	})
	
	//高级搜索切换
	 if($('.seardiv').find('.level2').length==0){
		$(".seardiv-footer .searopt").css('display','none');
	 } else {
		$(".seardiv-footer .searopt").on("click",function(){
			if($(this).text()=="高级搜索"){
				$(".seardiv").find(".level2").css("display","block");
				$(this).text("简易搜索");
			} else if($(this).text()=="简易搜索") {
				$(".seardiv").find(".level2").css("display","none");
				$(this).text("高级搜索");
			}
		})
	 }
	//disabled 按钮
	$("a[disabled]").each(function(){
	    $(this).attr('href', '#');     //修改<a>的 href属性值为 #  这样状态栏不会显示链接地址  
	    $(this).click(function (event) {
	        event.preventDefault();   // 如果<a>定义了 target="_blank“ 需要这句来阻止打开新页面
	    });
	})
	
})
			//便签和选中弹窗
			$(function(){
				$("#saveit").click(function(){
					$("#myModal1").modal('hide');
					$("#myModal1").on("hidden.bs.modal",function(){
						ztakeAlert("success", "添加成功！");
					})
				})
				
				$("#myModal2").on("show.bs.modal",function(event){
					var tag = $(event.relatedTarget);
					var index = tag.parents("td").index();
					var text="";
					if(index!=-1){
						text = tag.parents("table").find("thead").find("th").eq(index).text().replace("*","");
					} else {
						text = tag.parents(".subitem ,.form-group").find("label").text().replace("*","");
					}
					$(this).find(".modal-title").text(text);
					$(this).find(".inputdiv label").text(text);
				})
			})
			
	//alert提示
			$(function(){
				if($('body').find('.zhm-alert').length<=0){
					$('body').append('<div class="zhm-alert"></div>');
				}
			})
			var ztakeAlert = function(state, text) {
				var windowH = $(window).scrollTop()+60;
				$(".zhm-alert").css('top',windowH).stop().css('opacity',1).addClass("zhm-alert-" + state).text(text).animate({
					opacity:1
				},300,function(){
					$(".zhm-alert").animate({
					opacity: 0
				}, 1000, function() {
					$(".zhm-alert").removeClass("zhm-alert-" + state).text("").css("opacity", 0);
				});
				})
			}