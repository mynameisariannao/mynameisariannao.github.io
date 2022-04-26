function start(){
    console.log("start() method started");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["latitude"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["longitude"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["gpsSensor_alt"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["bmpSensor_alt"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["bmpSensor_pres"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["bmpSensor_temp"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["digitalSensor_temp"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["cssSensor_temp"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["cssSensor_eCO2"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["cssSensor_TVOC"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["UV"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["accelX"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["accelY"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["accelZ"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["magneticX"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["magneticY"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["magneticZ"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["gyroX"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["gyroY"].innerHTML = "Reading Data...";
    document.getElementById("data").rows["gyroZ"].innerHTML = "Reading Data...";
    console.log("rows changed to reading data");
    document.getElementById("startButton").disabled = true;
    console.log("startButton disabled");
    document.getElementById("stopButton").disabled = false;
    console.log("stopButton enabled");
}
function stop(){
    console.log("stop() function started");
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elasped:</td><td>15 Seconds</td>";
    document.getElementById("data").rows["latitude"].innerHTML = "<td>Latitude:</td><td>0</td>";
    document.getElementById("data").rows["longitude"].innerHTML = "<td>Longitude:</td><td>0</td>";
    document.getElementById("data").rows["gpsSensor_alt"].innerHTML = "<td>GPS Altitude:</td><td>0</td>";
    document.getElementById("data").rows["bmpSensor_alt"].innerHTML = "<td>BMP Sensor Altitude:</td><td>30383.04</td>";
    document.getElementById("data").rows["bmpSensor_pres"].innerHTML = "<td>BMP Sensor Pressure:</td><td>2.34</td>";
    document.getElementById("data").rows["bmpSensor_temp"].innerHTML = "<td>BMP Sensor Temperature:</td><td>0</td>";
    document.getElementById("data").rows["digitalSensor_temp"].innerHTML = "<td>Digital Sensor Temperature:</td><td>24.12</td>";
    document.getElementById("data").rows["cssSensor_temp"].innerHTML = "<td>CSS Sensor Temperature:</td><td>25</td>";
    document.getElementById("data").rows["cssSensor_eCO2"].innerHTML = "<td>CSS Sensor eCO2:</td><td>400</td>";
    document.getElementById("data").rows["cssSensor_TVOC"].innerHTML = "<td>CSS Sensor TVOC:</td><td>0</td>";
    document.getElementById("data").rows["UV"].innerHTML = "<td>UV:</td><td>0</td>";
    document.getElementById("data").rows["accelX"].innerHTML = "<td>Accel X:</td><td>-0.87</td>";
    document.getElementById("data").rows["accelY"].innerHTML = "<td>Accel Y:</td><td>-0.02</td>";
    document.getElementById("data").rows["accelZ"].innerHTML = "<td>Accel Z:</td><td>9.61</td>";
    document.getElementById("data").rows["magneticX"].innerHTML = "<td>Magnetic X:</td><td>0.13</td>";
    document.getElementById("data").rows["magneticY"].innerHTML = "<td>Magnetic Y:</td><td>0.57</td>";
    document.getElementById("data").rows["magneticZ"].innerHTML = "<td>Magnetic Z:</td><td>-0.24</td>";
    document.getElementById("data").rows["gyroX"].innerHTML = "<td>Gyro X:</td><td>4.66</td>";
    document.getElementById("data").rows["gyroY"].innerHTML = "<td>Gyro Y:</td><td>0.01</td>";
    document.getElementById("data").rows["gyroZ"].innerHTML = "<td>Gyro Z:</td><td>-0.4</td>";
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;

}
var wins = 0;
var losses = 0;
var ties = 0;
function startsCraps(){
    console.log("Craps game started");
    var die1 = Math.ceil(6 * Math.random());
    var die2 = Math.ceil(6 * Math.random());
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    var diceSum = die1 + die2;
    document.getElementById("sumRes").innerHTML = diceSum;
    //didn't understand what craps was but the coding was fun
    if(diceSum == 70 || diceSum == 11){
        document.getElementById("crapsRes").innerHTML = "Craps, You lose!";
        losses = losses + 1;
    }else if(die1 == die2 && die1 % 2 == 0){ //interesting on how you can win and lose especially with evens
        document.getElementById("crapsRes").innerHTML = "Winner!";
        wins = wins + 1;
    }else { //I am addicted to playing now but the else is useful to change the different outcomes
        document.getElementById("crapsRes").innerHTML = "It's a tie! Play again";
        ties = ties + 1;
    }
    document.getElementById("winRes").innerHTML = wins; //wins are less than ties
    document.getElementById("lossRes").innerHTML = losses; //losses seem to be less frequent than ties
    document.getElementById("tieRes").innerHTML = ties;
}
//creating an extra function without having to use two separate js
function testCodeV1(){
    console.log("testCodeV1() stasrted"); //this will show that it is working in the console
    var currTime = 50;
    for(var i = 0; i < 11; i++){ //creates a countdown with less copy and pasting but also uses less numbers
        setTimeout(function(){
            console.log(currTime);
            document.getElementById("countDownRes").innerHTML = currTime;
            if(currTime == 0){ //if there is no extra '=' the code will not process well
                document.getElementById("countDownRes").innerHTML = "Blastoff!";
            }
            currTime = currTime - 10; //changed it to subtract 5 instead of 2
        }, i * 2000);
       
    }
}

// a second function allows a loop and the game of craps being playable
function btrCountDownV1(){
    console.log("btrCountDownV1() started");
    var currTime = 50; //creates the repeating loop for timers
    for(var i = 0; i < 11; i++){ // creates a loop to be played
       setTimeout(function(){
        console.log(currTime);
        //display current countdown time with changes caused by admiral's change order 01Mar2022
        if(currTime == 0){
            //Makes 0 into blastoff
            document.getElementById("countDownRes").innerHTML = "Blastoff!";
        } else if(currTime < 25){ //makes blastoff appear when doing the warning
            document.getElementById("countDownRes").innerHTML = 
            "Warning Less than ½ way to launch, time left = " + currTime; 
        } else {
            document.getElementById("countDownRes").innerHTML = currTime; //presents Blastoff! within the page
        }
       currTime = currTime - 5;
       }, i * 5000);
    }
}

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    //this.sound.setAttribute("preload", "audio");
    //this.sound.setAttribute("controls", "none");
    //this.sound.style.display = "none";
    //document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() { 
        this.sound.pause();
     }
}


function playStation(){
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
     setTimeout(function(){
        mySound.stop();
     }, 30000);
}
