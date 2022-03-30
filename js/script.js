function rpsGame(yourchoice){
      console.log(yourchoice);

      var humanchoice, botchoice;

      humanchoice = yourchoice.id;

      //hey bot first take a random integer from randtorpsint function and then use number to choice function to assign those numbers to rock , paper and scissors

      botchoice = numbertochoice(randtorpsint());
      console.log('computerchoice:', botchoice)



      results = decidewinner(humanchoice, botchoice);
      console.log(results);

      message = finalmessage(results);
      console.log(message);

     rpsfrontend(yourchoice.id, botchoice, message);

}

//bot neeed to choose randomly

function randtorpsint() {
    return Math.floor(Math.random() * 3);
}

//this will assign random number to rock, paper and scissors

function numbertochoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

//this is to decide the winner by using a better way of if else statement
//we are writing code for results which we wrote above
//we will call  this a database ...this is a more organised way to define what will be what

function decidewinner(yourchoice, computerchoice) {

    var rpsdatabase = {
        'rock' : {'scissors' : 1, 'rock' : 0.5, 'paper' : 0},
        'paper': {'scissors' : 0, 'rock' : 1, 'paper' : 0.5},
        'scissors': {'scissors' : 0.5, 'rock' : 0,  'paper' : 1} 
    
    
    };

    //this code jobe is to return(0,1)etc and it also need to describe who lost or won

    // here we are passing yourchoice , based on what you click

    //what we are gonna do is we are gonna access this database and if we click on rock then looking at rock it will go its key on the right hand side

    //when it sees what is the score on right hand side it will just return that

    var yourscore = rpsdatabase[yourchoice][computerchoice];

    // here we are looking things from the computer pespective

    var computerscore = rpsdatabase[computerchoice][yourchoice];

    //now it will return both score in the form of an array

    return [yourscore, computerscore];



}
   // now this function wll take in the array and will decide what message to return based on what array

function finalmessage([yourscore, computerscore]){
    if (yourscore === 0) {
        return {'message': 'you lost!', 'color':'red'};

    }  else if(yourscore === 0.5){
        return{'message': 'you tied', 'color': 'yellow'};
    }  else{
        return {'message':'you won!', 'color':'green'};
    }
}

//at this point we have all the backend logic done and what we need to do is we need to work on showing it on frontend when we click


//here what we are doing is we are making the images accessible easily,so like whenever we just do like imagedatabase['rock'] it will give the image rock

function rpsfrontend(humanimagechoice, botimagechoice, finalmessage){
    var imagesdatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
    } 

    // now what you want is that whenever you click at an image all of the images should get removed 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
 
    //now what we wanna do is we will only wanna make people see those paticular images which they and bot have picked and show only those images

    //now we need to create divs for both images which will show up after we click

    //lets create a div for human choice and bot choice and message that is gonna show up

    var humandiv = document.createElement('div');
    var messagediv= document.createElement('div');
    var botdiv = document.createElement('div');
    

    //lets do this by a raw way

    humandiv.innerHTML = "<img src='" + imagesdatabase[humanimagechoice] + "'height=150= width=150 style='box-shadow :0px 10px 50px rgba(37, 50, 233, 1)'; >"

    messagediv.innerHTML = "<h1 style ='color:" + finalmessage['color'] + "; font-size 60px; padding:30px; '>" + finalmessage['message'] + "</h1>"


    botdiv.innerHTML = "<img src='" + imagesdatabase[botimagechoice] + "'height=150= width=150 style='box-shadow :0px 10px 50px rgba(243, 38, 24, 1)'; >"

    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);
   
    

   









}