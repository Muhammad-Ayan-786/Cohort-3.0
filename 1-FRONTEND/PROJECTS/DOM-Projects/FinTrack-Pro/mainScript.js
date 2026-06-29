/* <============== Transaction Modal Varialbes ================> */

const transactionModal = document.getElementById('transactionModal'); // Main Modal
const transactionForm = document.getElementById('transactionForm'); // Transaction Form
const closeModal = document.querySelector('.close-modal'); // Span to close Modal

const type = document.getElementById('txType'); // Type
const description = document.getElementById('txDescription'); // Description
const amount = document.getElementById('txAmount'); // Amount
const date = document.getElementById('txDate'); // Date
const category = document.getElementById('txCategory'); // Category

/* <============== Navigation Variables ================> */

const navMenu = document.querySelector('.nav-menu')
const openAddModalBtn = document.getElementById('openAddModalBtn'); // Btn to open Modal


/* <============== Top Bar Variables ================> */

const topbarName = document.getElementById('topbarName'); // Top Bar Name
const logoutBtn = document.getElementById('logoutBtn'); // Logout Button


/* <============== Daskboard View Variables ================> */

const dashboardView = document.getElementById('dashboard-view'); // Dashboard View

// Overview Cards
const displayBalance = document.getElementById('displayBalance'); // Display Balance
const displayIncome = document.getElementById('displayIncome'); // Display Income
const displayExpense = document.getElementById('displayExpense'); // Display Expense
const displayCount = document.getElementById('displayCount'); // Display Count

// Graph - Flow-Chart
const cashFlowChart = document.getElementById('cashFlowChart'); // Cash Flow Chart

// Transaction Table
const searchInput = document.getElementById('searchInput'); // Search Input
const typeFilter = document.getElementById('typeFilter'); // Type Filter

let transactionTableBody = document.getElementById('transactionTableBody'); // Transaction Table Body

// Dark Mode
const darkModeToggle = document.getElementById('darkModeToggle'); // Dark Mode Toggle
const resetDataBtn = document.getElementById('resetDataBtn'); // Reset Data


/* <============== Setting View Variables ================> */

const settingsView = document.getElementById('settings-view'); // Settings View
const settingsForm = document.getElementById('settingsForm'); // Settings Form



/* <============== Global Variables ================> */
let transactions = JSON.parse(localStorage.getItem('transactions')) || []; // Transactions from Local Storage
let userData = JSON.parse(localStorage.getItem('user')) || {}; // User Data from Local Storage
let editTransaction = null;

const overviewCardsInfo = () => {
  let balance = 0;
  let income = 0;
  let expense = 0;
  let count = 0;

  transactions.forEach((tran) => {
    if (tran.type === "income") income += Number(tran.amount)
    if (tran.type === "expense") expense += Number(tran.amount)
  })

  balance = income - expense

  displayBalance.innerText = balance
  displayIncome.innerText = income
  displayExpense.innerText = expense
  displayCount.innerText = transactions.length
}


const transactionsHistoryTiles = (data) => {
  transactionTableBody.innerHTML = ''

  data.forEach((tile) => {
    transactionTableBody.innerHTML += `
      <tr data-id="${tile._id}" class="transtTitle">
        <td>${tile.date}</td>
        <td><strong>${tile.description}</strong></td>
        <td><span class="tag">${tile.category}</span></td>
        <td class="${tile.type === 'income' ? 'text-green' : 'text-red'}">
          ${tile.type === "income" ? '+' : '-'}${userData.currency}${tile.amount}
        </td>
        <td style="display: flex;">
          <button class="action-btn btn-edit"><i class="fa-solid fa-pen"></i></button>
          <button class="action-btn btn-delete"><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
    `
  })
}

transactionTableBody.addEventListener("click", (e) => {
  const editBtn = e.target.closest(".btn-edit")
  const deleteBtn = e.target.closest(".btn-delete")

  if (deleteBtn) {
    const currentTile = deleteBtn.closest(".transtTitle")

    let titeIndexInTransactions = transactions.findIndex(e => e._id === currentTile.dataset.id)

    transactions.splice(titeIndexInTransactions, 1)
    localStorage.setItem("transactions", JSON.stringify(transactions))

    transactionsHistoryTiles(transactions)
    overviewCardsInfo()
  }

  if (editBtn) {
    const currentTile = editBtn.closest(".transtTitle")

    let titeObjInTransactions = transactions.find(e => e._id === currentTile.dataset.id)

    editTransaction = titeObjInTransactions

    type.value = titeObjInTransactions.type
    description.value = titeObjInTransactions.description
    amount.value = titeObjInTransactions.amount
    date.value = titeObjInTransactions.date
    category.value = titeObjInTransactions.category

    transactionModal.classList.add('active')
  }
})


