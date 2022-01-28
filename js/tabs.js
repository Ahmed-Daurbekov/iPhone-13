let tabsFunc = () => {
    let tabs = document.querySelectorAll('.card-detail__change')
    let tabsTitle = document.querySelector('.card-details__title')
    let tabsPrice = document.querySelector('.card-details__price')
    let tabsImage = document.querySelector('.card__image_item')
    let title = document.querySelector('title')

    let tabsOptions = [
        {
            name: "Graphite",
            memory: "128",
            price: "99990",
            image: "./img/iPhone-graphite.webp"
        },
        {
            name: "Silver",
            memory: "256",
            price: "119990",
            image: "./img/iPhone-silver.webp"
        },
        {
            name: "Sierra Blue",
            memory: "512",
            price: "169990",
            image: "./img/iPhone-sierra_blue.webp"
        },
    ]

    let changeContent = (index) => {
        tabsTitle.innerHTML = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`
        tabsPrice.innerHTML = `${tabsOptions[index].price}₽`
        title.innerHTML = tabsOptions[index].name

        tabsImage.setAttribute('src', tabsOptions[index].image)
    }

    let changeActiveTabs = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active')

            if (index === indexClickedTab) {
                tab.classList.add('active')
            }
        })

        changeContent(indexClickedTab)
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeActiveTabs(index)
        })
    })
    changeContent(0)
}
tabsFunc()