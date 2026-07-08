import { WEATHER_API_KEY } from "./config.js";

/* Global Variables */
let body = document.body
let allScreens = Array.from(document.querySelectorAll(".screen"));  // All Screens


/* Get Full Date & Time Function (Global Function) */
const dateClass = () => {
  return {
    showDate: (DOM_ELEM) => {
      let date = new Date

      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      const weekDays = [
        "Sun", "Mon", "Tues", "Wed", "Thus", "Fri", "Sat"
      ]

      let weekStr = weekDays[date.getDay()].toUpperCase()
      let monthStr = months[date.getMonth()].toUpperCase()
      let dateStr = date.getDate()
      let yearStr = date.getFullYear()

      let fullDate = `${weekStr}, ${monthStr} ${dateStr}, ${yearStr}`

      if (DOM_ELEM) DOM_ELEM.innerText = fullDate

      return fullDate
    },
    showTime: (DOM_ELEM) => {
      setInterval(() => {
        let date = new Date

        let hours = date.getHours().toString().padStart(2, '0')
        let minutes = date.getMinutes().toString().padStart(2, '0')
        let seconds = date.getSeconds().toString().padStart(2, '0')

        DOM_ELEM.innerText = `${hours}:${minutes}:${seconds}`

        return [hours, minutes, seconds]
      }, 1000);
    },
    setDynamicBackground: () => {
      const applyBg = () => {
        let date = new Date
        let hours = date.getHours()
        let timeOfDay;

        if (hours >= 5 && hours <= 11) timeOfDay = 'morning'
        else if (hours > 11 && hours <= 17) timeOfDay = 'afternoon'
        else if (hours > 17 && hours <= 19) timeOfDay = 'evening'
        else timeOfDay = 'night'

        body.classList.remove('bg-morning', 'bg-afternoon', 'bg-evening', 'bg-night')
        body.classList.add(`bg-${timeOfDay}`)
      }

      applyBg()
      setInterval(applyBg, (3 * 60 * 1000))
    }
  }
}


/* Toggle Theme Function (Global Function) */
const toggleTheme = (listener) => {
  let theme = JSON.parse(localStorage.getItem('theme')) || false
  theme ?
    body.classList.add('dark-theme') :
    body.classList.remove('dark-theme')

  listener.addEventListener("click", () => {
    body.classList.toggle('dark-theme')

    localStorage.setItem("theme", false)

    if (body.classList.contains('dark-theme')) {
      localStorage.setItem("theme", true)
    }
  })
}


/* Home Page which shows everything in cards */
function homePage() {
  // Dynamic Background
  dateClass().setDynamicBackground()

  const liveTime = document.getElementById("live-time");
  const liveDate = document.getElementById("live-date");
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  let navScreenCard = document.querySelectorAll('.nav-card, .back-btn');

  toggleTheme(themeToggleBtn)

  // Navigation to Different Screens
  navScreenCard.forEach(card => {
    card.addEventListener('click', () => {
      allScreens.forEach(screen => screen.classList.remove('active-screen'))

      let newScreen = allScreens.find(screen => card.getAttribute('data-target') === screen.getAttribute('id'))

      newScreen.classList.add('active-screen')
    })
  })

  // Live Date & Time
  dateClass().showDate(liveDate)
  dateClass().showTime(liveTime)
}
homePage()