searchInput.addEventListener('input', () => {
  let filtered = transactions.filter((tran) => {
    return tran.description.toLowerCase().includes(searchInput.value.toLowerCase())
  })
  transactionsHistoryTiles(filtered)
})

typeFilter.addEventListener('change', (e) => {
  if (e.target.value === 'income') {
    let incomeFiltered = transactions.filter(tran => tran.type === "income")
    transactionsHistoryTiles(incomeFiltered)

  }
  else if (e.target.value === 'expense') {
    let expenceFiltered = transactions.filter(tran => tran.type === "expense")
    transactionsHistoryTiles(expenceFiltered)
  }
  else transactionsHistoryTiles(transactions)
})


const renderChart = () => {
  let allTranDates = transactions.map(tran => tran.date)
  let allTranIncomes = transactions.map(tran => tran.type === 'income' ? tran.amount : 0)
  let allTranExpences = transactions.map(tran => tran.type === 'expense' ? tran.amount : 0)
  console.log(allTranDates)
  console.log(allTranIncomes);
  console.log(allTranExpences);

  new Chart(cashFlowChart, {
    type: 'bar',
    data: {
      labels: allTranDates,  // dates go here
      datasets: [ // income and expense data go here
        {
          label: 'Income',
          data: allTranIncomes,
          backgroundColor: 'green'
        },
        {
          label: 'Expense',
          data: allTranExpences,
          backgroundColor: 'red'
        }
      ]
    }
  })
}


transactionsHistoryTiles(transactions)
overviewCardsInfo()
renderChart()


transactionForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const type = e.target[1].value
  const description = e.target[2].value
  const amount = e.target[3].value
  const date = e.target[4].value
  const category = e.target[5].value

  if (description.trim() === "") {
    alert("Please enter a description")
    return
  }

  let transactionObj = {
    _id: editTransaction ? editTransaction._id : crypto.randomUUID(),
    type,
    description,
    amount,
    date,
    category
  }

  if (editTransaction) {
    let tileIndexInTransactions = transactions.findIndex(e => e._id === editTransaction._id)
    transactions[tileIndexInTransactions] = transactionObj

    localStorage.setItem("transactions", JSON.stringify(transactions))

    editTransaction = null;
  }
  else {
    transactions.push(transactionObj)
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }

  transactionsHistoryTiles(transactions)
  overviewCardsInfo()

  transactionForm.reset()
  transactionModal.classList.remove('active')
})



openAddModalBtn.addEventListener('click', () => {
  transactionModal.classList.add('active')
})

closeModal.addEventListener('click', () => {
  transactionModal.classList.remove('active')
})


/* Dynamic Content on Load ==========> */
document.addEventListener('DOMContentLoaded', (e) => {
  topbarName.innerText = userData.username
  settingName.value = userData.username
})


/* Navigation Menu Functionality ==========> */
navMenu.addEventListener("click", (e) => {
  const dashboardLink = e.target.closest("#dashboardViewLink")
  const settingLink = e.target.closest("#settingsViewLink")

  if (dashboardLink) {
    document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"))
    dashboardLink.classList.add("active")

    settingsView.classList.remove("active")
    dashboardView.classList.add("active")
  }

  if (settingLink) {
    document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"))
    settingLink.classList.add("active")

    dashboardView.classList.remove("active")
    settingsView.classList.add("active")
  }
})


/* Settings Form Functionality ==========> */
settingsForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const updatedName = e.target[0].value
  const updatedCurrency = e.target[1].value

  const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || []

  const currentUser = registeredUsers.find((user) => user._id === userData._id)

  if (!currentUser) return

  currentUser.username = updatedName
  currentUser.currency = updatedCurrency

  localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers))
  localStorage.setItem('user', JSON.stringify(currentUser))

  userData = currentUser

  topbarName.innerText = updatedName
  updatedName.value = currentUser.username
})


/* Dark Mode Functionality ==========> */
let isDark = JSON.parse(localStorage.getItem("theme")) || false

if (isDark === true) {
  document.body.classList.add("dark-theme")
  darkModeToggle.checked = true
} else {
  localStorage.setItem("theme", false)
  document.body.removeAttribute("class")
  darkModeToggle.checked = false
}

darkModeToggle.addEventListener("change", (e) => {
  if (e.currentTarget.checked === true) {
    document.body.classList.add("dark-theme")
    localStorage.setItem("theme", true)
  } else {
    document.body.classList.remove("dark-theme")
    localStorage.setItem("theme", false)
  }
})


/* Logout Functionality ==========> */
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user")
  window.location.reload()
})