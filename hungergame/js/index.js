var charName;
var charAge;
var charGender;
var range = 0;
var power = 0;
var evasion = 0;
var choice = 0;
 
alert ("Welcome to my new game based off of The Hunger Games by Suzanne Collins. Please fill out your information in the following text boxes correctly for the game to work!");
var charName = prompt ("What is your name?");

var charAge = prompt ("Great! Hello, "+ charName + ", it is a pleasure to meet you! Now, can you tell me how old you are?");
while (charAge < 12 || charAge > 18) {
var charAge = prompt ("Oh no, " + charName + ", you are too young or old for this game to work. Please enter an age between 12 and 18.");
}

 var charGender = prompt ("Great! Now can you tell me if you are a boy, or a girl?").toUpperCase();
 while (charGender != "BOY" && charGender != "GIRL"){ 
 //firstly you were using the wrong variable, next its just changed to ensuring that the condition only DOESNT work when the answer is NOT BOY and NOT GIRL, 
 //which means if i type girl, it will say NO for NOT GIRL and boot me out of the loop
 	var charGender = prompt ("Uh oh, it seems like I couldn't figure out your gender. Can you answer with either boy or girl?").toUpperCase();
 	alert (charGender);
 }


while (choice != "continue"){
	var choice = prompt (charName + ", It's time for a simple question. A person stands somewhere in front of you, oblivious to you being there. Would you go for a close range attack, shoot him with a bow and arrow, or try to stay away from him? You have to type either Range, Power, or Evasion.").toUpperCase();

	switch (choice) {

		case ("RANGE"):
			range = range + 3;
			choice = "continue";
		break;

		case ("POWER"):
			power = power + 3;
			choice = "continue";

		break;

    	case ("EVASION"):
			evasion = evasion + 3;
			choice = "continue";

		default:
			alert("Oh no, " + charName + ", I do not know what you mean by " + choice + ". Let me repeat my question...");
		break;

	}//ending switch case

}//ending while loop

alert ("Lets have a look at what levels you have gained before starting.");
alert ("Range: " + range + " Power: " + power + " Evasion: " + evasion);

alert ("WARNING!!! This story may contain graphic text. Read at your own discretion!!! If you want to continue, press 'OK'.");
alert ("It is a bright sunny day in District 11, the district meant for agriculture. But everyone was shuffling out of their cottages to a wide open square.");
alert ("Today was what was called the 'reaping', a ")
