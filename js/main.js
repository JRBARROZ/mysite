const text = document.querySelector('.menu-apresentation .title p')
const sections = document.querySelectorAll('.js-scroll');
function addActiveInternLinks(){
    const li = document.querySelectorAll('.nav-intern-links li a');
    li[0].classList.add('active');
    li.forEach((item) =>{
        item.addEventListener('click', () =>{
            li.forEach((item) => {
                item.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });
}
function writeEffect(element){
    const text = element.innerHTML.split('');
    element.innerHTML = '';
    text.forEach((item, i) =>{
        setTimeout(() => {
            element.innerHTML += item;
        }, 75 * i);
    });
}
function descEffect(){
    const li = document.querySelectorAll('.desc-title ul li');
    const tempLi = li;
    const father = li[0].parentElement;
    father.innerHTML = '';
    setTimeout(() => {
    tempLi.forEach((item, index) =>{
            father.appendChild(item);
        })
    }, 4400);
}
function smoothScroll(){
    const links = document.querySelectorAll('.nav-intern-links a');
    function smooth(event){
        event.preventDefault();
        const link = document.querySelector(event.currentTarget.getAttribute('href'))
        window.scrollTo({
            top: link.getBoundingClientRect().top - 30,
            left:0,
        });
    }
    links.forEach((item) => {
        item.addEventListener('click', smooth);
    })
}
function scrollSections (){
    sections[0].classList.add('active');
    window.addEventListener('scroll', () => {
        const height = window.innerHeight * 0.1;
        sections.forEach((item) => {
            const distance = item.getBoundingClientRect().top - height;
            if(distance <= 0){
                item.classList.add('active');
            }
        });
    });
}
window.addEventListener('scroll', () =>{
    const nav = document.querySelector('.nav-fixed');
    nav.classList.toggle('active', window.scrollY > 63);
});



scrollSections();
smoothScroll();
descEffect();
writeEffect(text);
addActiveInternLinks();