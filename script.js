const displayDate = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

$(document).ready(function(){
    $("#currentDay").append(displayDate)
})

//$("#save").on("click", function(event){
 //   event.preventDefault();

//    console.log(event)
//});

$(document).ready(function () {
    $(".btn").on("click", function (event) {
      //event.preventDefault();
  
      var toDoEntry = $(this).closest("div.row").find("textarea[class='col-8 description']").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, JSON.stringify(toDoEntry))
    
      console.log(time)
  
      console.log(toDoEntry)
    });
  


function theTimeTracker() {
    var theTime = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("now")[1]);
        

        // To check the time and add the classes for background indicators
        if (blockTime < theTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === theTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
};


$("#now9 .description").val(localStorage.getItem("now9"));
$("#now10 .description").val(localStorage.getItem("now10"));
$("#now11 .description").val(localStorage.getItem("now11"));
$("#now12 .description").val(localStorage.getItem("now12"));
$("#now13 .description").val(localStorage.getItem("now13"));
$("#now14 .description").val(localStorage.getItem("now14"));
$("#now15 .description").val(localStorage.getItem("now15"));
$("#now16 .description").val(localStorage.getItem("now16"));
$("#now17 .description").val(localStorage.getItem("now17"));

theTimeTracker();
})
















//add event input
//save event input to local 
