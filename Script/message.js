const btncallmessage = document.querySelector(".phone-call");
const btnthem=btncallmessage.querySelector("button")
const message =document.querySelector(".message")
const btnthoat=message.querySelector(".btn-escape")
btnthem.addEventListener('click',function(e){
    message.style.display='block'

})
btnthoat.addEventListener('click',function(e){
    message.style.display='none'
})
const truocchat =document.querySelector(".truocchat")
const sauchat=document.querySelector(".sauchat")
const batdauchat =truocchat.querySelector("button")
batdauchat.addEventListener('click',function(e){
    truocchat.style.display='none'
    sauchat.style.display='block'
})