/* Todo Page which shows todo list */
function todoPage() {
  const cardTodoCount = document.getElementById("card-todo-count");

  const todoInput = document.getElementById("todo-input");
  const addTodoBtn = document.getElementById("add-todo-btn");

  const todoListContainer = document.getElementById("todo-list");

  const completedTasks = document.getElementById("completed-tasks");
  const activeTasks = document.getElementById("active-tasks");
  const focusScore = document.getElementById("focus-score");

  toggleTheme(document.getElementById("toggle-theme-todo"))

  let todoArr = JSON.parse(localStorage.getItem("todoArr")) || []

  // Left Over Task Count in Home Page Todo Card
  const leftOverTask = () => {
    let leftOver = todoArr.filter((todo) => todo.completed === false)
    cardTodoCount.innerText = `${leftOver.length} TASKS LEFT`
  }
  leftOverTask()

  // Completed Score
  const showCompletedTodo = () => {
    let checkedTodos = todoArr.filter((todo) => todo.completed === true)
    completedTasks.innerText = checkedTodos.length
    return checkedTodos.length
  }
  showCompletedTodo()

  // Active Tasks
  const showActiveTodo = () => {
    let uncheckedTodos = todoArr.filter((todo) => todo.completed === false)
    activeTasks.innerText = uncheckedTodos.length
    return uncheckedTodos.length
  }
  showActiveTodo()

  // Focus Score
  const showFocusScoreInPercentage = () => {
    let completed = showCompletedTodo()
    let total = todoArr.length

    let percentage = total === 0
      ? 0
      : Math.round((completed / total) * 100)

    focusScore.innerText = `${percentage}%`
  }
  showFocusScoreInPercentage()


  // Display all Todos from local storage
  const displayTodo = () => {
    todoListContainer.innerHTML = ''

    if (todoArr.length === 0) {
      todoListContainer.innerHTML = `
      <li class="task-item" style="text-align: center; background: var(--accent-violet);">
        <span class="task-text">No todos yet</span>
      </li>
      `
    }

    todoArr.forEach((todo) => {
      todoListContainer.innerHTML += `
      <li class="task-item" data-id="${todo._id}">
        <span class="checkbox-square ${todo.completed && 'checked'}">
          ${todo.completed ? `<span class="material-symbols-outlined">check</span>` : ''}
        </span>
        <span class="task-text ${todo.completed && 'done'}">${todo.todo}</span>
        <button class="icon-btn delete-btn"><span class="material-symbols-outlined">delete</span></button>
      </li>
      `
    })
  }
  displayTodo()


  // Delete & Complete Functionality in each Todo
  todoListContainer.addEventListener('click', (e) => {
    const checkBox = e.target.closest('.checkbox-square')
    const deleteBtn = e.target.closest('.delete-btn')

    if (checkBox) {
      const currentTodoTile = checkBox.closest('.task-item')
      const todoText = currentTodoTile.querySelector('.task-text')

      let currentTodo = todoArr.find(todo => currentTodoTile.dataset.id === todo._id)

      if (currentTodo.completed) {
        currentTodo.completed = false;
        localStorage.setItem("todoArr", JSON.stringify(todoArr))

        todoText.classList.remove('done')
        checkBox.classList.remove('checked')
        checkBox.innerHTML = ''
        showCompletedTodo()
        showActiveTodo()
        showFocusScoreInPercentage()
        leftOverTask()
      }
      else {
        currentTodo.completed = true;
        localStorage.setItem("todoArr", JSON.stringify(todoArr))

        todoText.classList.add('done')
        checkBox.classList.add('checked')
        checkBox.innerHTML = '<span class="material-symbols-outlined">check</span>'
        showCompletedTodo()
        showActiveTodo()
        showFocusScoreInPercentage()
        leftOverTask()
      }
    }

    if (deleteBtn) {
      const currentTodoTile = deleteBtn.closest('.task-item')
      let todoToDelete = todoArr.findIndex(todo => currentTodoTile.dataset.id === todo._id)

      let dTodo = todoArr.splice(todoToDelete, 1)
      localStorage.setItem("todoArr", JSON.stringify(todoArr))

      displayTodo()
      showCompletedTodo()
      showActiveTodo()
      showFocusScoreInPercentage()
      leftOverTask()
    }
  })


  // Function to add a new todo
  const addTodoFunc = () => {
    let todo = todoInput.value

    if (todo.trim() === '') return alert('Please enter a todo')

    let obj = {
      _id: crypto.randomUUID(),
      todo,
      completed: false
    }

    todoArr.push(obj)
    localStorage.setItem("todoArr", JSON.stringify(todoArr))
    displayTodo()
    showCompletedTodo()
    showActiveTodo()
    showFocusScoreInPercentage()
    leftOverTask()

    todoInput.value = ''
  }

  // Adding New Todo in Todo List
  addTodoBtn.addEventListener('click', addTodoFunc)

  todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTodoFunc()
  })
}
todoPage()



