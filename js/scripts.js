function List(name, todaysDate, dueDate, descript){
  this.taskName = name;
  this.todaysDate = todaysDate;
  this.dueDate = dueDate;
  this.descript = descript;

}

List.prototype.displayName = function(){
  return this.taskName + ";" + " due date: " + this.dueDate;
}



$(document).ready(function(){
  $("form#list").submit(function(event){
    event.preventDefault();

    var taskName = $("#taskName").val();
    var todaysDate = $("#todaysDate").val();
    var dueDate = $("#dueDate").val();
    var description = $("#description").val();

    var toDoList = new List(taskName, todaysDate, dueDate, description);

    $("ul").append("<li><span class ='container'>" + toDoList.displayName() + "</span></li>");

    $(".container").last().click(function(){
      $("#show-contact").show();
      $(".taskName").text(toDoList.taskName)
      $(".date").text(toDoList.todaysDate)
      $(".dueDate").text(toDoList.dueDate)
      $(".description").text(toDoList.descript)
    })

  });
});
