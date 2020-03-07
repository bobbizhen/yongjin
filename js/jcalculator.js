(function($) {
	var template =
		'<div class="jcalculator">' +
		'<span>7</span>' +
		'<span>8</span>' +
		'<span>9</span>' +
		'<span class="plus operation">+</span>' +
		'<span>4</span>' +
		'<span>5</span>' +
		'<span>6</span>' +
		'<span class="minus operation">-</span>' +
		'<span>1</span>' +
		'<span>2</span>' +
		'<span>3</span>' +
		'<span class="multiplication operation">x</span>' +
		'<span class="clear operation">C</span>' +
		'<span>0</span>' +
		'<span class="equal operation">=</span>' +
		'<span class="divide operation">&divide;</span>' +
		'</div>';
	$.fn.calculator = function(option) {
		var option = option || {};
		function Controller(el) {
			var self = this;
			el.wrap("<div class='jcalculator_wrap'></div>");
			var myparent = option.drpParent || $('body');
			var myoffset = option.drpParent? $(document).scrollTop() : 0;
			myparent.append(template);

			this.display = el;
			this.element = myparent.find('.jcalculator');
			this.element.css('top', this.display.offset().top + this.display.outerHeight()+1-myoffset);
			this.element.css('left', this.display.offset().left + this.display.outerWidth() - this.element.width());
			
			

			if (option.theme) {
				this.element.addClass(option.theme);
			}

			this.value = this.load();

			this.stack = null;
			this.stackOp = null;
			this.clearStack = true;

			$("span", this.element).on('click', function(e) {
				if (e && e.stopPropagation) {
					// 因此它支持W3C的stopPropagation()方法 
					e.stopPropagation();
				} else {
					// 否则，我们需要使用IE的方式来取消事件冒泡
					window.event.cancelBubble = true;
				}
				var code = $(this).text().trim();
				if (isNaN(code)) {
					if (code == "C") {
						self.digit;
					} else if (code.charCodeAt(0) == 247) {
						self.op = "/";
					} else {
						self.op = code;
					}
				} else {
					self.digit = code;
				}
			});
		}

		Controller.prototype = {
			load: function() {
				return this.display.val() || this.display.text();
			},
			save: function() {
				if (this.display.is("input")) this.display.val(this.value);
				else this.display.text(this.value);
			},
			get v() {
				return this.value;
			},
			set v(val) {
				this.clearStack = false;
				this.value = val;
				this.save();
			},
			get op() {
				return this.stackOp;
			},
			set op(value) {
				switch (this.stackOp) {
					case "+":
						this.v = this.stack + this.v;
						break;
					case "-":
						this.v = this.stack - this.v;
						break;
					case "x":
						this.v = this.stack * this.v;
						break;
					case "/":
						this.v = this.stack / this.v;
						break;
				}
				this.stack = this.v;
				this.stackOp = value;
				this.clearStack = true;
			},
			set digit(d) {
				d = parseInt(d);
				if (this.clearStack) return this.v = d;
				return this.v = this.v * 10 + d;
			},
			get digit() {
				if (this.clearStack) return this.v = 0;
				return this.v = Math.floor(this.v / 10);
			}
		};

		var controller;
		// this.each(function() {
		$(this).on('focus', function() {
		controller = new Controller($(this));
			$(".jcalculator").show();
		});
		$("html").click(function() {
			$(".jcalculator").remove();
		});
		$(".jcalculator_wrap").click(function(event) {
			event.stopPropagation();
		});
		$(document).keyup(function(e) {
			if (e.keyCode == 27) {
				$(".jcalculator").remove();
			}
		});

		// });

		return controller;
	};
})(jQuery);
