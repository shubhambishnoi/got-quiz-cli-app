var readlineSync = require('readline-sync');
var chalk = require('chalk');

var qu=readlineSync.question("May i know your name ?");
console.log(chalk.red.bold("welcome ! " + qu));
console.log(chalk.green.bold(" \n lets play Game Of Thrones Quiz\n "));


console.log(chalk.green.bold("RULES !! "));
console.log("1.Total 7 questions are their , have to attempt all ");
console.log("2. If you give correct answer you will score +2 otherwise you will score -1");
console.log("3. You have to type the index value of the answer ")

var questionlist=[
		{
			
		array:["stabbed by child","poisoned","thrown from walls","hit by crossbow"],
		question:chalk.magenta.bold("QUESTION 1 :: How did Joffrey die?"),
		answer:"poisoned"
	},
		{
		array:["Joffrey","Tyrion","Ramsay","Loras"],
		question:chalk.magenta.bold("QUESTION 2 ::  Which of the following was Sansa never married or engaged to?"),
		answer:"Loras"
	},
		{
			
		array:["Dragon","Rhaegal","Viserion","Aegon"],
		question:chalk.magenta.bold("QUESTION 3 ::  Which of the following is NOT one of Daenerys's dragons?"),
		answer:"Aegon"
	},
		{
		
		array:["Khaleesi","Mother of Dragons","Breaker of chains","The Unsullied"],
		question:chalk.magenta.bold("QUESTION 4 :: Which of the following is NOT one of Daenerys's titles?"),
		answer:"The Unsullied"
	},
		{
		
		array:["Dorne","The Riverlands","The Reach","The Vale"],
		question:chalk.magenta.bold("QUESTION 5 :: Which of the following kingdoms is, on average, furthest south?"),
		answer:"Dorne"
	},
		{
			
		array:["unicorn","rose","stag","moon"],
		question:chalk.magenta.bold("QUESTION 6 :: What is the sigil of house Baratheon?"),
		answer:"stag"
	},
		{
	
		array:["They aren't","aunt-nephew","cousins","brother-sister"],
		question:chalk.magenta.bold("QUESTION 7 ::How are Jon and Daenerys related to each other?"),
		answer:"aunt-"
	},
];

var score=0;
function Play(listOfQue,ques,ans){
	
	var userAns=readlineSync.keyInSelect(listOfQue,ques);
	if(listOfQue[userAns]===ans)
	{
		score+=2;
	console.log(chalk.green.bold("correct , score:: "+ score));
	}
	else
	{
		score-=1;
console.log(chalk.green.bold("wrong ! the ans is "+ans+ " your score is :: "+score));
	}

	if(score===3)
	{
		console.log(chalk.bgYellow("congrats ! go to level 1"));
	}
	else if(score===9)
	{
		console.log(chalk.bgYellow("congrats ! go to level 2"));
	}

}

for(let i=0;i<questionlist.length;i++)
{
	console.log (chalk.yellow("-----------------------------------------------------------"));
	Play(questionlist[i].array ,questionlist[i].question,questionlist[i].answer);
	console.log(chalk.yellow("\n --------------------------------------------------------------\n "));
}

console.log(chalk.bgYellow("congratulations ! "+ qu + "  your score is "+ score ) );

highScore=[
	{
	name: "arun",
	score:"10"
	}
];
console.log(chalk.yellow("\n HIGHSCORE \n "));
console.table(highScore);
var max=highScore[0].score;
for(let i=1;i<highScore.length;i++)
{
	if(highScore[i].score>max){
		max=highScore[i].score;
	}
}

if(score>=max)
{
	console.log(chalk.bgYellow.bold("\n CONGRATS !! You beat the HIGH SCORE !please send me the screenshot\n "));
}
else{
	console.log(chalk.bgYellow.bold("\n you didn't beat the HIGH SCORE ! TRY AGAIN \n "));
}