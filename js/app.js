// import fetchUsersFunction, { count, getDate } from './auth.js'

// console.log('FROM APP JS: ', count)
// console.log('FROM APP JS: ', getDate())

// fetchUsersFunction()

// const fetchUsersFunction = null

// console.log(window.location)

// window.location.replace('../form.html')

// const urlParams = window.location.search

// const params = new URLSearchParams(urlParams)


// console.log(params.get('password'))
// console.log(params.get('email'))

const addPostToggler = document.querySelector('#add-post-toggler')
const postFormEl = document.querySelector('#post-form')

function postFormRTogglerFunc() {
    postFormEl.classList.toggle('active')
    addPostToggler.classList.toggle('active')
}

addPostToggler.addEventListener('click', postFormRTogglerFunc)