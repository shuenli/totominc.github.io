var adventures = [ // name, lvl, minMonsters, maxMonsters, maxHp, minHp, maxDmg, minDmg, maxGold, minGold, maxXp, minXp
	new Adventure("Plains", 				1, 	2, 	4, 	40, 	25,		5, 		3, 		20, 	10, 	20, 	10),
	new Adventure("The Cave", 				3, 	3, 	6, 	75, 	50, 	7, 		5, 		40, 	20, 	40,		20),
	new Adventure("Undiscovered Caves", 	7, 	5, 	7, 	125, 	100,	25,		15,		80,		40,		80, 	40),
	new Adventure("Dragon Cave",			12,	7,	10,	200,	150,	40,		30,		500,	350, 	500,	350),
	new Adventure("Haunted Village",		15,	7,	10,	300,	200,	55,		40,		1500,	1000,	1000,	750),
	new Adventure("Mansion",				20,	5,	8,	750,	600,	65,		55,		3000,	1750,	1500,	1000),
	new Adventure("Mathys Van's",			1,	1,	1,	1000,	1000,	66,		66,		10000,	10000,	5000,	5000)
];
var liveAdventure;

// adventures
function Adventure(name, reqLevel, minMonsters, maxMonsters, maxHp, minHp, maxDmg, minDmg, maxGold, minGold, maxXp, minXp) {
	this.name = name;
	this.reqLevel = reqLevel;
	this.minMonsters = minMonsters;
	this.maxMonsters = maxMonsters;
	this.maxHp = maxHp;
	this.minHp = minHp;
	this.maxDmg = maxDmg;
	this.minDmg = minDmg;
	this.maxGold = maxGold;
	this.minGold = minGold;
	this.maxXp = maxXp;
	this.minXp = minXp;
};
Adventure.start = function(index) {
	var a = adventures[index];
	if (ps.level >= a.reqLevel && typeof liveAdventure !== "string") {
		var toSpawn = Math.floor(Math.random() * (a.maxMonsters - a.minMonsters + 1)) + a.minMonsters;
		var maxHp = a.maxHp;
		var minHp = a.minHp;
		var maxDmg = a.maxDmg;
		var minDmg = a.minDmg;
		var maxGold = a.maxGold;
		var minGold = a.minGold;
		var maxXp = a.maxXp;
		var minXp = a.minXp;
		liveAdventure = a.name;
		Monster.invoke(toSpawn, maxHp, minHp, maxDmg, minDmg, maxGold, minGold, maxXp, minXp);
	};
};
Adventure.end = function() {
	var temp = liveMonsters.length;
	var temp2 = 0;
	for (var i = 0; i < liveMonsters.length; i++) {
		if (liveMonsters[i].hp <= 0) {
			temp2++;
		};
		if (temp2 == temp) {
			liveAdventure = undefined;
			$("#monster-" + liveMonsters[i].index).remove();
			liveMonsters = [];
		};
	};
};
Adventure.init = function() {
	Log("Calling Adventure.init()");
	for (var i = 0; i < adventures.length; i++) {
		var a = adventures[i];
		$("#a-n" + (i+1)).html(a.name + " - required level : " + a.reqLevel);
		$("#a-m" + (i+1)).html(a.minMonsters + " to " + a.maxMonsters + " monsters");
	};	
};