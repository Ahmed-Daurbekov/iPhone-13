let scrollFunc = () => {
    let links = document.querySelectorAll(".header-menu__item a");
    seamless.polyfill();

    links.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            
            scroll(e)
        })
    })

    let cardDetailsLink = document.querySelector('.card-details__link-characteristics')

    cardDetailsLink.addEventListener('click', (e) => {
        e.preventDefault()

        scroll(e)
    })

    function scroll(e) {
        let id = e.target.getAttribute('href')
        let selector = document.querySelector(id)
        
        if (selector) {
            seamless.elementScrollIntoView(selector, {
                behavior: 'smooth',
                block: 'start'
            })
        } else {
            seamless.elementScrollIntoView(document.querySelector("#characterstics"), {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }
    }
}
scrollFunc()