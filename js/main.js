$(function (){
	(function(window){
        if (document.getElementById("show-date")) {
            var showDate = document.getElementById("show-date")
            updateDate(showDate);
        }
        feather.replace();
    })(window);

    function updateDate(showDate) {
        setInterval(() => {
            showDate.innerHTML =  moment().format("MMMM DD, YYYY"); 
        }, 1000)
    }

    $('.sidenav').sidenav();

    $('.slider').slider({
        height: 600,
        duration: 800
    });

	//smooth scroll	
    jQuery('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        if(this.hash !== '') {
            if(this.hash !== '' && this.href.replace(this.hash, '') == window.location.href.replace(window.location.hash, '')) {
                var target = jQuery(this.hash);
                if(target.length && this.hash !== '#') {
                    jQuery('html, body').stop().animate({
                        'scrollTop': target.offset().top
                    }, 1000, 'swing', function () {
                        if(this.hash !== '#') {
                            window.location.hash = target.selector;
                        }
                    });
                } else {
                    if(this.hash !== '#') {
                        window.location = jQuery(this).attr('href');
                    }
                }
            } else {
                if(this.hash !== '#') {
                    window.location = jQuery(this).attr('href');
                }
            }
        }
    });
})
