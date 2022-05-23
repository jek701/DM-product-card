const data = {
    productName: "Подстаканник «Город-Герой Москва»",
    productDescription: "Подарочный подстаканник с изображением Золотой звезды города-героя и герба Москвы. Прекрасный подарочный предмет для большого ценителя истории старинного русского города и гурмана великолепного чайного церемониала, составляющего богатство культуры и особенностей русского застолья. Подстаканник изготовлен из латуни с никелированной поверхностью и чернением под патинированное серебро. Красивый подарочный предмет станет хорошим подарком для гостя или жителя знаменитого города с его яркой и богатой историей и культурой.",
    currPrice: 10190,
    oldPrice: 14990,
    sellerInfo: {
        name: "Павлов Петр Сергеевич",
        owner: "ИП «Павлов Петр Сергеевич»",
        ogrn: "320774600315174"
    },
    sellerRating: {
        rating: 9.5,
        review: 178
    },
    characteristic: {
        material: "Материал ........................................Латунь, хрусталь",
        weight: "Вес ................................................... 350 грамм",
        technique: "Техника ........................................... Ручная работа",
        inTheBox: "Комплектация ............................... Подстаканник - 1 шт., Стакан хрустальный - 1 шт.",
        madeBy: "Производитель .............................. Северная чернь"
    }
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " " + `&#8381;` ;
}

const putPrice = (id) => {
    document.getElementById(id).querySelector(".curr-price").innerHTML = numberWithSpaces(data.currPrice)
    document.getElementById(id).querySelector(".old-price").innerHTML = numberWithSpaces(data.oldPrice)
    document.getElementById(id).querySelector(".sale-amount").innerHTML = (Math.floor((data.currPrice * 100 / data.oldPrice) - 100)).toString() + "%"
}

const putText = (id, querySellector, text) => {
    document.getElementById(id).querySelector(querySellector).innerHTML = text
}


putText("productNameMobile", ".product-name", data.productName)
putText("productInfoDesktop", ".product-name", data.productName)
putText("sellerInfoBlock", "h3", data.sellerInfo.name)
putText("sellerInfoBlock", "#owner", "Владелец: " + data.sellerInfo.owner)
putText("sellerInfoBlock", "#ogrn", "ОГРН: " + data.sellerInfo.ogrn)
putText("sellerRatingBlock", "h3", data.sellerRating.rating)
putText("sellerRatingBlock", "p", data.sellerRating.review + " отзывов")
putText("characteristic", "p:nth-child(1)", data.characteristic.material)
putText("characteristic", "p:nth-child(2)", data.characteristic.weight)
putText("characteristic", "p:nth-child(3)", data.characteristic.technique)
putText("characteristic", "p:nth-child(4)", data.characteristic.inTheBox)
putText("characteristic", "p:nth-child(5)", data.characteristic.madeBy)

putPrice("ProductPriceBlock")
putPrice("ProductPriceBlockDesktop")