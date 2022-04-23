    window.addEventListener('scroll', () => {
        $('.waterfall img', true).forEach((item, index) => {
            if (item.offsetTop + $('.wite').offsetTop <= window.pageYOffset + 480) {
                item.style.opacity = 1;
                if (item.offsetTop + $('.wite').offsetTop + 800 <= window.pageYOffset) {
                    $('.waterfall-btn').style.opacity = 1;
                };
            };
        });
    });