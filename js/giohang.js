var btn = document.querySelectorAll(".btn");
// console.log(btn);
btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        var btnItem = event.target;
        var product = btnItem.parentElement;
        var productImg = product.querySelector("img").src;
        var productName = product.querySelector("h4").textContent;
        var productPrice = product.querySelector("span").textContent;
        // console.log(productPrice, productName, productImg);
        addcart(productImg, productName, productPrice);
    })
})

function addcart(productImg, productName, productPrice) {
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".titleName");
        if (productT[i].innerHTML == productName) {
            cartItem[i].querySelector("input").value = parseInt(cartItem[i].querySelector("input").value) + 1;
            cartTotal();
            return;
        }
    }
    var trcontent = `
        <tr>
            <td style="display: flex; align-items:center;"><img style="width: 70px;" src="${productImg}" alt=""><span class="titleName">${productName}</span></td>
            <td><p><span class="price">${productPrice}</span>.000<sup>đ</sup></p></td>
            <td><input style="width: 35px; outline: none;" type="number" value="1" min="1" max="10"></td>
            <td style="cursor: pointer;"><button class="cart-delete" style="padding: 5px;">Xoá</button></td>
        </tr>
    `;
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody");
    // console.log(cartTable);
    cartTable.append(addtr);
    cartTotal();
    deleteCart();
}

function cartTotal() {
    var totalB = 0;
    var cartItem = document.querySelectorAll("tbody tr");
    // console.log(cartItem);
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value;
        var productPrice = cartItem[i].querySelector(".price").innerHTML;
        totalA = inputValue * productPrice * 1000000;
        totalB += totalA;
        // console.log(totalC);
    }
    var cartTotalA = document.querySelector(".price-total span");
    cartTotalA.innerHTML = totalB.toLocaleString("de-DE");
    inputchange();
}

function deleteCart() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-delete");
        productT[i].addEventListener("click", function (event) {
            var cartDelete = event.target;
            var cartItemR = cartDelete.parentElement.parentElement;
            cartItemR.remove();
            cartTotal();
            // console.log(cartItemR);
        })
    }
}

function inputchange() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change", function () {
            cartTotal();
        })
    }
}