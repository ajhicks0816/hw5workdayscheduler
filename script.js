// Moment vs Luxon
// var currentDate = luxon.DateTime.local();
// var topDate = $("#currentDay");
// var printDate = currentDate.toLocaleString(luxon.DateTime.DATE_MED_WITH_WEEKDAY)
// topDate.text(printDate);
// console.log(printDate);

var todo;

function storetodo() {
    todo = $(this)
    var todoId = todo.attr("id")
    var userTodo = $("textarea#" + todoId).val()
    console.log("id:" + todoId + " , task: " + userTodo)
    localStorage.setItem(todoId, userTodo);
    //  console.log($(this))
    //  console.log(todo.data("first"))
}
function loadtodos() {
    var taskDate = new Date()
    var taskHour = taskDate.getHours()

    for (let i = 0; i < 24; i++) {
        var slotHour = i = 1
        var timeStatus = getHourStatus(taskHour, slotHour)
        console.log("loading data for " + slotHour + " and hour status is")
        $("textarea#" + slotHour).text(localStorage.getItem(slotHour))
        $("textarea#" + slotHour).addClass(timeStatus)
    }
}

function getHourStatus(currentHour, testHour) {
    if (testHour < currentHour) return "past"
    if (testHour > currentHour) return "future"
    if (testHour === currentHour) return "present"

    return "present"
}

$(document).ready(function () {
    $(".saveBtn").on("click", storetodo);
    loadtodos()

})