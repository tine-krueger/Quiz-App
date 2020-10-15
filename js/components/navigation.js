export default function navigateTo(sectionId) {
        console.log("Ich wurde ausgeführt!")
        document.querySelectorAll('section')
            .forEach(element => {
                element.classList.add('section--hidden')
            })
        document.querySelector(sectionId).classList.remove('section--hidden')
}