/* Daily Planner Page where you can set your daily schedule */
function dailyPlannerPage() {
  const currentDate = document.getElementById("current-date");
  const resetPlannerBtn = document.getElementById("reset-planner-btn");

  const plannerInputs = Array.from(document.querySelectorAll('.planner-row input'))

  let plannerObj = JSON.parse(localStorage.getItem("plannerObj")) || {}

  // Today's Date
  let date = dateClass().showDate().slice(0, -6)
  currentDate.innerText = date

  // Reset Planner
  resetPlannerBtn.addEventListener('click', () => {
    let confirmation = confirm('Are you sure you want to reset your planner?')

    if (!confirmation) return
    plannerObj = {}
    localStorage.setItem("plannerObj", JSON.stringify(plannerObj))
    plannerInputs.forEach(input => input.value = '')
  })

  // Display Planner
  plannerInputs.forEach(input => {
    const timekey = input.closest('.planner-row').dataset.time

    if (plannerObj[timekey]) input.value = plannerObj[timekey]

    input.addEventListener('blur', () => {
      if (input.value.trim() === '') {
        delete plannerObj[timekey]
        localStorage.setItem("plannerObj", JSON.stringify(plannerObj))
        return
      }

      plannerObj[timekey] = input.value
      localStorage.setItem("plannerObj", JSON.stringify(plannerObj))
    })
  })
}
dailyPlannerPage()


/* Motivation Page which shows motivational quotes */
function motivationPage() {
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");
  const quoteTextDesktopCard = document.querySelector(".quote-text");
  const quoteAuthorDesktopCard = document.querySelector(".quote-author");
  const newQuoteBtn = document.getElementById("new-quote-btn");

  const fetchQuotes = async () => {
    try {
      let res = await fetch('https://dummyjson.com/quotes')
      let { quotes } = await res.json()
      return quotes
    } catch (error) {
      quoteText.innerText = "Couldn't load a quote right now."
      quoteAuthor.innerText = "Please check your connection and try again."
      console.log(error)
    }
  }

  const randomQuote = async () => {
    let quotesArr = await fetchQuotes()

    if (quotesArr === undefined || quotesArr.length === 0) return;

    const randomNum = Math.floor(Math.random() * quotesArr.length)

    let quoteObj = quotesArr[randomNum]

    quoteText.innerText = quoteObj.quote
    quoteAuthor.innerText = quoteObj.author

    quoteTextDesktopCard.innerText = quoteObj.quote
    quoteAuthorDesktopCard.innerText = quoteObj.author
  }

  quoteText.innerText = "Loading..."
  randomQuote()

  newQuoteBtn.addEventListener('click', randomQuote)
}
motivationPage()



