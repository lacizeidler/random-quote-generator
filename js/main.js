// array of objects to store zodiac data
var quotes = [
	"Be yourself. Everyone else is already taken - Oscar Wilde",
	"Two things are infinite; The universe and human stupidity and I'm not sure about the universe. - Albert Einstein",
	"So many books, so little time. - Frank Zappa",
	"Be who you are and say what you feel, becuase those who mind don't matter, and those who matter don't mind. - Bernard M. Baruch",
	"A room without books is like a body without a soul. - Marcus Tullius Cicero",
	"You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss",
	"You only live once, but if you do it right, once is enough. - Mae West",
	"Be the change that you wish to see in the world. - Mahatma Gandhi",
	"In three words I can sum up everything i've learned about life: it goes on - Robert Frost",
	"No one can make you feel inferior without your consent. - Eleanor Roosevelt",
	"If you tell the truth, you don't have to remember anything. - Mark Twain"

];

var btn = document.getElementById('userinput');
btn.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		horoscope();
	};
}, false);

function horoscope() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}