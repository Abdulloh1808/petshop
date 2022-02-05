const header = document.querySelector('.header'),
categoryItem = document.querySelectorAll('.category__item'),
category = document.querySelector('.category')

// console.log(windowY);

window.addEventListener('scroll' , function scroll() {
    let windowY = window.scrollY
    if (window.scrollY > category.offsetTop / 2) {
        for (let i = 0; i < categoryItem.length; i++) {
            const item = categoryItem[i];
            item.style.transform = `translate(${0}%)`
            
        }
    }    
})
 
const productItem = document.querySelectorAll('.product__item'),
product = document.querySelector('.product') 

window.addEventListener('scroll' , function scroll() {
        if (window.scrollY > product.offsetTop /1.3) {
        for (let i = 0; i < productItem.length; i++) {
            const item = productItem[i];
            item.style.transform = `translateX(${0}%)`
        }
    }
})


const specialItem = document.querySelectorAll('.special__item'),
special= document.querySelector('.special')

window.addEventListener('scroll' , function scroll() {
    if (window.scrollY > special.offsetTop / 1.2    ) {
        for (let i = 0; i < specialItem.length; i++) {
            const item = specialItem[i];
            item.style.transform = `translateX(${0}%)`
        }
    }
})

const doctorItem = document.querySelectorAll('.doctor__item'),
doctor= document.querySelector('.doctor')

window.addEventListener('scroll' , function scroll(){
    if (window.scrollY > doctor.offsetTop / 1.1) {
        for (let i = 0; i < doctorItem.length; i++) {
            const item = doctorItem[i];
            item.style.transform = `translate(${0}%)`
            
        }
    }
})
    
const logo = document.querySelector('.logo'),
windowFollow = document.querySelector('.window__follow'),
headerWindow = document.querySelector('.header__window'),
windowBox =document.querySelector('.window__box')

logo.addEventListener('click', function click() {
    headerWindow.classList.add('active')
    windowBox.classList.add('active')   
} ) 

windowFollow.addEventListener('click' , function click(){
    headerWindow.classList.remove('active')
    windowBox.classList.remove('active')
})