/* Pomodoro Timer Page which shows pomodoro timer */
function pomodoroPage() {
  const pomodoroTimer = document.getElementById("timer-display");
  const startBtn = document.getElementById("start-pause-btn");
  const resetBtn = document.getElementById("reset-btn");
  const notifyBtn = document.getElementById("alert-btn");

  let togglePauseBtn = startBtn.firstElementChild;

  toggleTheme(document.getElementById("toggle-theme-pomodoro"))

  let totalMinutes = 25 * 60
  let pomodoroInterval = null
  let isRunning = false
  let audio = new Audio('./timer.mp3')


  // Display the timer countdown
  const displayTimer = () => {
    let minute = Math.floor(totalMinutes / 60)
    let second = totalMinutes % 60

    let minuteStr = minute.toString().padStart(2, '0')
    let secondStr = second.toString().padStart(2, '0')

    pomodoroTimer.innerText = `${minuteStr}:${secondStr}`
  }
  displayTimer()

  // Stop the audio
  function stopAudio() {
    audio.pause()
    audio.currentTime = 0
  }

  // Stop the timer
  function stopTimer() {
    clearInterval(pomodoroInterval)
    pomodoroInterval = null
  }

  // Reset the timer
  function resetTimerState() {
    totalMinutes = 25 * 60
    displayTimer()
  }

  // Timer logic
  const timerLogic = () => {
    totalMinutes--
    displayTimer()

    if (totalMinutes === 0) {
      stopTimer()
      audio.play()
      isRunning = false

      togglePauseBtn.innerText = 'play_arrow'
      notifyBtn.style.background = 'var(--purple)'

      return
    }
  }

  // Start the timer
  startBtn.addEventListener('click', () => {
    if (!isRunning) {
      stopAudio()
      stopTimer()
      notifyBtn.style.background = 'var(--blue-soft)'
      togglePauseBtn.innerText = 'pause'
      pomodoroInterval = setInterval(timerLogic, 1000);
      isRunning = true
    }
    else {
      togglePauseBtn.innerText = 'play_arrow'
      stopTimer()
      isRunning = false
    }
  })

  // Reset the timer
  resetBtn.addEventListener('click', () => {
    if (audio) notifyBtn.style.background = 'var(--blue-soft)'

    togglePauseBtn.innerText = 'play_arrow'
    stopAudio()
    stopTimer()
    resetTimerState()
    isRunning = false;
  })

  // Notify the user
  notifyBtn.addEventListener('click', () => {
    stopAudio()
    resetTimerState()
    notifyBtn.style.background = 'var(--blue-soft)'
  })
}
pomodoroPage()



