//xu ly quantity
let quantityElement =document.getElementById('quantity');
let quantity=quantityElement.value;
let render =(quantity)=>{
    quantityElement.value=quantity;
}
//xu li dau cong
let handlePlus = () =>{
    quantity++;
    render(quantity);
}
//xu li dau tru
let handleMinus = () =>{
    if(quantity>1)
    {
        quantity--;
        render(quantity);
    } 
}
quantityElement.addEventListener('input',() =>{
    quantity=quantityElement.value;
    
    if(quantity<=0){
        quantity=1;
    }
    render(quantity);
});
// add ro hang
let handleAddToCart = ()=>{
    alert("Them thanh cong");
}
//anh
let handleImg1 = () =>{
    let img =document.getElementById('anh1');
    let srcImg=img.src;
    document.getElementById('imgMain').src=srcImg;
}
let handleImg2 = () =>{
    let img =document.getElementById('anh2');
    let srcImg=img.src;
    document.getElementById('imgMain').src=srcImg;
}
let handleImg3 = () =>{
    let img =document.getElementById('anh3');
    let srcImg=img.src;
    document.getElementById('imgMain').src=srcImg;
}
let handleImg4 = () =>{
    let img =document.getElementById('anh4');
    let srcImg=img.src;
    document.getElementById('imgMain').src=srcImg;
}
let handleImg5 = () =>{
    let img =document.getElementById('anh5');
    let srcImg=img.src;
    document.getElementById('imgMain').src=srcImg;
}

