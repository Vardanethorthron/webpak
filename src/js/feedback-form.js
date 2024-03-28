// Переменные  блоков
let mainBlock = document.querySelector('.header')
let mobileMenu = document.querySelector('.mobile-menu-block')
let mainBurgerButton = mainBlock.querySelector('.circle-button--burger-img')

// Переменные Формы обратной связи
let feedbackForm = document.querySelector('.feedback-block')
let feedbackMuteArea = feedbackForm.querySelector('.feedback-block__mute-area')

let mainChatButton = mainBlock.querySelector('.circle-button--chat-img')
let mobileChatButton = mobileMenu.querySelector('.circle-button--chat-img')

let feedbackFormCloseButton = feedbackForm.querySelector(
  '.circle-button--close-img'
)

//Событие открытия формы Главная кнопка
mainChatButton.addEventListener('click', function () {
  let classes = feedbackForm.className.split(/\s+/)

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'feedback-block--hidden') {
      feedbackForm.classList.remove('feedback-block--hidden')
    }
  }
})

//Событие открытия формы  кнопка мобильного меню
mobileChatButton.addEventListener('click', function () {
  let classes = feedbackForm.className.split(/\s+/)
  console.log('открытие формы из бокового меню')

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'feedback-block--hidden') {
      feedbackForm.classList.remove('feedback-block--hidden')
    }
  }

  mobileMenu.classList.add('mobile-menu-block--hidden')
  mainBurgerButton.classList.remove('circle-button--none')
  console.log('Закрытие меню')
})

//Событие ЗАКРЫТИЕ формы кнопкой
feedbackFormCloseButton.addEventListener('click', function () {
  feedbackForm.classList.add('feedback-block--hidden')
})
//Событие ЗАКРЫТИЕ формы клавиатурой
feedbackForm.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    feedbackForm.classList.add('feedback-block--hidden')
  }
})
//Событие ЗАКРЫТИЕ формы по клику на заблюреную область
feedbackMuteArea.addEventListener('click', function () {
  feedbackForm.classList.add('feedback-block--hidden')
})
