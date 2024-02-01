let firstImage = document.getElementById('firstImage')
let secondImage = document.getElementById('secondImage')
let thirdImage = document.getElementById('thirdImage')
let modal = document.getElementById('modal')
let showCard = document.getElementById('showCard')
let input = document.getElementById('input')

input.value = 1


showCard.setAttribute('src', 'assets/cardImage3.png')
function changeImageInCarouselRight() {
  if(firstImage.dataset.select === "true") {
    secondImage.dataset.select = "true"
    firstImage.dataset.select = "false"
    showCard.setAttribute('src', 'assets/cardImage2.png')
  } else if(secondImage.dataset.select === "true") {
    thirdImage.dataset.select = "true"
    secondImage.dataset.select = "false"
    showCard.setAttribute('src', 'assets/cardImage3.png')
  } else if(thirdImage.dataset.select === "true") {
    firstImage.dataset.select = "true"
    thirdImage.dataset.select = "false"
    showCard.setAttribute('src', 'assets/cardImage.png')
  }
}

function changeImageInCarouselLeft() {
  if(firstImage.dataset.select === "true") {
    thirdImage.dataset.select = "true"
    firstImage.dataset.select = "false"
    showCard.setAttribute('src', 'assets/cardImage3.png')
  
  } else if(secondImage.dataset.select === "true") {
    firstImage.dataset.select = "true"
    secondImage.dataset.select = "false"
    showCard.setAttribute('src', 'assets/cardImage.png')

  } else if(thirdImage.dataset.select === "true") {
    secondImage.dataset.select = "true"
    thirdImage.dataset.select = "false"
    showCard.setAttribute('src', 'assets/cardImage2.png')
  }
}

function showModal() {
    if(modal.dataset.open === "false") {
      modal.style.display = 'block'
      modal.dataset.open = "true"
    } else {
      modal.style.display = 'none'
      modal.dataset.open = "false"
    }
}

function plusAmount() {
  let value = Number(input.value) 
  if(value !== 10) {
    input.value = value + 1
  } 
}

function lessAmout() {
  let value = Number(input.value) 
  if(value !== 1) {
    input.value = value - 1
  }
}