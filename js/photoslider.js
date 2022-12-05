(function() {
	function Slideshow(element) {
		this.el = document.querySelector(element);
		this.init();
	}
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector(".slider-wrapper");
			this.links = this.el.querySelectorAll("#slider-nav button");
			this.slides = this.el.querySelectorAll(".slide");
			this.previous = this.el.querySelector(".slider-previous");
			this.next = this.el.querySelector(".slider-next");
			this.index = 0;
			this.timer = null;
			this.total = this.slides.length;
			this.actions();
			this.stopStart();
			this.show();
		},
		_slideTo: function(slide) {
			var currentSlide = this.slides[slide];
			this.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
			if (this.index == this.total - 1) {
				this.index = this.total - 1;
				this.next.style.display = "none";
			}
			else {
				this.next.style.display = "block";
			}
			if (this.index == 0) {
				this.index = 0;
				this.previous.style.display = "none";
			}
			else {
				this.previous.style.display = "block";
			}
		},
		stopStart: function() {
			var self = this;
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = null;

			}, false);
			self.el.addEventListener( "mouseout", function() {
				self.show();
			}, false);
		},
		show: function(){
			var self = this;
			// self.timer = setInterval(function() {
			// 	let cur = document.querySelector('#slider-nav button.current')
			// 	cur.classList.remove('current');
			// 	self.index++;
			// 	if( self.index == self.slides.length ) {
			// 		self.index = 0;
			// 	}
			// 	cur = document.querySelector(`[data-slide="${self.index}"]`);
			// 	cur.classList.add('current');
			// 	self._slideTo( self.index );
			// }, 5000);
		},
		actions: function() {
			var self = this;
			self.next.addEventListener("click", function() {
				let cur = document.querySelector('#slider-nav button.current')
				cur.classList.remove('current');
				self.index++;
				cur = document.querySelector(`[data-slide="${self.index}"]`);
				cur.classList.add('current');
				self._slideTo(self.index);
			}, false);
			self.previous.addEventListener("click", function() {
				let cur = document.querySelector('#slider-nav button.current')
				cur.classList.remove('current');
				self.index--;
				cur = document.querySelector(`[data-slide="${self.index}"]`);
				cur.classList.add('current');
				self._slideTo(self.index);
			}, false);
			for (let i = 0; i < self.links.length; i++){
				self.links[i].addEventListener("click", function() {
					let cur = document.querySelector('#slider-nav button.current')
					cur.classList.remove('current');
					self.links[i].classList.add('current');
					self.index = i;

					self._slideTo(self.index);
				});
			}
		}
	};
	document.addEventListener("DOMContentLoaded", function() {
		var slider = new Slideshow("#main-slider");
	});
})();
