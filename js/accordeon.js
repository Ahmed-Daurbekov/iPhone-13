let accordeonFunc = () => {
    let chItems = document.querySelectorAll('.characteristics__item')

    chItems.forEach(item => {
        let chButton = item.querySelector('.characteristics__title')
        let chContent = item.querySelector('.characteristics__description')

        chButton.addEventListener('click', () => {
            if(chContent.classList.contains('open')) {
                chContent.style.height = ''
            } else {
                chContent.style.height = chContent.scrollHeight + 'px'
            }

            chContent.classList.toggle('active')
            chContent.classList.toggle('open')
        })
    })
}
accordeonFunc()