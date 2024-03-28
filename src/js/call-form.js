// Переменные  блоков
let mainBlock = document.querySelector('.header')
let mobileMenu = document.querySelector('.mobile-menu-block')
let mainBurgerButton = mainBlock.querySelector('.circle-button--burger-img')

// Переменные Формы обратной связи
let callForm = document.querySelector('.call-block')
let callMuteArea = callForm.querySelector('.call-block__mute-area')

let mainCallButton = mainBlock.querySelector('.circle-button--call-img')
let mobileCallButton = mobileMenu.querySelector('.circle-button--call-img')

let callFormCloseButton = callForm.querySelector('.circle-button--close-img')

//Событие открытия формы Главная кнопка
mainCallButton.addEventListener('click', function () {
  let classes = callForm.className.split(/\s+/)

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'call-block--hidden') {
      callForm.classList.remove('call-block--hidden')
    }
  }
})

//Событие открытия формы  кнопка мобильного меню
mobileCallButton.addEventListener('click', function () {
  let classes = callForm.className.split(/\s+/)

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'call-block--hidden') {
      callForm.classList.remove('call-block--hidden')
    }
  }

  mobileMenu.classList.add('mobile-menu-block--hidden')
  mainBurgerButton.classList.remove('circle-button--none')
  console.log('Закрытие меню')
})
//Событие ЗАКРЫТИЕ формы кнопкой
callFormCloseButton.addEventListener('click', function () {
  callForm.classList.add('call-block--hidden')
})
//Событие ЗАКРЫТИЕ формы клавиатурой
callForm.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    callForm.classList.add('call-block--hidden')
  }
})
//Событие ЗАКРЫТИЕ формы по клику на заблюреную область
callMuteArea.addEventListener('click', function () {
  callForm.classList.add('call-block--hidden')
})
