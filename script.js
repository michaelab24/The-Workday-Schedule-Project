const displayDate = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

$(document).ready(function(){
    $("#currentDay").append(displayDate)
})

$("#save").on("click", function(event){
    event.preventDefault();

    console.log(event)
});

//add event input
//save event input to local storage