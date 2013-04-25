// RYAN CANTONE
// SDI 1303
// PROJECT 3 
// DATE 3/22/2013

//ALERTS

alert("WELCOME BACK TO THE ADVENTURE!!!");

//GLOBAL VARIABLES
var personName = "Spartan";
var topDragons = ["Fire Dragon", "Frost Dragon", "Dragon Knight",];
var dragonTypes = 3;
var spareTime = true;
var timeOnDragons = [220, 120, 45]

console.log("Oh hey there I didn't see you, my name is " + personName + ", it's " + spareTime + " known that I slay dragons in spare time.");
console.log("My favorite dragons I like to slay are; " + topDragons + ".");
console.log("I only kill " + dragonTypes + " types of dragons!");

//JSON DATA

var iDragon = {
	"myDragons": {
		"d1": {
			"name": "Fire Dragon",
			"dLocation": "Fire Mountain"
		},
		"d2": {
			"name": "Frost Dragon",
			"dLocation": "Frost Cave"
		},
		"d3": {
			"name": "Dragon Knight",
			"dLocation": "Stronghold Keep"
		}
	}
};

console.log( iDragon.myDragons );

//METHOD PROCEDURE
var slayTime = {
	hoursToSlay: function(hoursFree){
		if (hoursFree > 1) {
			console.log("I have " + hoursFree + " hours to slay dragons today!");
		}else{
			console.log("Just not enough time today to slay the evil dragons of this land, I shall continue tomorrow for now I relax.")
		}
	}
};

slayTime.hoursToSlay(5)

//BOOLEAN FUNCTION
console.log("I really need to get some food so I can think clearly before taking on my enemy.");

var myFood = {
	myMeal: function(pizzaRolls, monsterEnergy){
		if(pizzaRolls + monsterEnergy > 0) {
			var full = true
			return full;
		}else{
			var hungry = false
			return hungry;
		}
	}
};

console.log("It's " + myFood.myMeal(3,2) + " I am hungry and thirsty time for me to chow down on some pizza rolls and slam some monster energy, clean up and SLAY my enemy!!");

// NUMBER FUNCTION WITH ACCESSOR
var cleanUp = {
	cleaning: function(beard){
		while (beard < 4) {
			console.log(beard + " cleaned up");
			beard = beard + 1;
		}
		return beard;
	}
};

console.log(cleanUp.cleaning(0) + " beard(s) cleaned up.  Dragon slaying time commencing!");

//STRING FUNCTION

var dragonToFight= {
	typeToChoose: function(dragon1, dragon2, dragon3){
		var fire  = (" has molten skin and fire breath,");
		var frost = (" has hard skin, and frost breath,");
		var knight = (" is a strong fighter, with armor.");
		return dragon1 + fire + " but " + dragon2 + frost + dragon3 + knight;
	}
};

var mainDecision = dragonToFight.typeToChoose("Fire Dragon", "Frost Dragon", "Knight Dragon");
console.log(mainDecision);
console.log("I think I'm going to take on all 3 dragons at once and see where that leads me today!");

//ARRAY FUNCTION
var fightTime = {
	fightingDragons: function(dragons, time){
		for (var dragonNumber = 0; dragonNumber < dragons.length; dragonNumber++){
			var iFought = dragons;
			var nameOfDragon = dragons[dragonNumber],
				minutesOnDragons = time[dragonNumber];
			console.log("Spartan is fighting all three dragons at once!!, for " + minutesOnDragons + " minutes.");
			for (var minutes = 0; minutes < minutesOnDragons; minutes +=60) {
				var minutesLeft = minutesOnDragons - minutes;
				console.log(minutes + " minutes fought so far today, " + minutesLeft + " minutes left to fight for today.");
			}
			console.log("I'm tired of the " + nameOfDragon + ".");
			return iFought;
		}
	}
};

var fighting = fightTime.fightingDragons(topDragons, timeOnDragons);
console.log("I fought " + fighting + " until I could take no more.");

//METHOD ACCESSOR AND MUTATOR

var timeFought = {
	
	"FireDragon": 120,
	"FrostDragon": 60,
	"KnightDragon": 60,
	"fightTime": function () {
		var totalFightTime = this.FireDragon + this.FrostDragon + this.KnightDragon;
		var convertMinutesToHours = totalFightTime / 60;
		return convertMinutesToHours;
	},
	"changeTime": function(fightMore){
		this.KnightDragon = fightMore
	}
};

console.log("I was fighting the Fire Dragon for " + timeFought.FireDragon + " minutes!");
console.log("I fought the Frost Dragon for " + timeFought.FrostDragon + " minutes!");
console.log("I took on the Knight Dragon for " + timeFought.KnightDragon + " minutes!");
console.log("For a total of " + timeFought.fightTime() + " hours!!.");
console.log("But I think I am going to fight on some more.");

timeFought.changeTime(180);

console.log("So now I have been fighting for " + timeFought.fightTime() + " hours, yikes!!");
console.log("I really need to get to rest so I can continue slaying dragons tomorrow, GOOD NIGHT!!!!");

			
