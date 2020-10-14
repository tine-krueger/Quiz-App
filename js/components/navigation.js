export default function addRemove(id) {
        document.querySelectorAll('section')
            .forEach(element => {
                element.classList.add('section--hidden')
            })
            document.querySelector(id).classList.remove('section--hidden')
}