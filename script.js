// variable for the toggle button
const menuButton = document.querySelector('.menu-toggle')

// variable for the nav element
const nav = document.querySelector('nav')

console.log(menuButton)
console.log(nav)

// function, which listens for the user to click the menu button
// when the user clicks the button, add the open class to the nav el

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open')
})
