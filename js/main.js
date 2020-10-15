import navigateTo from './components/navigation'

document
    .querySelectorAll('.nav__button')
    .forEach(element => {
        console.log(element)
        element.addEventListener('click', (event) => {
            event.preventDefault()
            console.log(element, event)
            navigateTo(event.target.getAttribute('data-href'))
        })
    })
   

