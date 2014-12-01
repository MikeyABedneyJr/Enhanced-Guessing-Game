var answer, guess, attempt
attempt = 0
answer =  10//Math.floor(Math.random() * 100);

$(document).ready(function(){

  $('button').click(function(){
    guess = $("#message").val();
    console.log(guess); //check to see if answer went through
        function evaluate(guess){
          if (guess > answer) {
            //return updated message of too low
            $('#feedback').replaceWith("Your guess was too high. Try again");
            attempt++;
          }
          else {
            //return updated message of too low
            $('#feedback').replaceWith("Your guess was too low. Try again");
            attempt++;
          };
        };


      //$('#feedback').replaceWith("HUZZAH! YOU GOT IT IN " + attempt + " TRIES!");
            });


});  