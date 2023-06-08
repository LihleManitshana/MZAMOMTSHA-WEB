let truthBtn = document.querySelector('.truth-btn');
let dareBtn = document.querySelector('.dare-btn');
let displaycontainer = document.querySelector('.display-container');


let truth = [
  "What is the lowest mark that you once got in a test?",
  "Who is the best teacher you have ever had and why?",
  "What motivates you to keep coming to school everyday?",
  "What is a weird food that you love?",
  "What is your biggest fear?",
  "What is the biggest lie you have ever told?",
"What is the weirdest way you have met someone you now call a friend?",
"Have you ever revealed a friend's secret to someone else?",
"What is the worst food you have ever tasted?",
"If you suddenly had a thousand rand, how would you spend it?",
"What is the first letter of your friend's name?",
"What is the most embarassing thing you have ever done in class?",
"What is your favourite book of all time?",
"What is your favorite subject?",
"What do you want to be when you grow up?",
"What is your biggest fantasy?",
"What is something you're glad your mom doesn't know about you?",
"Have you ever been caught doing something you shouldn't have done in class?",
"Have you ever cheated in a test?",
"What is the most trouble you've been in?",
"Have you ever lied about why you haven't done your homework?",
"What do you do when you think nobody is watching?",
"What is the meanest thing someone has ever said it to you?",
"If you could make a new law, what could it be?",
"What is the most annoying thing about your friend?",
"Who is the first person you tell about something exciting?",
"What was the last thing you googled?",
"What word makes you giggle?",
"Do you like umngqusho (a xhosa traditional meal)?",
"Have you ever forged someone's signature?",
"What subjects at school are you good at?",
];

let dare = [
  "Speak in a Sesotho accent until your next turn.",
  "Let another player tickle you but don't laugh.",
  "Go outside and sing 'Solomoni' at full volume.",
  "Give a one-word roast to each other player.",
  "Spin in a swivel chair for 30 seconds and the try to walk straight.",
  "Narrate the game in a newcaster voice for three turns.",
  "Put a blindfold and touch each players' face until you can guess.",
  "Walk next door with a measuring cup and ask for a cup of salt.",
"Show off your best dance moves for the duration of the song.",
"Hold the plank position until it's your turn again.",
"Let another player pour a glass of water in your head.",
"Let another player smack you in your face.",
"Go and study your books.",
"Yell out the first word that comes into your mind.",
"Pretend to be your maths teacher for 5 minutes.",
"Eat a snack without using your hands.",
"Try and make the person next to you laugh as quickly as possible.",
"Tell the saddest story you know.",
"Bark like a dog for 2minutes.",
"Pretend to wash yourself like a cat.",
"Draw a picture of the person next to you.",
"Stare at the person next to you for one minute without blinking.",
"Pretend to be a witch and fly around on a broomstick.",
"Sing any Piano song with your tongue sticking out.",
"Draw a circle holding a pen in your mouth.",
"Do the Myzstro dance challenge.",
"Take a bite of raw potato.",
"Cry like a baby.",
"Say every sentence backward after you have said it forward.",
"Explain what will happen next in the game in a style of a weather forecast.",
];

truthBtn.addEventListener('click', () => {
  let trueValue = truth[Math.floor(Math.random() * truth.length)];
  displaycontainer.innerHTML = `<p class='text'> ${trueValue}</p>`;
})

dareBtn.addEventListener('click', () => {
  let dareValue = dare[Math.floor(Math.random() * dare.length)];
displaycontainer.innerHTML = `<p class='text'> ${dareValue}</p>`  
})

function startGame() {
 console.log('start Game'); 
 gameloop.start();
}


