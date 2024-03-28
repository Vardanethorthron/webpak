//Переменные для Текста
let mainBlock = document.querySelector('.main-block')
let readMoreButtonText = mainBlock.querySelector('.read-more-button')
let testContent = mainBlock.querySelector('.text-content__text')
let textShowPart = 'text-content__text--show-part'

let readMore = 'Читать далее'
let readLess = 'Свернуть'

// Переменные БРЕНДОВ
let brendsBlock = document.querySelector('.brends-block')
let readMoreButtonBrends = brendsBlock.querySelector('.read-more-button')
let brendsList = brendsBlock.querySelector('.brends-list')
let brendsShowPart = 'brends-list--show-part'

let close = 'Скрыть'
let open = 'Показать всё'

//Переменные устройств
let devicesBlock = document.querySelector('.devices-block')
let readMoreButtonDevices = devicesBlock.querySelector('.read-more-button')
let devicesList = devicesBlock.querySelector('.devices-list')
let devicesShowPart = 'devices-list--show-part'

//Функция открывания закрывания списка
let openClose = function (button, block, showPart, closeText, openText) {
  let classes = block.className.split(/\s+/)

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === showPart) {
      let classes = block.className.split(/\s+/)

      block.classList.remove(showPart)

      button.classList.remove('read-more-button--close')
      button.classList.add('read-more-button--open')

      button.firstChild.data = closeText
    } else {
      block.classList.add(showPart)

      button.classList.remove('read-more-button--open')
      button.classList.add('read-more-button--slose')

      button.firstChild.data = openText
    }
  }
}

//Событие разворачивание ТЕКСТА
readMoreButtonText.addEventListener('click', function () {
  openClose(readMoreButtonText, testContent, textShowPart, readLess, readMore)
})

//Событие разворачивание сворачивание списка БРЕНДОВ
readMoreButtonBrends.addEventListener('click', function () {
  openClose(readMoreButtonBrends, brendsList, brendsShowPart, close, open)
})

//Событие разворачивание сворачивание списка УСТРОЙСТВ
readMoreButtonDevices.addEventListener('click', function () {
  openClose(readMoreButtonDevices, devicesList, devicesShowPart, close, open)
})
