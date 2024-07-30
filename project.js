const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        todoInput.value = '';
    }
});


// ... rest of your JavaScript code ...

const timerDisplay = document.getElementById('timer-display');
const startPauseBtn = document.getElementById('start-pause');
const resetBtn = document.getElementById('reset');

let workTime = 25 * 60; // 25 minutes in seconds
let breakTime = 5 * 60; // 5 minutes in seconds
let timer;

function updateTimer() {
  const minutes = Math.floor(workTime / 60);
  const seconds = workTime % 60;
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
  timer = setInterval(countdown, 1000);
  startPauseBtn.textContent = 'Pause';
}

function pauseTimer() {
  clearInterval(timer);
  startPauseBtn.textContent = 'Start';
}

function resetTimer() {
  clearInterval(timer);
  workTime = 25 * 60;
  updateTimer();
}

function countdown() {
  workTime--;
  updateTimer();

  if (workTime <= 0) {
    // Handle end of work time (e.g., play sound, show notification)
    console.log('Work time finished!');
    // Start break timer or reset for next work session
  }
}

startPauseBtn.addEventListener('click', () => {
  if (timer) {
    pauseTimer();
  } else {
    startTimer();
  }
});

resetBtn.addEventListener('click', resetTimer);

updateTimer();
