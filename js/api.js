async function getProduct() {
    const response = await fetch("http://192.168.1.13:9999/product");
    const jsonData = await response.json();
    console.log(jsonData);
    // console.log('name: ' + jsonData.price);
    // console.log('description: ' + jsonData.description);
    renderAllProduct(jsonData);
}
function renderAllProduct(product) {
    var products = document.querySelector("#products");
    // console.log(products);
    var productHTML = "";
    for (let i = 0; i < product.length; i++) {
        productHTML += `
            <div class="content-item">
                <img src="${product[i].linkImage}" alt="anh">
                    <div class="content-item-text">
                        <h4>${product[i].name}</h4>
                        <p><span>${product[i].price}</span><sup>đ</sup></p>
                    </div>
                <button class="btn">Thêm vào giỏ hàng</button>
            </div>
        `;
        console.log(productHTML);
    }
    products.innerHTML = productHTML;
}