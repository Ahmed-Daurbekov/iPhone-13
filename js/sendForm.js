let sendForm = () => {
    let openModal = document.querySelector('.card-details__button_delivery')
    let cardDetailsTitle = document.querySelector('.card-details__title')
    let modal = document.querySelector('.modal')
    let modalTitle = modal.querySelector('.modal__title')
    let modalClose = modal.querySelector('.modal__close')
    let modalForm = modal.querySelector('form')
    
    openModal.addEventListener('click', () => {
        modal.style.display = 'flex'
        modalTitle.innerHTML = cardDetailsTitle.innerHTML
    })

    function clModal() {
        modal.style.display = 'none'
    }

    modalClose.addEventListener('click', () => {
        clModal()
    })

    modalForm.addEventListener('submit', e => {
        e.preventDefault()
        
        let labels = modal.querySelectorAll('.modal__label')

        let sendMessage = {}

        labels.forEach(label => {
            let span = label.querySelector('span')
            let input = label.querySelector('input')

            sendMessage[span.textContent] = input.value
            input.value = ''
            clModal()
        })

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendMessage),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(() => {
                console.log('send');
            })

        
    })
}
sendForm()