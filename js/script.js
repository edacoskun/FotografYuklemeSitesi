var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: true
    },
    pagination: {
        el: '.swiper-pagination',
    },
    loop: true,
});

function toggleMenu(){
    const menuTogg = document.querySelector('.toggle');
    const nav = document.querySelector('.nav');
    menuTogg.classList.toggle('active');
    nav.classList.toggle('active');
}