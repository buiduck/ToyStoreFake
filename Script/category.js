var categoryList = document.querySelector('.category-menu-list');

var categoryIcon1 = document.querySelector('.category-menu-icon1');

categoryIcon1.addEventListener('click', function () {
    if (categoryList.style.display === 'none') {
        categoryList.style.display = 'block';
        categoryIcon1.setAttribute("class", "fa fa-minus category-menu-icon1");

    } else {
        categoryList.style.display = 'none';
        categoryIcon1.setAttribute("class", "fab fa-plus category-menu-icon1");
    }
});



var categoryIcon2 = document.querySelector('.category-menu-icon2');

var categoryOption = document.querySelector('.category-menu-option');
console.log(categoryOption);

categoryIcon2.addEventListener('click', function () {
    if (categoryOption.style.display === 'none') {
        categoryOption.style.display = 'block';
        categoryIcon2.setAttribute("class", "fa fa-minus category-menu-icon2");

    } else {
        categoryOption.style.display = 'none';
        categoryIcon2.setAttribute("class", "fab fa-plus category-menu-icon2");

    }
});
