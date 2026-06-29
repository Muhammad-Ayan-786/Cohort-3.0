/* <================ Auth Script ================> */

const authentication = document.getElementById("authentication")

// Style Sheets
const authCSS = document.querySelector('link[href="auth.css"]')
const styleCSS = document.querySelector('link[href="style.css"]')
styleCSS.disabled = true

// Login Card
const loginCard = document.getElementById('loginCard');
const loginForm = document.getElementById('loginForm');

const registerLink = document.getElementById('registerLink');
const loginBtn = document.getElementById('loginBtn');

// Register Card
const registerCard = document.getElementById('registerCard');
const registerForm = document.getElementById('registerForm');

const loginLink = document.getElementById('loginLink');
const registerBtn = document.getElementById('registerBtn');


let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || []
let loggedInUser = JSON.parse(localStorage.getItem("user"))



if (loggedInUser) {
  authentication.setAttribute("hidden", true)
  authCSS.disabled = true
  styleCSS.disabled = false
}


// Registering the User
registerForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const username = e.target[0].value
  const password = e.target[1].value

  let obj = {
    _id: crypto.randomUUID(),
    currency: "$",
    username,
    password
  }

  registeredUsers.push(obj)

  localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers))

  alert("Registration successful! You can now log in.")

  loginCard.removeAttribute("hidden")
  registerCard.setAttribute("hidden", true)
})


// Logging the User
loginForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const username = e.target[0].value
  const password = e.target[1].value

  let arrayObj = JSON.parse(localStorage.getItem("registeredUsers")) || []

  let obj = arrayObj.find((user) => {
    return user.username === username && user.password === password
  })

  if (!obj) {
    alert("Invalid username or password.")
    loginForm.reset()
    return
  }

  localStorage.setItem("user", JSON.stringify(obj))
  userData = obj

  authentication.setAttribute("hidden", true)
  authCSS.disabled = true
  styleCSS.disabled = false

  document.querySelector('#topbarName').innerText = obj.username
  document.querySelector('#settingName').value = obj.username
})


// Open Login Page
registerLink.addEventListener("click", () => {
  loginCard.setAttribute("hidden", true)
  registerCard.removeAttribute("hidden")
})

// Open Register Page
loginLink.addEventListener("click", () => {
  loginCard.removeAttribute("hidden")
  registerCard.setAttribute("hidden", true)
})