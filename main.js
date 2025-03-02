let totalAssignedTask = 6;
let totalCompletedtask = 0;
let taskHistory = [];
let today = new Date();


// select the element
const totalAssignedTaskElem = document.getElementById("totalAssignedTask");
const totalCompletedtaskElem = document.getElementById("totalCompletedtask");
const weekDayElem = document.getElementById("weekDay");
const dateElem = document.getElementById("date");
const taskHistoryElem = document.getElementById("taskHistory");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");





//  send the value to the element
weekDayElem.innerHTML = getDayName(today.getDay());
dateElem.innerHTML = today.getDate() + " " + getMonthName(today.getMonth()) + " " + today.getFullYear();
totalAssignedTaskElem.innerHTML = totalAssignedTask;
totalCompletedtaskElem.innerHTML = totalCompletedtask;


// compelete task
function completeTheTask(btn) {
    totalCompletedtask++;
    totalAssignedTask--;
    totalAssignedTaskElem.innerHTML = totalAssignedTask;
    totalCompletedtaskElem.innerHTML = totalCompletedtask;

    btn.disabled = true;
    btn.classList.remove("bg-green-600");
    btn.classList.add("bg-blue-300");

    let taskTitle = btn.parentElement.previousElementSibling.previousElementSibling.innerText;
    let completedTask = document.createElement("div");
    completedTask.innerText = "You have completed the task " + taskTitle + " at " + getCompletedTaskTime();
    completedTask.classList.add("self-start", "bg-blue-100", "rounded", "p-4", "mb-4");
    taskHistoryElem.appendChild(completedTask);

    alert('Board Updated Successfully');
    if(totalAssignedTask === 0) {
        alert('Congratulations!!! You have completed all the current task');
    }
    
}

// clear history
clearHistoryBtn.addEventListener("click", function() {
    taskHistoryElem.innerHTML = "";
});

// <!-- <div class="self-start bg-blue-100 rounded p-4 mb-4"></div> -->

// Get the day name
function getDayName(day) {
    switch(day) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
    }
}

// Get month name
function getMonthName(month) {
    switch(month) {
        case 0:
            return "January";
            break;
        case 1:
            return "February";
            break;
        case 2:
            return "March";
            break;
        case 3:
            return "April";
            break;
        case 4:
            return "May";
            break;
        case 5:
            return "June";
            break;
        case 6:
            return "July";
            break;
        case 7:
            return "August";
            break;
        case 8:
            return "September";
            break;
        case 9:
            return "October";
            break;
        case 10:
            return "November";
            break;
        case 11:
            return "December";
            break;
    }
}

function getCompletedTaskTime() {
    let ampm = today.getHours() >= 12 ? " PM" : " AM";
    return today.getHours() % 12 + ":" + today.getMinutes() + ":" + today.getSeconds() + ampm;
}

function changeBackgroundColor() {

    const bgColorList = ["bg-blue-100", "bg-green-300", "bg-pink-300", "bg-purple-300", "bg-indigo-300", "bg-gray-300"];

    const body = document.body;
    body.classList = '';
    const randomColor = bgColorList[Math.floor(Math.random() * bgColorList.length)];
    body.classList.add(randomColor);
}

function gotoBlog() {
     window.location.href = 'blog.html'; 
}
