//xu ly quantity
let quantityElement = document.getElementById('quantity');
let quantity = quantityElement.value;
let render = (quantity) => {
    quantityElement.value = quantity;
}
//xu li dau cong
let handlePlus = () => {
    if (quantity <1000) {
        quantity++;
        render(quantity);
    }

}
//xu li dau tru
let handleMinus = () => {
    if (quantity > 1)//neu ma so luong lon hon 1 thi giam
    {
        quantity--;
        render(quantity);
    }
}
quantityElement.addEventListener('input', () => {
    quantity = quantityElement.value;

    if (quantity <= 0) {
        quantity = 1;
    }
    else if (quantity >= 1000) {
        quantity = 1000;
        alert("Chúng tôi chỉ có 1000 sản phẩm")
    }
    render(quantity);
});
console.log(render(quantity))
// add ro hang

var imgMain = document.querySelector('#imgMain');
var listimg = document.querySelectorAll('.productpage-content-legt-smallimg img');//laydanhsachanh
var btnPrev = document.querySelector('.controlprev')
var btnNext = document.querySelector('.controlnext')
var currentIndex = 0;
var mirror = document.querySelector('#mirror')
function updateImageMainByIndex(index) {
    listimg.forEach(item => {
        item.classList.remove('active');
    })
    var imageindex = listimg[index].getAttribute('src');
    currentIndex = index;
    imgMain.src = imageindex;
    listimg[index].classList.add('active');
    mirror.style.backgroundImage = "url(" + imageindex + ")";//chuyen anh vao guong
}
listimg.forEach((imgElement, index) => {
    imgElement.addEventListener('mouseover', e => {
        updateImageMainByIndex(index);
    })
})
btnPrev.addEventListener('click', () => {
    if (currentIndex == 0) {
        currentIndex = listimg.length - 1;
    }
    else {
        currentIndex--;
    }
    updateImageMainByIndex(currentIndex);
})
btnNext.addEventListener('click', () => {
    if (currentIndex == (listimg.length - 1)) {
        currentIndex = 0;
    }
    else
        currentIndex++;
    updateImageMainByIndex(currentIndex);
})
var mirror = document.querySelector('#mirror')
imgMain.addEventListener('mousemove', function (e) {
    mirror.style.display = 'block'
    let w = this.offsetWidth;
    let h = this.offsetHeight;

    //vi tri cua anh so voi phan tu cha
    let mouseWidthBorderX = e.offsetX;
    let mouseHeightBorderY = e.offsetY;

    let percentMoseByW = (mouseWidthBorderX / w) * 100;
    let percentMoseByH = (mouseHeightBorderY / h) * 100;
    mirror.style.backgroundPosition = percentMoseByW + '%' + percentMoseByH + '%';

})
imgMain.addEventListener('mouseleave', function (e) {
    mirror.style.display = 'none'
})


const showDiv = document.querySelector('.loadmore');
const hideBtn = document.querySelector('#btnLoadMore');
console.log(hideBtn);
btnLoadMore.onclick = function () {
    showDiv.style.display = 'block';
    hideBtn.style.display = 'none';
};
btnUnShow.onclick = function () {
    showDiv.style.display = 'none';
    console.log(showDiv);
    hideBtn.style.display = 'flex';
}


