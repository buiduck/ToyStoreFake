var messageaddtocard =document.querySelector('.thongbao')
console.log(messageaddtocard);
let handleAddToCart = ()=>{
    const id =1;
    const product=document.querySelector('.productpage-content-mid')
    const productname =product.querySelector('h2').innerText
    const productimage=document.querySelector('#imgMain').getAttribute('src')
    const productprice=product.querySelector('.price').querySelector('span').innerText
    const productquanty=document.querySelector('.quantity').querySelector('input').value
    const productpriceall=(productprice*productquanty*1000).toLocaleString('de-DE')
    const sanpham ={ name:productname,price:productprice,image:productimage,quantity:productquanty,priceall:productpriceall,hanhdong:0}
  
    localStorage.setItem('product',JSON.stringify(sanpham))
    messageaddtocard.style.display='block'
    setTimeout(function(){
        messageaddtocard.style.display='none'
    },2000)
}
let muangay =() =>{
    const id =1;
    const product=document.querySelector('.productpage-content-mid')
    const productname =product.querySelector('h2').innerText
    const productimage=document.querySelector('#imgMain').getAttribute('src')
    const productprice=product.querySelector('.price').querySelector('span').innerText
    const productquanty=document.querySelector('.quantity').querySelector('input').value
    const productpriceall=(productprice*productquanty*1000).toLocaleString('de-DE')
    const sanpham ={ name:productname,price:productprice,image:productimage,quantity:productquanty,priceall:productpriceall,hanhdong:0}
    localStorage.setItem('product',JSON.stringify(sanpham))
}

//hien thi thong bao themthanh cong