/* Daily Goals Page which shows daily goals */
function dailyGoalsPage() {
  const cardGoalsBar = document.getElementById("card-goals-bar");
  const cardGoalsPercent = document.getElementById("card-goals-percent");

  const goalsCount = document.getElementById("goals-count").firstElementChild;
  const goalsBar = document.getElementById("goals-bar");

  const resetGoalsBtn = document.getElementById("reset-goals-btn");

  const goalInput = document.getElementById("goal-input");
  const addGoalBtn = document.getElementById("add-goal-btn");

  const goalsListContainer = document.getElementById("goals-list");

  const goalsBannerText = document.getElementById("goals-banner-text");

  let goalsArr = JSON.parse(localStorage.getItem("goalsArr")) || []

  // Get the length of the goals
  function goalsLength() {
    let incompleteLen = goalsArr.filter(goal => goal.completed === false).length
    let compltedLen = goalsArr.filter(goal => goal.completed === true).length
    return {
      completedLength: compltedLen,
      incompleteLength: incompleteLen,
      toalLength: goalsArr.length
    }
  }


  // Update the daily goal count
  function updateGoalCount() {
    goalsCount.innerText = `${goalsLength().completedLength} of ${goalsLength().toalLength}`
  }
  updateGoalCount()


  // Update the goals bar percentage in Goals Page & Home Page's Goals Card
  function updateGoalsBar() {
    let total = goalsLength().toalLength
    let percent = total === 0 ? 0 : (goalsLength().completedLength / total) * 100

    goalsBar.style.width = `${percent}%`
    cardGoalsBar.style.width = `${percent}%`
    cardGoalsPercent.innerText = `${Math.round(percent)}%`
  }
  updateGoalsBar()


  // Update the text in the banner
  function updateTextInBanner() {
    let leftoverGoals = goalsLength().incompleteLength
    goalsBannerText.innerText = leftoverGoals === 0 ?
      `You've completed all your goals for the day!` :
      `You're just ${leftoverGoals} goals away from hitting your daily focus target. Keep the momentum going!`
  }
  updateTextInBanner()


  // Helper function to format the current time
  function formatCurrentTime() {
    let hour24 = new Date().getHours()
    let minutes = new Date().getMinutes().toString().padStart(2, '0')
    let period = hour24 >= 12 ? 'PM' : 'AM'
    let hour12 = hour24 % 12 || 12
    return `${hour12}:${minutes} ${period}`
  }


  // Display all Goals from local storage
  const displayGoals = () => {
    goalsListContainer.innerHTML = ''

    if (goalsArr.length === 0) {
      goalsListContainer.innerHTML = `
      <li class="task-item" style="text-align: center; background: var(--accent-violet);">
        <span class="task-text">No Goals yet</span>
      </li>
      `
    }

    goalsArr.forEach((goal) => {
      goalsListContainer.innerHTML += `
        <li class="task-item card-item" data-id="${goal._id}">
          <span class="check-circle ${goal.completed && 'done'}">
          ${goal.completed && '✓'}
          </span>
          <div>
            <span class="task-text">${goal.goal}</span>
            <br>
            <span class="muted small">Added at ${goal.time}</span>
          </div>
        </li>
      `
    })
  }
  displayGoals()


  // Checkbox functionality in each goal
  goalsListContainer.addEventListener('click', (e) => {
    const checkBox = e.target.closest('.check-circle')

    if (checkBox) {
      const currentGoalTile = checkBox.closest('.task-item')
      const currentGoal = goalsArr.find(goal => currentGoalTile.dataset.id === goal._id)

      if (currentGoal.completed) {
        currentGoal.completed = false
        localStorage.setItem("goalsArr", JSON.stringify(goalsArr))
        displayGoals()
        updateGoalCount()
        updateGoalsBar()
        updateTextInBanner()
      }
      else {
        currentGoal.completed = true
        localStorage.setItem("goalsArr", JSON.stringify(goalsArr))
        displayGoals()
        updateGoalCount()
        updateGoalsBar()
        updateTextInBanner()
      }
    }
  })


  // Reset all goals 
  const resetAllGoals = () => {
    let ans = confirm('Are u sure you want to delete all your goals ?')

    if (ans) {
      goalsArr = []
      localStorage.setItem("goalsArr", JSON.stringify(goalsArr))
      displayGoals()
      updateGoalCount()
      updateGoalsBar()
      updateTextInBanner()
    }
  }
  resetGoalsBtn.addEventListener('click', resetAllGoals)


  // Function to add a new goal
  const addGoal = () => {
    let goal = goalInput.value

    if (goal.trim() === '') return alert('Please enter a goal')

    let obj = {
      _id: crypto.randomUUID(),
      goal,
      completed: false,
      time: formatCurrentTime()
    }

    goalsArr.push(obj)
    localStorage.setItem("goalsArr", JSON.stringify(goalsArr))
    displayGoals()
    updateGoalCount()
    updateGoalsBar()
    updateTextInBanner()

    goalInput.value = ''
  }


  // Element that triggers the add goal function
  addGoalBtn.addEventListener('click', addGoal)
  goalInput.addEventListener('keydown', e => e.key === 'Enter' && addGoal())
}
dailyGoalsPage()



