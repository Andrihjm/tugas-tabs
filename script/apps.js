const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");


btns.forEach(e => {
    e.addEventListener('click', () => {
        btns.forEach(btn => btn.classList.remove('active'))
        e.classList.add('active')
        
        const targetId = e.getAttribute('data-id')
        
        articles.forEach(content => {
            content.classList.remove('active')
        })

        document.getElementById(targetId).classList.add('active')
    })
})