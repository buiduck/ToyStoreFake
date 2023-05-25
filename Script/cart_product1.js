var messageaddtocard = document.querySelector('.thongbao')
console.log(messageaddtocard);
let handleAddToCart = () => {
    const checktontai = JSON.parse(localStorage.getItem('product1'));
    if (checktontai == null) {
        const product = document.querySelector('.productpage-content-mid')
        const productname = product.querySelector('h2').innerText
        const productimage = document.querySelector('#imgMain').getAttribute('src')
        const productprice = product.querySelector('.price').querySelector('span').innerText
        const productquanty = document.querySelector('.quantity').querySelector('input').value
        const productpriceall = (productprice * productquanty * 1000).toLocaleString('de-DE')
        const sanpham = { id: 2, name: productname, price: productprice, image: productimage, quantity: productquanty, priceall: productpriceall, hanhdong: 1 }

        localStorage.setItem('product1', JSON.stringify(sanpham))
        messageaddtocard.style.display = 'block'
        setTimeout(function () {
            messageaddtocard.style.display = 'none'
        }, 2000)
    }
    else
        alert("Sản phẩm đã có trong giỏ hàng")
}
let muangay = () => {
    const checktontai = JSON.parse(localStorage.getItem('product1'));
    if (checktontai == null) {
        const product = document.querySelector('.productpage-content-mid')
        const productname = product.querySelector('h2').innerText
        const productimage = document.querySelector('#imgMain').getAttribute('src')
        const productprice = product.querySelector('.price').querySelector('span').innerText
        const productquanty = document.querySelector('.quantity').querySelector('input').value
        const productpriceall = (productprice * productquanty * 1000).toLocaleString('de-DE')
        const sanpham = { id: 2, name: productname, price: productprice, image: productimage, quantity: productquanty, priceall: productpriceall, hanhdong: 1 }
        localStorage.setItem('product1', JSON.stringify(sanpham))
    }
    else
        alert("Sản phẩm đã có trong giỏ hàng")
}