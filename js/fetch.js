let getData = () => {
    let list = document.querySelector('.cross-sell__list')
    let btn = document.querySelector('.cross-sell__add')

    let stack = 4
    let count = 1

    let renderCard = (data) => {
        list.innerHTML = ''

        data.forEach(item => {

            let html = `
                <li>
                    <article class="cross-sell__item">
                        <img class="cross-sell__image" src="./${item.photo}" alt="${item.id}">
                        <h3 class="cross-sell__title">${item.name}</h3>
                        <p class="cross-sell__price">${item.price}</p>
                        <button type="button" class="button button_buy cross-sell__button">Купить</button>
                    </article>
                </li>
            `

            list.insertAdjacentHTML('beforeend', html)
        });
    }

    let sliceArray = (data, index) => {
        return data.slice(0, index)
    }

    let changeData = (data) => {
        let newStack = stack * count

        renderCard(sliceArray(data, newStack))

        if (data.length > newStack) {
            count++
        } else {
            btn.style.display = 'none'
        }
    }

    let getGoods = () => {
        fetch('/cross-sell-dbase/dbase.json')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Получены некорректные данные')
            }
        })
        .then(data => {
            changeData(data)
        })
        .catch(error => {
            console.error(error.message);
        })
    }

    btn.addEventListener('click', getGoods)

    getGoods()
    
}
getData()