$(function(){
	(function(window){
		if (document.getElementById("html-index")) {
			setTimeout(()=>{
				var landingTween = new TweenMax.to(".landing-page", 2, { opacity: 1 });
				let landingAnimation = new ScrollMagic.Scene({
					triggerElement: ".landing-page",
					triggerHook: 0.5
				})
				.setTween(landingTween)
				.addTo(controller);
			},1500);
		}
	})(window);
	let controller = new ScrollMagic.Controller();
	
	if (document.getElementById("html-index")) {
		let dividerTween = new TweenMax.to(".divider0", 2, { flex: 1 });
		let dividerTween1 = new TweenMax.to(".divider1", 2, { flex: 1 });
		let dividerTween2 = new TweenMax.to(".divider2", 2, { flex: 1 });
		let dividerTween3 = new TweenMax.to(".divider3", 3, { flex: 1 });
		let cardTween = new TweenMax.from(".card-project", 2, { scale: 0 });

		let dividerAnimation0 = new ScrollMagic.Scene({
			triggerElement: ".divider0",
			triggerHook: 0.5,
			duration: 150
		})
		.setTween(dividerTween)
		.addTo(controller);

		let dividerAnimation1 = new ScrollMagic.Scene({
			triggerElement: ".divider1",
			triggerHook: 0.5,
			duration: 150,
			offset: 30
		})
		.setTween(dividerTween1)
		.addTo(controller);

		let dividerAnimation2 = new ScrollMagic.Scene({
			triggerElement: ".divider2",
			triggerHook: 0.5,
			duration: 150
		})
		.setTween(dividerTween2)
		.addTo(controller);

		let dividerAnimation3 = new ScrollMagic.Scene({
			triggerElement: ".divider3",
			triggerHook: 0.5,
			duration: 150
		})
		.setTween(dividerTween3)
		.addTo(controller);

		let cardAnimation = new ScrollMagic.Scene({
			triggerElement: ".container-carousel",
			triggerHook: 0.5,
			duration: 100,
			offset: 50
		})
		.setTween(cardTween)
		.addTo(controller);
	}
})