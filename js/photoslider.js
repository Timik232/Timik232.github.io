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
			this.isInit = false;
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
			this.el.addEventListener( "mouseover", function() {
				clearInterval( this.timer );
				this.timer = null;

			}, false);
			this.el.addEventListener( "mouseout", function() {
				this.show();
			}, false);
		},
		show: function(){
			// this.timer = setInterval(function() {
			// 	let cur = document.querySelector('#slider-nav button.current')
			// 	cur.classList.remove('current');
			// 	this.index++;
			// 	if( this.index == this.slides.length ) {
			// 		this.index = 0;
			// 	}
			// 	cur = document.querySelector(`[data-slide="${this.index}"]`);
			// 	cur.classList.add('current');
			// 	this._slideTo( this.index );
			// }, 5000);
		},
		actions: function() {
			if (!this.isInit){
			this.wrapper.style.left = "-" + 0 + "px";
			this.isInit = true;
		}
			this.next.addEventListener("click", function() {
				let cur = document.querySelector('#slider-nav button.current')
				cur.classList.remove('current');
				this.index++;
				cur = document.querySelector(`[data-slide="${this.index}"]`);
				cur.classList.add('current');
				this._slideTo(this.index);
			}, false);
			this.previous.addEventListener("click", function() {
				let cur = document.querySelector('#slider-nav button.current')
				cur.classList.remove('current');
				this.index--;
				cur = document.querySelector(`[data-slide="${this.index}"]`);
				cur.classList.add('current');
				this._slideTo(this.index);
			}, false);
			for (let i = 0; i < this.links.length; i++){
					this.links[i].addEventListener("click", function() {
					let cur = document.querySelector('#slider-nav button.current')
					cur.classList.remove('current');
					this.links[i].classList.add('current');
					this.index = i;

					this._slideTo(this.index);
				});
			}
		}
	};
	document.addEventListener("DOMContentLoaded", function() {
		var slider = new Slideshow("#main-slider");
	});
})();
