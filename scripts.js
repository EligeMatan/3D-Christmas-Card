$(document).ready(() => {

    VanillaTilt.init(document.querySelectorAll(".box"), {
		max: 25,
		speed: 400,
        glare: true,
        'max-glare': 0.5
	});
    // VanillaTilt.init($('.container').find('.box'), {
	// 	max: 25,
	// 	speed: 400
	// });
});