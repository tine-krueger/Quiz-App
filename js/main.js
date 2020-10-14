import addRemove from './components/navigation'

document
    .querySelector('#home-button')
    .addEventListener('click', () => {
        addRemove('#home')
    })

document
    .querySelector('#bookmarks-button')
    .addEventListener('click', () => {
        addRemove('#bookmarks')
    })

document
    .querySelector('#create-button')
    .addEventListener('click', () => {
        addRemove('#create-question')
    })

document
    .querySelector('#profile-button')
    .addEventListener('click', () => {
        addRemove('#profile')
    })