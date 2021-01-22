var currentDate = luxon.DateTime.local();
var topDate = $("#currentDay");
var printDate = currentDate.toLocaleString(luxon.DateTime.DATE_MED_WITH_WEEKDAY)
topDate.text(printDate);
console.log(printDate);

// var todo;
// function storetodo() {
//     todo = $(this)
// var todoId = todo.attr("id")
// var userTodo =$("textarea#" + todoId).val()
// console.log("id:" + todoId  + " , task: " + userTodo)
// localStorage.setItem(todoId, userTodo);
// //  console.log($(this))
// //  console.log(todo.data("first"))
// }
//  function loadtodos() {
//      for (let i = 0; i < 24; i++) {
//          console.log("loading data for " + i) 
//         $("textarea#" + i).text(localStorage.getItem(i))
//      }
//  }
//  $(document).ready(function(){
//      $(".saveBtn").on("click", storetodo);
//      loadtodos()
//  })