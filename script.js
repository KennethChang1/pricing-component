const btn = document.querySelector(".slider");
const price = document.querySelectorAll('.card__price');
// const a = document.querySelector('.card__title');

btn.addEventListener('click', ()=>{
    price.forEach((element)=>{
        element.classList.toggle('hidden');
    });
});

// console.log(month);