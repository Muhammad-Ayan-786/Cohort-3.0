/* <========================== TASK MANAGER ==========================> */

// Forms & Inputs Selections
const form = document.querySelector('#taskForm')

const taskTitleInput = document.querySelector('#taskTitleInput')
const taskCategorySelect = document.querySelector('#taskCategorySelect')

const addTaskBtn = document.querySelector('#addTaskBtn')

const taskList = document.querySelector('#taskList')

// Tasks DOM Container Selection
const taskCounter = document.querySelector('#taskCounter')

const taskListContainer = document.querySelector('#taskList')

const emptyState = document.querySelector('#emptyState')

// Logics Variables
let taskArr = []
let counter = 0
let editingId = null

const showTasks = () => {
  taskArr.length === 0 ?
    emptyState.removeAttribute("hidden") :
    emptyState.setAttribute("hidden", true)

  taskListContainer.innerHTML = ''
  taskCounter.innerHTML = counter

  taskArr.forEach((elem) => {
    taskListContainer.innerHTML += `
       <li 
        class="task-card"
        data-id="${elem._id}"
        data-status="${elem.status}"
        data-category="${elem.category}"
      >
        <div class="task-card-main">
          <p class="task-title">${elem.title}</p>
          <div class="task-meta">
            <span class="badge badge-category">${elem.category}</span>
            <span class="badge badge-status">${elem.status === "pending" ? "Pending" : "Completed"}</span>
          </div>
        </div>

        <div class="task-actions">
          <button type="button" class="icon-btn edit-btn" aria-label="Edit task">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 3a2.85 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
          </button>
          <button type="button" class="icon-btn complete-btn" aria-label="Mark task complete">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </button>
          <button type="button" class="icon-btn delete-btn" aria-label="Delete task">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0l-1 14a2 2 0 01-2 2H7a2 2 0 01-2-2L4 6h16z" />
            </svg>
          </button>
        </div>
      </li>
    `
  })
}

showTasks()


taskListContainer.addEventListener("click", (e) => {
  let editBtn = e.target.closest(".edit-btn")
  let completeBtn = e.target.closest(".complete-btn")
  let deleteBtn = e.target.closest(".delete-btn")

  if (!editBtn && !completeBtn && !deleteBtn) return

  else if (editBtn) {
    if (editingId !== null) {
      let oldCard = taskListContainer.querySelector(`[data-id="${editingId}"]`)
      oldCard.querySelector(".complete-btn").removeAttribute("hidden")
      oldCard.querySelector(".delete-btn").removeAttribute("hidden")
      oldCard.querySelector(".edit-btn").removeAttribute("style")
    }

    let currentCard = e.target.closest(".task-card")
    let currentEditBtn = currentCard.querySelector(".edit-btn")

    let completeBtn = currentCard.querySelector(".complete-btn")
    let deleteBtn = currentCard.querySelector(".delete-btn")

    let currentObj = taskArr.find(elem => elem._id === currentCard.dataset.id)

    editingId = currentObj._id

    currentEditBtn.setAttribute("style", "background: var(--primary-soft); color: var(--primary);")

    taskTitleInput.value = currentObj.title
    taskCategorySelect.value = currentObj.category
    addTaskBtn.lastElementChild.innerHTML = "Edit Task"

    taskTitleInput.focus()

    completeBtn.setAttribute("hidden", true)
    deleteBtn.setAttribute("hidden", true)
  }

  else if (completeBtn) {
    let currentCard = e.target.closest(".task-card")
    let completedBadge = currentCard.querySelector(".badge-status")

    let currentObj = taskArr.find(elem => elem._id === currentCard.dataset.id)

    if (currentObj.status === "pending") {
      currentObj.status = "completed"
      completedBadge.innerText = "Completed"
      currentCard.dataset.status = "completed"
    } else {
      currentObj.status = "pending"
      completedBadge.innerText = "Pending"
      currentCard.dataset.status = "pending"
    }
  }

  else if (deleteBtn) {
    let currentCard = e.target.closest(".task-card")
    let currentObjIdx = taskArr.findIndex(elem => elem._id === currentCard.dataset.id)

    taskArr.splice(currentObjIdx, 1)
    counter--
    showTasks()
  }
})


form.addEventListener("submit", (e) => {
  e.preventDefault()

  let title = taskTitleInput.value
  let category = taskCategorySelect.value

  if (title.trim() === "") {
    taskTitleInput.value = ""
    addTaskBtn.lastElementChild.innerHTML = "Add Task"
    editingId = null
    return
  }

  let taskObj = {
    _id: crypto.randomUUID(),
    title,
    category,
    status: "pending"
  }

  if (editingId === null) {
    taskArr.push(taskObj)
    counter++
  }
  else {
    let taskToUpdate = taskArr.find(elem => elem._id === editingId)

    taskToUpdate.title = title
    taskToUpdate.category = category
    taskToUpdate.status = "pending"

    addTaskBtn.lastElementChild.innerHTML = "Add Task"
    editingId = null
  }

  showTasks()
  form.reset()
})



/* <========================== THEME TOGGLE SWITCH =========================> */
const html = document.querySelector('html')
const themeToggle = document.querySelector('.theme-toggle')

let theme = localStorage.getItem('theme') || 'light'

html.dataset.theme = theme
themeToggle.dataset.theme = theme

themeToggle.addEventListener('click', () => {
  if (localStorage.getItem('theme') === 'light') {
    theme = localStorage.setItem('theme', 'dark')
    html.dataset.theme = localStorage.getItem('theme')
    themeToggle.dataset.theme = localStorage.getItem('theme')
  }
  else {
    theme = localStorage.setItem('theme', 'light')
    html.dataset.theme = localStorage.getItem('theme')
    themeToggle.dataset.theme = localStorage.getItem('theme')
  }
})



/* <========================== EVENT PROPAGATION DEMO =========================> */
const grandParent = document.querySelector('#grandparent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');


grandParent.addEventListener('click', () => {
  console.log('GrandParent (Capturing)')
}, true)

parent.addEventListener('click', () => {
  console.log('Parent (Capturing)')
}, true)

child.addEventListener('click', () => {
  console.log('Child (Capturing)')
}, true)

grandParent.addEventListener('click', () => {
  console.log('GrandParent (Bubbling)')
}, false)

parent.addEventListener('click', () => {
  console.log('Parent (Bubbling)')
}, false)

child.addEventListener('click', () => {
  console.log('Child (Bubbling)')
}, false)