/* Weather Page which shows weather information */
function weatherPage() {
  const cardTempCondition = document.getElementById("card-temp-condition");
  const cardTempLocation = document.getElementById("card-temp-location");
  const cardTempIcon = document.getElementById("card-temp-icon")
  const cardTemp = document.getElementById("card-temp");

  const locationInput = document.getElementById("location-input");
  const locationBtn = document.getElementById("search-btn");

  const locationName = document.getElementById("location-name").lastElementChild;
  const locationTime = document.getElementById("location-time");
  const currentTemp = document.getElementById("current-temp");
  const currentCondition = document.getElementById("current-condition");
  const currentRange = document.getElementById("current-range");
  const currentIcon = document.getElementById("current-icon");

  const currentAqi = document.getElementById("current-aqi");
  const aqiBar = document.getElementById("aqi-bar");
  const currentUv = document.getElementById("current-uv");
  const uvBar = document.getElementById("uv-bar");

  const currentHumidity = document.getElementById("current-humidity");
  const currentWind = document.getElementById("current-wind");
  const currentVisibility = document.getElementById("current-visibility");
  const currentPressure = document.getElementById("current-pressure");

  const forecastRowBox = document.getElementById("forecast-row");

  const API = WEATHER_API_KEY

  // Fetches the Weather & Forecast of 1 day
  async function fetchWeatherAndForecast(cityName = 'Bhopal') {
    try {
      locationBtn.disabled = true
      locationBtn.innerText = 'Loading...'
      currentCondition.innerText = 'Loading weather...'

      let forecastRes = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API}&q=${cityName}&days=1&aqi=yes`)
      let forecastData = await forecastRes.json()

      if (forecastData.error) {
        currentCondition.innerText = 'City not found. Try again.'
        return
      }

      displayWeather(forecastData)
    } catch (error) {
      currentCondition.innerText = "Couldn't load weather. Check your connection."
      console.log(error)
    } finally {
      locationBtn.disabled = false
      locationBtn.innerText = 'Submit'
    }
  }

  fetchWeatherAndForecast();

  // Function for UV Index
  function uvIndexLabel(index) {
    let UV = ''

    if (index >= 0 && index <= 2) UV = `Low (${index})`
    else if (index >= 3 && index <= 5) UV = `Moderate (${index})`
    else if (index >= 6 && index <= 7) UV = `High (${index})`
    else UV = `Very High (${index})`

    currentUv.innerText = UV
    uvBar.style.width = `${(index / 11) * 100}%`
  }

  // Function for Air Quality
  function aqiIndexLabel(index) {
    let AQI = ''

    if (index === 1) AQI = `Good (${index})`
    else if (index === 2) AQI = `Moderate (${index})`
    else if (index === 3) AQI = `Unhealthy (${index})`
    else if (index === 4) AQI = `Unhealthy (${index})`
    else if (index === 5) AQI = `Very Unhealthy (${index})`
    else AQI = 'Hazardous'

    currentAqi.innerText = AQI
    aqiBar.style.width = `${(index / 6) * 100}%`
  }

  // Function that formats the time
  function formatHour(timeStr) {
    let hour24 = new Date(timeStr).getHours()
    let period = hour24 >= 12 ? 'PM' : 'AM'
    let hour12 = hour24 % 12 || 12
    return `${hour12} ${period}`
  }

  // Display the Forecast in UI
  function displayForecast(hours) {
    let tenHours = hours.slice(0, 10)
    forecastRowBox.innerHTML = ''

    tenHours.forEach((hour, idx) => {
      let timeLabel = idx === 0 ? 'Now' : formatHour(hour.time)

      forecastRowBox.innerHTML += `
      <div class="forecast-item">
        <span>${timeLabel}</span>
        <img style="width: 40px;" src="${hour.condition.icon}">
        <strong>${hour.temp_c}°</strong>
      </div>
      `
    })
  }

  // Display the Weather in UI
  function displayWeather({ current, location, forecast: { forecastday } }) {
    cardTempLocation.innerText = location.name
    cardTempCondition.innerText = current.condition.text
    cardTempIcon.src = current.condition.icon
    cardTemp.innerText = current.temp_c + '°C'

    locationName.innerText = location.name

    let time = (location.localtime).split(' ')[0]
    locationTime.innerText = `${time} ${formatHour(location.localtime)}`

    currentTemp.innerText = current.temp_c + '°C'
    currentCondition.innerText = current.condition.text
    currentIcon.src = current.condition.icon

    currentHumidity.innerText = current.humidity + '%'
    currentWind.innerText = current.wind_kph + 'kph'
    currentVisibility.innerText = current.vis_miles + ' mi'
    currentPressure.innerText = current.pressure_mb + ' mb'

    uvIndexLabel(Math.round(current.uv))
    aqiIndexLabel(current.air_quality["us-epa-index"])

    currentRange.innerText = `H: ${forecastday[0].day.maxtemp_c}°C L: ${forecastday[0].day.mintemp_c}°C`

    displayForecast(forecastday[0].hour)
  }

  const searchLocation = () => {
    if (locationInput.value.trim() === '') return alert('Please enter a valid location')
    let value = locationInput.value
    fetchWeatherAndForecast(value)
    locationInput.value = ''
  }

  // Takes input and fetches the weather & forecast of that location 
  locationBtn.addEventListener('click', searchLocation)
  locationInput.addEventListener('keydown', e => e.key === 'Enter' && searchLocation())
}
weatherPage()