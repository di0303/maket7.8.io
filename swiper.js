new Swiper('.swiper-container', {
    centeredslides:true,
    
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      watchSlidesProgress:true,
      clickable: true,
    },
    loop: true,
  });
  
  const toggleButton = document.querySelector('#toggle__button');
    const brandsGrid = document.querySelector('.brend__list');

    toggleButton.addEventListener('click', function () {
        brandsGrid.classList.toggle('expanded');
        if (brandsGrid.classList.contains('expanded')) {
          toggleButton.textContent = 'Скрыть'; // Когда элементы развернуты
      } else {
          toggleButton.textContent = 'Показать все'; // Когда элементы свернуты
      }
  });
    
