/*- hero-slider -*/
var swiper = new Swiper('.hero-slider', {
  centeredSlides: true,
  autoplay: false,
  /*autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },*/
  autoHeight: true,
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.hero-slider .swiper-button-next',
    prevEl: '.hero-slider .swiper-button-prev',
  },
  pagination: {
    el: '.hero-slider .swiper-pagination',
    clickable: true,
  },
});

/*- wrinkles-col -*/
document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('.wrinkles-info__title');
  const activeImg = document.querySelector('.head__img-active');
  const lineItems = document.querySelectorAll('.line-col__item');
  const classes = ['top-active', 'middle-active', 'bottom-active']; // Классы для разных позиций

  const options = {
    threshold: 0.5 // Активируется, когда 50% элемента видимо
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Убираем класс активности у всех заголовков
        titles.forEach(el => el.classList.remove('active'));
        lineItems.forEach(el => el.classList.remove('active')); // Убираем класс активности у всех line-col__item
        entry.target.classList.add('active');

        // Убираем все классы позиции у head__img-active
        classes.forEach(cls => activeImg.classList.remove(cls));

        // Меняем класс позиции активной зоны на head__img-active
        const index = Array.from(titles).indexOf(entry.target);
        activeImg.classList.add(classes[index]);
        
        // Добавляем класс активности к соответствующему элементу line-col__item
        lineItems[index].classList.add('active');
      }
    });
  }, options);

  titles.forEach(title => observer.observe(title));
});




