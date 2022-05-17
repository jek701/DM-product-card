const perPageNum = () => {
    if (window.screen.width >= 1290) {
        return 4
    }
    else if (window.screen.width < 1290 && window.screen.width >= 690) {
        return 5
    }
    else if (window.screen.width < 690) {
        return 3
    }
}

const readMoreBlock = document.getElementById("product-description-block")
const text = readMoreBlock.textContent.split("");
const newDesc = document.getElementById("product-description")
const isFull = false

const isSpace = () => {
    for (i = 184; i < text.length; i++) {
        if (text[i] === " ") {
            return i + 1
        }
    }
}

const showFull = () => {
    newDesc.innerHTML = readMoreBlock.textContent
}

if (text.length > 100 && isFull === false) {
    newDesc.innerHTML = text.splice(0, isSpace()).join("") + "<span class='read-more-block'> ......... <button class='read-more-btn' onclick='showFull()'>читать подробнее</button></span>"
}

// const moreInfo = document.getElementById('more-info-nav')
// const data = ["Характеристики", "Доставка", "Отзывы", "Вопросы и ответы", "Дополнительно"]
// let currBlock = 0
//
// moreInfo.innerHTML = `
//     ${data.map((i, index) => {
//         return "<li>" + data[index] + "</li>"
//     })}
// `
//
// const changeCurrBlock = (num) => {
//     currBlock = num
//     console.log(num)
// }
//
//
// const currImageBlock = document.getElementById("curr-image")
// const images = ["xbox-main.png", "xbox-right.png", "xbox-top.png"]
// const imageNav = document.getElementById("image-nav")
// let currImageNav = 0
//
// const setCurrImage = (index) => {
//     currImageBlock.innerHTML = `<img alt="image" src="images/${images[index]}" />`
//     document.getElementById("curr-image-index").className = `curr-image-${index}`
// }
//
// const setCurrImageNav = (index) => {
//     document.querySelector(`#image-nav :nth-child(${index})`).classList.add('active')
// }
//
// imageNav.innerHTML = `
//     ${images.map((i, index) => {
//         return `<div onclick="setCurrImageNav(${index})" class="${currImageNav === index ? 'active' : ''}" ><img alt="image" src="images/${i}" onclick="setCurrImage(${index})" /></div>`
//     })}
// `

const addFirstClass = () => {
    document.getElementById('more-info-block').className = "characteristic-active"
}
const addSecondClass = () => {
    document.getElementById('more-info-block').className = "delivery-active"
}
const addThirdClass = () => {
    document.getElementById('more-info-block').className = "rate-active"
}
const addFourthClass = () => {
    document.getElementById('more-info-block').className = "faq-active"
}
const addFifthClass = () => {
    document.getElementById('more-info-block').className = "more-active"
}

const setImage = (el) => {
    document.getElementById("curr-image-index").className = el
    document.getElementById("curr-image").innerHTML = el
}

$(document).ready(function () {
    $(".img").click(function () {
        $('.nav-image-wrapper').removeClass("active");
        $(this).parent().addClass("active");
    });
});