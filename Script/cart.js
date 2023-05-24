
const productdata=JSON.parse(localStorage.getItem('product'))
const productdata1=JSON.parse(localStorage.getItem('product1'))
function chuyenitemthanhhtml(productdata){
    if(productdata==null)
    return'';
    else{
    var html='';
    html =html+'<div class="item-cart">\n'+
    '                                                <div class="hinhanh">\n'+
    '                                                    <img src="'+productdata.image+'" alt="">\n'+
    '                                                </div>\n'+
    '                                                <div class="ten">'+productdata.name+'</div>\n'+
    '                                                <div class="gia"><span>'+productdata.price+'</span><sup>đ</sup></div>\n'+
    '                                                <input type="number" class="soluong" value="'+productdata.quantity+'">\n'+
    '                                                <p class="tongtien">'+productdata.priceall+'<sup>đ</sup></p>\n'+
    '                                                <button class="hanhdong'+productdata.hanhdong+'">\n'+
    '                                                    <i class="fa-solid fa-trash"></i>\n'+
    '                                                </button>\n'+
    '                                            </div>';
    return html;
    }
}
//them sp1
 var nodeproducts =document.querySelector('.cart')
 nodeproducts.innerHTML=nodeproducts.innerHTML+chuyenitemthanhhtml(productdata)
 //them sp2
 nodeproducts.innerHTML=nodeproducts.innerHTML+chuyenitemthanhhtml(productdata1)
 var btndeleteproduct=document.querySelector('.item-cart .hanhdong0')
 var warning =document.querySelector('.warning')
 //xoa san pham 1
 if (btndeleteproduct==null){

 }
 else{
    btndeleteproduct.addEventListener('click',function(e){
    warning.style.display='block'
    var btnyes =warning.querySelector('.btn').querySelector('.btnyes')
    btnyes.addEventListener('click',function(e){
        warning.style.display='none'
        localStorage.removeItem("product");
        location.reload();
    })
    var btnno =warning.querySelector('.btn').querySelector('.btnno')
    btnno.addEventListener('click',function(e){
        warning.style.display='none'  
    })
    
    })
 }
 //xoa san pham 2
 var btndeleteproduct1=document.querySelector('.item-cart .hanhdong1')
 if(btndeleteproduct1==null){

 }
 else{
    btndeleteproduct1.addEventListener('click',function(e){
    warning.style.display='block'
    var btnyes =warning.querySelector('.btn').querySelector('.btnyes')
    btnyes.addEventListener('click',function(e){
        warning.style.display='none'
        localStorage.removeItem("product1");
        location.reload();
    })
    var btnno =warning.querySelector('.btn').querySelector('.btnno')
    btnno.addEventListener('click',function(e){
        warning.style.display='none'  
    })
})
 }
//thaydoi soluong
 var tatcathaydoisoluong = document.querySelectorAll('.item-cart .soluong')
 
 tatcathaydoisoluong.forEach(function(thaydoisoluong,index){
    thaydoisoluong.addEventListener("change",function(e){
        var test =e.target
        var product=test.parentElement
        console.log(product)
        var soluong=product.querySelector('.item-cart .soluong').value
        console.log(soluong)
        var tien =product.querySelector('.item-cart .gia span').innerHTML
        console.log(tien)
        var priceall= product.querySelector('.item-cart .tongtien')
        console.log(priceall)
        var tongtien=(soluong*tien*1000).toLocaleString('de-DE');
         console.log(tongtien)

         priceall.innerHTML=tongtien+'<sup>đ</sup></div>'
         tintongtienthanhtoan()
        // thanhtoan.innerHTML=tongtien+'<sup>đ</sup></div>'
    })
 })
//  thaydoisoluong.addEventListener("input",function(e){
//  var soluong=thaydoisoluong.value
//  console.log(soluong)
//  var tien =document.querySelector('.item-cart .gia span').innerHTML;
//  console.log(tien)
//  var tongtien=(soluong*tien*1000).toLocaleString('de-DE');
//  console.log(tongtien)
//  priceall.innerHTML=tongtien+'<sup>đ</sup></div>'
//  thanhtoan.innerHTML=tongtien+'<sup>đ</sup></div>'


//gan so luong san pham
var soluongsanpham=document.querySelector('.heading-container-gh span')
var laysoluongsanpham=document.querySelectorAll('.item-cart ')
soluongsanpham.innerHTML=laysoluongsanpham.length
//tinhtienthanhtoan
tintongtienthanhtoan()
function tintongtienthanhtoan(){
    var thanhtoan=0
    var soluongsanpham=document.querySelectorAll('.item-cart ')
    for(var i=0;i<soluongsanpham.length;i++){
        var soluong=soluongsanpham[i].querySelector('.item-cart .soluong').value
        
        var tien =soluongsanpham[i].querySelector('.item-cart .gia span').innerHTML
       
        thanhtoan+=(soluong*tien*1000)     
    }
    var tinhthanhtoan= document.querySelector('.total-price')
    thanhtoan=thanhtoan.toLocaleString('de-DE')
    tinhthanhtoan.innerHTML=thanhtoan+'<sup>đ</sup></div>'
}


