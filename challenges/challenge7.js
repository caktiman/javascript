var introMusic = new Audio("../game audio/Apropos.mp3")
var vtuberMusic = new Audio("../game Audio/Shiny Smily Story Instrumental.mp3")
var mainMusic = new Audio("../game Audio/Vitality VIP Edit.mp3")
var bossMusic = new Audio("../game Audio/Epitomize Sinners VIP")
var endMusic = new Audio("../game Audio/Luminescent.mp3")

introMusic.play()

document.addEventListener("keyup", pressEnter)

function pressEnter(event) {
  
  if (event.key === "Enter" ) {
   event.preventDefault();
   initiation()
  }

  if (event.key === "a" ){
    vTuber()
  }
}

function quit(){
  window.close()
}

function choicePop(event){
  if (event.key === "Enter" ) { 
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option2').style.display = "block"
    document.querySelector('.option1').style.opacity = "0"
    document.querySelector('.option2').style.opacity = "0"
    document.querySelector('.option1').style.transform = "translateY(30px)"
    document.querySelector('.option2').style.transform = "translateY(30px)"

    setTimeout(() => {
      document.querySelector('.option1').style.opacity = "1"
      document.querySelector('.option2').style.opacity = "1"
      document.querySelector('.option1').style.transform = "none"
      document.querySelector('.option2').style.transform = "none"
    }, 100)

    document.removeEventListener("keyup", choicePop) 
  }
}

function initiation(){
  console.log("initiation")
  document.removeEventListener("keyup", pressEnter)
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/Beelzebub.png')"
  document.getElementById("title").innerHTML="Belzebub, The Great Fly"
  document.getElementById("description").innerHTML="Hi you, plz don’t mind me la. It’s just me, a fly called Beelzebub la."
  document.querySelector('.option1').onclick = start
  document.querySelector('.option2').onclick = quit
  document.querySelector('.option1').innerHTML = "Begin your nightmare"
  document.querySelector('.option2').innerHTML = "End your suffering"
 
  document.addEventListener("keyup", choicePop)
}

function vTuber(){
  introMusic.load()
  vtuberMusic.play()
  document.removeEventListener("keyup", pressEnter)
  
  
  document.querySelector('#bgimg').style.backgroundImage = "url('https://pbs.twimg.com/profile_banners/1283657064410017793/1607874974/1500x500')"
  document.getElementById("title").innerHTML="Developer"
  document.getElementById("description").innerHTML="I must have watch too much VTuber, time you have some AsaCoco."

  document.addEventListener("keyup", vTuberEnd)
  
}

function vTuberEnd(event){

  if (event.key === "Enter" ) {
    event.preventDefault();
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/bad end.png')"
    document.getElementById("title").innerHTML="Developer"
    document.getElementById("description").innerHTML="You decided to fall for any pitfall, time for VTuber!!!"
  }

}

function start(){
  console.log("start")
  // document.removeEventListener("keyup", mainMenu)

  document.querySelector('.option1').style.display = "none"
  document.querySelector('.option2').style.display = "none"
  document.querySelector('#bgimg').style.backgroundImage = "url('none')"
  document.querySelector('#bgimg').style.backgroundColor = "#01031c"
  document.getElementById("title").innerHTML=""
  document.getElementById("description").innerHTML="You really like the story, eh? Fine, I will tell it again…"
  
  document.addEventListener("keyup", noGirl)

}

function noGirl(event){
  if (event.key === "Enter" ) {
    event.preventDefault();
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/woke up.png')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="You woke up wanting to have a girlfriend because you have NONE!!!"
    
    document.removeEventListener("keyup", noGirl) 
    document.addEventListener("keyup", dressedUp)
  }
}

function dressedUp(event){
  if (event.key === "Enter" ) {
    event.preventDefault();
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/dressed up.png')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="Anyway, you decided to take action, and you realized that humans sucks, so you decided to have something elusive. Demon girls! What a fine taste you have, eh?"  
  
    document.removeEventListener("keyup", dressedUp) 
    document.addEventListener("keyup", determination)
  }
}

function determination(event){
  if (event.key === "Enter" ) {
    event.preventDefault();
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/determination.png')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="You have nothing to lose anyway, so you decided to drive down to hell with a beloved modified “Bloody Mary”"  
  
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option1').innerHTML = "OK..."
    document.querySelector('.option1').style.opacity = "1"
    document.querySelector('.option1').style.transform = "none"
    document.querySelector('.option1').onclick = firstTransition
  }
}

function firstTransition(){
  document.removeEventListener("keyup", determination)   
  introMusic.load()
  mainMusic.play()
  
  document.querySelector('.option1').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/coffee shop.png')"
  document.getElementById("title").innerHTML=""
  document.getElementById("description").innerHTML="As you traveled  into the hell, you met a girl dressed up as an OL, sipping her coffee."

  document.removeEventListener("onclick", firstTransition) 
  setTimeout(() => {
    document.addEventListener("keyup", pandemoniaChoice)
  }, 100);
}


function pandemoniaChoice(event) {
  if (event.key === "Enter" ) {
    console.log("panChoice")
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/Pandemonia.png')"
    document.getElementById("title").innerHTML="Pandemonia, the Tired Demon"
    document.getElementById("description").innerHTML="Name’s Pandemonica, Hell’s Customer Service. How may I serve you?"

    document.querySelector('.option1').innerHTML = "We can figure something out at my place"
    document.querySelector('.option2').innerHTML = "Maybe I can serve YOU instead?"
    document.querySelector('.option1').onclick = panFail
    document.querySelector('.option2').onclick = panSuccess

    document.removeEventListener("keyup", pandemoniaChoice) 
    document.addEventListener("keyup", choicePop)
  }
}

function panFail(){
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/Pandemonia.png')"
  document.getElementById("title").innerHTML="Pandemonia, the Tired Demon"
  document.getElementById("description").innerHTML="You thought you’re leaving hell alive? How delusional."

  document.removeEventListener("onclick", panFail)
  document.addEventListener("keyup", panFailFail)
}

function panFailFail(event){
  if (event.key === "Enter" ) {
    event.preventDefault();
    document.querySelector('.option1').style.display = ""
    document.querySelector('.option2').style.display = ""
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/bad end.png')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="She took your face in her hands and snapped your neck with professional gentleness."  
  
    document.removeEventListener("keyup", panFailFail) 
  }
}

function panSuccess() {
  console.log("panSuccess")
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/Pandemonia Success.png')"
  document.getElementById("title").innerHTML="Pandemonia, the Tired Demon"
  document.getElementById("description").innerHTML="Sweet of you to offer. I could really use some coffee. I’m not myself without it." 

  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "My Pleasure, your Majesty"
  document.querySelector('.option1').style.opacity = "1"
  document.querySelector('.option1').style.transform = "none"
  document.querySelector('.option1').onclick = secondTransition

  document.removeEventListener("onclick", panSuccess) 
}

function secondTransition() {  
  document.querySelector('.option1').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/highway.jpg')"
  document.getElementById("title").innerHTML=""
  document.getElementById("description").innerHTML="After you got yourself your first girl, you decided to grab more because you are lustful. Muahahahaha! Please excuse my acting up. Anyway, you saw a girl blushing on the side of the road, smiling like a heated pervert. You don’t know what the FXXK was wrong with her but she’s quite cute so you decided to shoot your chance."
  document.removeEventListener("onclick", secondTransition) 

  setTimeout(() => {
    document.addEventListener("keyup", modeusChoice, true)
  }, 100);
}

function modeusChoice(event) {
  if (event.key === "Enter" ) {
    event.preventDefault();
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/Modeus.png')"
    document.getElementById("title").innerHTML="Modeus, the lustful Demon"
    document.getElementById("description").innerHTML="You and me. Now."

    document.querySelector('.option1').innerHTML = "Deal. No question asked."
    document.querySelector('.option2').innerHTML = "No time. Busy gathering girls."  
    document.querySelector('.option1').onclick = modeFail
    document.querySelector('.option2').onclick = modeSuccess

    if(document.removeEventListener("keyup", modeusChoice, true)){
      console.log("Successfully removed")
    }

    setTimeout(() => {
    document.addEventListener("keyup", choicePop)
    }, 100)
  }
}


function modeFail(event){
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/Modeus.png')"
  document.getElementById("title").innerHTML="Modeus, the lustful Demon"
  document.getElementById("description").innerHTML="They always say that… and they always try to run away. I’ll have to break your knees, just in case."

  document.removeEventListener("onclick", modeFail)
  document.addEventListener("keyup", modeFailFail)
}


function modeFailFail(event) {
  if (event.key === "Enter" ) {
    event.preventDefault();
    document.querySelector('.option1').style.display = ""
    document.querySelector('.option2').style.display = ""
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/bad end.png')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="She pulled out a sledgehammer. It was not going to be pretty."  
  
    document.removeEventListener("keyup", modeFailFail) 
  }

}

function modeSuccess (){
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/Modeus Success.png')"
  document.getElementById("title").innerHTML="Modeus, the lustful Demon"
  document.getElementById("description").innerHTML="Demon harem? You poor fool… They will rip you to shreds, and I HAVE to see this." 

  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "What have I done... "
  document.querySelector('.option1').style.opacity = "1"
  document.querySelector('.option1').style.transform = "none"
  document.querySelector('.option1').onclick = thirdTransition

  document.removeEventListener("onclick", modeSuccess) 
  document.addEventListener("keyup", thirdTransition)
}



function thirdTransition() {  
  document.querySelector('.option1').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/101.jpg')"
  document.getElementById("title").innerHTML=""
  document.getElementById("description").innerHTML="Well, because you got yourself a crazy heated girl, you decided to find ANOTHER one. Why? Cuz you wanna build a harem with a variety of different girls. Why? Cuz you want it. As you walk around, you find a damn high tower in hell that’s magnificent. Ya wonder if you can get yourself some nice girls there so you moved towards there. On ya way, ya saw puppies chit chatting about something something ??? They are quite cute and look the same, ya figured out that it’s a triplet so that’s good for ya collection."
  document.removeEventListener("onclick", thirdTransition) 

  setTimeout(() => {
    document.addEventListener("keyup", cerChoice)
  }, 100);
}

function cerChoice(event) {
  if (event.key === "Enter" ) {
    event.preventDefault();
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/Cerberus.png')"
    document.getElementById("title").innerHTML="Cerberus, the Triple Demon"
    document.getElementById("description").innerHTML="Are you a human? A real human? Please, take us with you."

    document.querySelector('.option1').innerHTML = "This is getting too easy. I have questions."
    document.querySelector('.option2').innerHTML = "Sure, why not?"  
    document.querySelector('.option1').onclick = cerFail
    document.querySelector('.option2').onclick = cerSuccess
    document.removeEventListener("keyup", cerChoice) 

    setTimeout(() => {
    document.addEventListener("keyup", choicePop)
    }, 100)
  }
}

function cerFail(event){
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/Cerberus.png')"
  document.getElementById("title").innerHTML="Cerberus, the Triple Demon"
  document.getElementById("description").innerHTML="We need a human to cross the hell’s gate. You don’t have to be in one piece, though."

  document.removeEventListener("onclick", cerFail)
  document.addEventListener("keyup", cerFailFail)
}


function cerFailFail(event) {
  if (event.key === "Enter" ) {
    event.preventDefault();
    document.querySelector('.option1').style.display = ""
    document.querySelector('.option2').style.display = ""
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/bad end.png')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="They jumped you like rabid dogs. Canine sounds included. The cuteness of it all gave you a heart attack."  
  
    document.removeEventListener("keyup", cerFailFail) 
  }

}
function cerSuccess (){
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/Cerberus Success.png')"
  document.getElementById("title").innerHTML="Cerberus, the Triple Demon"
  document.getElementById("description").innerHTML="Yes! At least! It’s time to corrupt the mortal realm!" 

  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "Jesus Christ..."
  document.querySelector('.option1').style.opacity = "1"
  document.querySelector('.option1').style.transform = "none"
  document.querySelector('.option1').onclick = fourthTransition

  document.removeEventListener("onclick", cerSuccess) 
  document.addEventListener("keyup", fourthTransition)
}


function fourthTransition() {  
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/arcade.jpg')"
  document.getElementById("title").innerHTML=""
  document.getElementById("description").innerHTML="You realized what you did was having a heated woman, a sad OL, and 3 dogs??? They are cute though… Moving on. Ya found yourself in an arcade because you wanna have some fun other than crazy demons. As you played a game. You saw a drunk girl playing The Last Federation??? Just as you walked past her, she saw ya coming."
  document.removeEventListener("onclick", fourthTransition) 

  setTimeout(() => {
    document.addEventListener("keyup", maChoice , false)
  }, 100);
}

function maChoice(event) {
  if (event.key === "Enter" ) {
    event.preventDefault();
    console.log("maChoice")
    document.querySelector('.option1').style.display = ""
    document.querySelector('.option2').style.display = ""
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/Malina.png')"
    document.getElementById("title").innerHTML="Malina, the Sour Demon"
    document.getElementById("description").innerHTML="Great, more braindead idiots… Never seen your ugly face before.What are you playing at?"

    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option2').style.display = "block"
    document.querySelector('.option1').innerHTML = "This is delicious. Please, insult me more."
    document.querySelector('.option2').innerHTML = "I’d sure love to play with you."  
    document.querySelector('.option1').onclick = maFail
    document.querySelector('.option2').onclick = maSuccess
   
    if (document.removeEventListener("keyup", maChoice, false)){
      console.log("Succesfully removed")
    }
  }
}


function maFail(){
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/Malina.png')"
  document.getElementById("title").innerHTML="Malina, the Sour Demon"
  document.getElementById("description").innerHTML="Fantastic, just my luck to find another masochist creeps."

  document.removeEventListener("onclick", maFail)
  document.addEventListener("keyup", maFailFail)
}


function maFailFail(event) {
  if (event.key === "Enter" ) {
    event.preventDefault();
    document.querySelector('.option1').style.display = ""
    document.querySelector('.option2').style.display = ""
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/bad end.png')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="She made a swiping motion and a fountain of blood exploded from your devastated throat."  
  
    document.removeEventListener("keyup", maFailFail) 
  }

}
function maSuccess (){
  console.log("maChoice")
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/Malina Success.png')"
  document.getElementById("title").innerHTML="Malina, the Sour Demon"
  document.getElementById("description").innerHTML="Like what… video games? Sure, why not. As long as you’re okay with turn based strategies." 

  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option2').style.display = ""
  document.querySelector('.option1').innerHTML = "Yay, a new playmate!"
  document.querySelector('.option1').style.opacity = "1"
  document.querySelector('.option1').style.transform = "none"
  document.querySelector('.option1').onclick = fifthTransition

  document.removeEventListener("onclick", maSuccess) 
  document.addEventListener("keyup", fifthTransition)
}

function fifthTransition() {  
  document.querySelector('.option1').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/red light.jpg')"
  document.getElementById("title").innerHTML=""
  document.getElementById("description").innerHTML="Finished a long chat with Malina about how much fun you can have from booze and games, you decide to move towards that sick a** tower you want to go. Cuz why not? As you strolled on the streets, you saw a demon looking at your harem. Interested."
  document.removeEventListener("onclick", fifthTransition) 

  setTimeout(() => {
    document.addEventListener("keyup", zChoice)
  }, 100);
}

function zChoice(event) {
  if (event.key === "Enter" ) {
    event.preventDefault();
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/zdrada.png')"
    document.getElementById("title").innerHTML="Zdrada, the Bitch Demon"
    document.getElementById("description").innerHTML="Yo, I’ve heard about your harem. I’m in."

    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option2').style.display = "block"
    document.querySelector('.option1').innerHTML = "It’s not really a harem anymore. We just play turn based strategies"
    document.querySelector('.option2').innerHTML = "Wait. I have a feeling I’ll regret it."  
    document.querySelector('.option1').onclick = zFail
    document.querySelector('.option2').onclick = zSuccess
    document.removeEventListener("keyup", zChoice) 
  }
}


function zFail(event){
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/zdrada.png')"
  document.getElementById("title").innerHTML="Zdrada, the Bitch Demon"
  document.getElementById("description").innerHTML="Holy sx!t. Let me put you out of your misery."

  document.removeEventListener("onclick", zFail)
  document.addEventListener("keyup", zFailFail)
}


function zFailFail(event) {
  if (event.key === "Enter" ) {
    event.preventDefault();
    document.querySelector('.option1').style.display = ""
    document.querySelector('.option2').style.display = ""
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/bad end.png')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="Your vision swam. The last thing you noticed was a knife buried hilt deep between your ribs."  
  
    document.removeEventListener("keyup", zFailFail) 
  }

}
function zSuccess (){
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/zdrada success.png')"
  document.getElementById("title").innerHTML="Zdrada, the Bitch Demon"
  document.getElementById("description").innerHTML="Too bad, I’m coming anyway/ Go ahead, try to stop me." 

  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "..."
  document.querySelector('.option1').style.opacity = "1"
  document.querySelector('.option1').style.transform = "none"
  document.querySelector('.option1').onclick = sixthTransition

  document.removeEventListener("onclick", zSuccess) 
  document.addEventListener("keyup", sixthTransition)
}

function sixthTransition() {  
  document.querySelector('.option1').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/angel.jpg')"
  document.getElementById("title").innerHTML=""
  document.getElementById("description").innerHTML="You realized what you have done. This is a nightmare!!! But you have no way of turning back so you kept walking. As you regret for what you did. You saw an angel scribbling something on her little note. Your eyes met hers. S**t, the classic cliche."
  document.removeEventListener("onclick", sixthTransition) 

  setTimeout(() => {
    document.addEventListener("keyup", azaChoice)
  }, 100);
}

function azaChoice(event) {
  if (event.key === "Enter" ) {
    event.preventDefault();
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/azazel.png')"
    document.getElementById("title").innerHTML="Azazel, the Curious Angel."
    document.getElementById("description").innerHTML="Oh my heaven! What would a living human be doing in hell? Most unusual."

    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option2').style.display = "block"
    document.querySelector('.option1').innerHTML = "Looking for angels."
    document.querySelector('.option2').innerHTML = "Looking for demons."  
    document.querySelector('.option1').onclick = azaHeaven
    document.querySelector('.option2').onclick = azaSuccess
    document.removeEventListener("keyup", azaChoice) 
  }
}


function azaHeaven(event){
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('none')"
  document.querySelector('#bgimg').style.backgroundColor = "#01031c"
  document.getElementById("title").innerHTML=""
  document.getElementById("description").innerHTML="Who would’ve guessed that lying will get you into heaven."

  document.removeEventListener("onclick", azaHeaven)
  document.addEventListener("keyup", azaHeavenSuccess)
}


function azaHeavenSuccess(event) {
  if (event.key === "Enter" ) {
    event.preventDefault();
    document.querySelector('.option1').style.display = ""
    document.querySelector('.option2').style.display = ""
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/heaven.png')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="Say goodbye to your demon harem, though."  
  
    document.removeEventListener("keyup", azaHeavenSuccess) 
  }

}
function azaSuccess (){
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/azazel success.png')"
  document.getElementById("title").innerHTML="Azazel, the Curious Angel"
  document.getElementById("description").innerHTML="Oh, you too? Let me guess, thesis on Modern Sin? Or is it Demonology? We should join forces." 

  document.removeEventListener("onclick", azaSuccess) 
  document.addEventListener("keyup", seventhTransition)
}

function seventhTransition(event) {  
  if (event.key === "Enter" ) {

    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option1').innerHTML = "Hey, can't blame me."
    document.querySelector('.option1').style.opacity = "1"
    document.querySelector('.option1').style.transform = "none"
    document.querySelector('.option1').onclick = jusChoice
    document.querySelector('.option2').style.display = ""

    document.querySelector('#bgimg').style.backgroundImage = "url('../images/bridge.jpg')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="Yay… Even an angel joining your forces. You sure have a hard time eh? Moving on, you crossed a bridge and found a little puzzle. You solved it. Why? Ask yourself. And yeah… a demon tried to flirt with you. Lucky bastard..."
    document.removeEventListener("keyup", seventhTransition) 
  }
}

function jusChoice(event) {
    event.preventDefault();
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/justice.png')"
    document.getElementById("title").innerHTML="Justice, the Awesome Demon"
    document.getElementById("description").innerHTML="Oh my heaven! What would a living human be doing in hell? Most unusual."

    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option2').style.display = "block"
    document.querySelector('.option1').innerHTML = "It took some work. Wanna join my harem?"
    document.querySelector('.option2').innerHTML = "I just skipped it in the menu. Wanna join my harem?"  
    document.querySelector('.option1').onclick = jusSuccess1
    document.querySelector('.option2').onclick = jusSuccess2
    document.removeEventListener("onclick", jusChoice) 
}

function jusSuccess1 (){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "Yep, you are right."
  document.querySelector('.option1').onclick = eighthTransition
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/justice success.png')"
  document.getElementById("title").innerHTML="Justice, the Awesome Demon"
  document.getElementById("description").innerHTML="That totally sounds like something I would’ve done. Sure, let’s go. The more the merrier, right?" 

  document.removeEventListener("onclick", jusSuccess1) 
}

function jusSuccess2 (){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "I'm cool with that?"
  document.querySelector('.option1').onclick = eighthTransition
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/justice success.png')"
  document.getElementById("title").innerHTML="Justice, the Awesome Demon"
  document.getElementById("description").innerHTML="You don't have to ask me. I'd never miss a party" 

  document.removeEventListener("onclick", jusSuccess2) 
}

function eighthTransition() {  
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option1').innerHTML = "Fine, fine, I get it."
    document.querySelector('.option1').style.opacity = "1"
    document.querySelector('.option1').style.transform = "none"
    document.querySelector('.option1').onclick = luciChoice
    document.querySelector('.option2').style.display = ""

    document.querySelector('#bgimg').style.backgroundImage = "url('../images/tower.jpg')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="Finally, you reached your destination. The tower. You took an elevator to the top floor. Why? How the hell am I supposed to know? Geez… Anyway, you saw Lucifer sitting on a comfy sofa and sipping her wine. You ask me how I know my name? SOMETIMES THERE ARE THING YOU SHOULDN’T KNOW/ASK..."
  }


function luciChoice() {
    document.querySelector('.option1').style.display = ""
    document.querySelector('.option2').style.display = ""
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/lucifer.png')"
    document.getElementById("title").innerHTML="Lucifer, the CEO of Hell"
    document.getElementById("description").innerHTML="We meet at last. You’ve proved yourself worthy by passing all my trials."

    document.removeEventListener("onclick", luciChoice) 

    setTimeout(() => {
    document.addEventListener("keyup", luciChoice2)
    }, 100)
}

function luciChoice2(event) {
  if (event.key === "Enter" ) { 
  event.preventDefault();
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/lucifer.png')"
  document.getElementById("title").innerHTML="Lucifer, the CEO of Hell"
  document.getElementById("description").innerHTML="Pledge your soul to me and I’ll make you my most treasured slave."

  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option2').style.display = "block"
  document.querySelector('.option1').innerHTML = "Ye ma quean! (Yes my queen)"
  document.querySelector('.option2').innerHTML = "No, thanks. But you can join my harem"  
  document.querySelector('.option1').onclick = luciFail1
  document.querySelector('.option2').onclick = luciConfuse
  document.removeEventListener("keyup", luciChoice2) 
  }
}


function luciFail1(){
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/lucifer.png')"
  document.getElementById("title").innerHTML="Lucifer, the CEO of Hell"
  document.getElementById("description").innerHTML="Eager little soul…"

  document.removeEventListener("onclick", luciFail1)
  document.addEventListener("keyup", luciFailFail1)
}

function luciFailFail1(event) {
  if (event.key === "Enter" ) {
    event.preventDefault();
    document.querySelector('.option1').style.display = ""
    document.querySelector('.option2').style.display = ""
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/bad end.png')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="As you knelt, she planted a kiss of your forehead, and your life melted away."  
  
    document.removeEventListener("keyup", luciFailFail1) 
  }
}

function luciConfuse(){
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/lucifer confused.png')"
  document.getElementById("title").innerHTML="Lucifer, the CEO of Hell"
  document.getElementById("description").innerHTML="What are you trying to accomplish? You think you can enslave demons to your will?"

  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option2').style.display = "block"
  document.querySelector('.option1').innerHTML = "Call me master. And ask for permission before you speak."
  document.querySelector('.option2').innerHTML = "I can offer coffee, turn based strategies and chocolate pancakes."  
  document.querySelector('.option1').onclick = luciFail2
  document.querySelector('.option2').onclick = luciSuccess
  document.removeEventListener("onclick", luciConfuse)
}

function luciFail2(){
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/lucifer confused.png')"
  document.getElementById("title").innerHTML="Lucifer, the CEO of Hell"
  document.getElementById("description").innerHTML="I see I have to teach you your place."

  document.removeEventListener("onclick", luciFail2)
  document.addEventListener("keyup", luciFailFail2)
}

function luciFailFail2(event) {
  if (event.key === "Enter" ) {
    event.preventDefault();
    document.querySelector('.option1').style.display = ""
    document.querySelector('.option2').style.display = ""
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/bad end.png')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="She made a hand gesture, and all your blood turned into vinegar.It’s hard to explain the feel."  
  
    document.removeEventListener("keyup", luciFailFail2) 
  }
}

function luciSuccess (){
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/lucifer confused.png')"
  document.getElementById("title").innerHTML="Lucifer, the CEO of Hell"
  document.getElementById("description").innerHTML="Really? Is that it? You come here, and try to buy me over with pancakes?" 

  document.removeEventListener("onclick", luciSuccess) 
  document.addEventListener("keyup", luciSuccess2)
}

function luciSuccess2 (event){
  if (event.key === "Enter" ) {
    event.preventDefault();
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option1').innerHTML = "Why?"
    document.querySelector('.option1').onclick = luciSuccess3
    document.querySelector('.option2').style.display = ""

    document.querySelector('#bgimg').style.backgroundImage = "url('../images/lucifer success.png')"
    document.getElementById("title").innerHTML="Lucifer, the CEO of Hell"
    document.getElementById("description").innerHTML="You’re lucky I have a thing for pancakes." 
  
    document.removeEventListener("keyup", luciSuccess2) 
  }
}

function luciSuccess3 (event){
    event.preventDefault();
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option1').innerHTML = "You Will."
    document.querySelector('.option1').onclick = midTransition
    document.querySelector('.option2').style.display = ""
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/lucifer success.png')"
    document.getElementById("title").innerHTML="Lucifer, the CEO of Hell"
    document.getElementById("description").innerHTML="I think you’ve convinced me. That harem of yours may prove to be entertaining after all." 
  
    document.removeEventListener("keyup", luciSuccess3) 
}

function midTransition() { 
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option1').innerHTML = "What?"
    document.querySelector('.option1').onclick = question
    document.querySelector('.option2').style.display = ""

    document.querySelector('#bgimg').style.backgroundImage = "url('none')"
    document.querySelector('#bgimg').style.backgroundColor = "#01031c"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="There you go. You got yourself the ultimate harem. Even the CEO is mesmerised by you.AND~~~~~"
  }


function question (){
    mainMusic.load()
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option1').innerHTML = " *censored* is this kind of transition?"
    document.querySelector('.option1').onclick = GG
    document.querySelector('.option2').style.display = ""

    document.querySelector('#bgimg').style.backgroundImage = "url('../images/question mark.png')"
    document.querySelector('#bgimg').style.backgroundColor = "#01031c"
    document.getElementById("title").innerHTML="???"
    document.getElementById("description").innerHTML="YOU TRULY THOUGHT YOU COULD JUST WALK AWAY? AFTER ALL YOU HAVE DONE?" 
}

function GG (){
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option1').innerHTML = "...and I am dead..."
    document.querySelector('.option1').onclick = dead
    document.querySelector('.option2').style.display = ""


    document.querySelector('#bgimg').style.backgroundImage = "url('../images/bad end.png')"
    document.getElementById("title").innerHTML="???"
    document.getElementById("description").innerHTML="You felt the biting cold of chains on your skin. Followed by fire, burning the flesh from your bones." 
}

function dead (){
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option1').innerHTML = "Ah I see, this must be the MC power!"
    document.querySelector('.option1').onclick = judgementTransition
    document.querySelector('.option2').style.display = ""


    document.querySelector('#bgimg').style.backgroundImage = "url('none')"
    document.querySelector('#bgimg').style.backgroundColor = "#01031c"
    document.getElementById("title").innerHTML="???"
    document.getElementById("description").innerHTML="It felt as if you’ve died a thousand deaths. Yet as the flames subsided… Somehow, you were still alive." 
}


function judgementTransition (){
  bossMusic.play()
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option1').innerHTML = "OH HELL NO!"
    document.querySelector('.option1').onclick = judgementAppear
    document.querySelector('.option2').style.display = ""


    document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement transition.png')"
    document.getElementById("title").innerHTML="???"
    document.getElementById("description").innerHTML="I ONLY JUST FOUND YOU. TRESPASSER! SO DON’T DIE ON ME YET. WE WILL SPEND A LOT OF TIME TOGETHER, YOU AND I." 
}

function judgementAppear (){
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option1').innerHTML = "...Imma run for ma lifa!"
    document.querySelector('.option1').onclick = runForYourLife
    document.querySelector('.option2').style.display = ""


    document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement emergence.png')"
    document.getElementById("title").innerHTML="Judgement, the High Prosecutor"
    document.getElementById("description").innerHTML="IGNITE THE SIN MACHINE! SUFFERING MUST BE MADE!" 
}

function runForYourLife (){
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option1').innerHTML = "Run away"
    document.querySelector('.option1').onclick = runFail

    document.querySelector('.option2').style.display = "block"
    document.querySelector('.option2').innerHTML = "Destroy the chain that’s in front of you"
    document.querySelector('.option2').onclick = destroySuccess

    document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement emergence.png')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="Just as she finished her talk, she ignited the sin machine and chains were stuck in front of you. Now what?" 
}

function runFail (){
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/bad end.png')"
  document.getElementById("title").innerHTML="???"
  document.getElementById("description").innerHTML="You made yourself a coward and you didn’t accomplish your dream. Even though you made yourself back to the common realm, you died with no achievement." 
}

function destroySuccess(){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "Look at ma big gun!"
  document.querySelector('.option1').onclick = judgement
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/one punch.jpg')"
  document.getElementById("title").innerHTML=""
  document.getElementById("description").innerHTML="It was hard as hell, but you managed to break it with sheer force." 

}

function judgement() {
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "No one likes you!!!"
  document.querySelector('.option1').onclick = cerberus
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement.png')"
  document.getElementById("title").innerHTML="Judgement, the High Prosecutor"
  document.getElementById("description").innerHTML="HOW DO YOU LIKE THE SIN MACHINE, TRESPASSER? SURRENDER AND LET IT CONSUME YOU!"

}

function cerberus() {
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "I will!"
  document.querySelector('.option1').onclick = pandemonia
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/j cer.png')"
  document.getElementById("title").innerHTML="Cerberus, the Triple Demon"
  document.getElementById("description").innerHTML="No, wait! Don’t five up! You need to get us out of here!"
  
}

function pandemonia() {
  
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "After I get the hell our of here!"
  document.querySelector('.option1').onclick = judgementDetermined
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/j pan.png')"
  document.getElementById("title").innerHTML="Pandemonia, the Tired Demon"
  document.getElementById("description").innerHTML="And I’m still looking forward to my coffee."
}

function judgementDetermined() {
  
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "You have no right to determine my fate!"
  document.querySelector('.option1').onclick = lucifer
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement determined.png')"
  document.getElementById("title").innerHTML="Judgement, the High Prosecutor"
  document.getElementById("description").innerHTML="LEAVE HOPE! HIS FATE IS SEALED!"

}

function lucifer(event) {
 
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "I'm not your dog, *censored*!"
  document.querySelector('.option1').onclick = silent
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/j luci.png')"
  document.getElementById("title").innerHTML="Lucifer, the CEO of Hell"
  document.getElementById("description").innerHTML="Judgement, dear. This man may not know it, but he belongs to me. Could you please not damage him?"
}

function silent() {
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "*censored*!"
  document.querySelector('.option1').onclick = runForYourLife2
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement angry.png')"
  document.getElementById("title").innerHTML="Judgement, the High Prosecutor"
  document.getElementById("description").innerHTML="Be Silent! REAL WORK IS ABOUT TO BEGIN!"
}

function runForYourLife2 (){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "Destroy them"
  document.querySelector('.option1').onclick = judgementExplain

  document.querySelector('.option2').style.display = "block"
  document.querySelector('.option2').innerHTML = "Destroy them!!!"
  document.querySelector('.option2').onclick = interval

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/rain.jpg')"
  document.getElementById("title").innerHTML=""
  document.getElementById("description").innerHTML="More chains were flying down, what will you do?" 
}

function interval() {
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "Thanks?"
  document.querySelector('.option1').onclick = judgementExplain
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/memeoldmanthumbsup.jpg')"
  document.getElementById("title").innerHTML=""
  document.getElementById("description").innerHTML="I like your spirit, young man/woman"
}

function judgementExplain (){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "Like I *censored* care!"
  document.querySelector('.option1').onclick = luciferAngry
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement smile.png')"
  document.getElementById("title").innerHTML="Judgement, the High Prosecutor"
  document.getElementById("description").innerHTML="THOSE CHAINS THAT BIND YOU, ARE MADE OF THINGS THAT BROUGHT YOU HERE.YOUR EGO. YOUR GREED. YOUR LUST. YOU ARE YOUR OWN TORTURER." 
}

function luciferAngry (){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "Yeah! You should listen to her, gal!"
  document.querySelector('.option1').onclick = reallyAngryJudgement
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/j luci.png')"
  document.getElementById("title").innerHTML="Lucifer, the CEO of Hell"
  document.getElementById("description").innerHTML="Enough! High Prosecutor, I order you to stand down at once!" 
}

function reallyAngryJudgement(){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "I don't care!"
  document.querySelector('.option1').onclick = justice
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement angry.png')"
  document.getElementById("title").innerHTML="Judgement, the High Prosecutor"
  document.getElementById("description").innerHTML="NO AUTHORITY STANDS ABOVE PUNISHMENT!" 
}

function justice(){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "Don't encourage her!"
  document.querySelector('.option1').onclick = azazel
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/j just.png')"
  document.getElementById("title").innerHTML="Justice, the Awesome Demon"
  document.getElementById("description").innerHTML="Keep going Judge! You are on the roll!" 
}

function azazel(){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "Do your reserach somewhere else!"
  document.querySelector('.option1').onclick = luciblush
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/j aza.png')"
  document.getElementById("title").innerHTML="Azazel, the Curious Angel"
  document.getElementById("description").innerHTML="Yes, please continue. This is A+ material so far." 
}

function luciblush(){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "Cuz you are not anymore when you joined my harem."
  document.querySelector('.option1').onclick = finalWords
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/luci blush.png')"
  document.getElementById("title").innerHTML="Lucifer, the CEO of Hell"
  document.getElementById("description").innerHTML="I’m supposed to be the goddamn Queen of Hell! Why is nobody ever listening to me?" 
}

function finalWords(){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "Only thing I regret is not seeking you sooner."
  document.querySelector('.option1').onclick = judgeSurprised

  document.querySelector('.option2').style.display = "block"
  document.querySelector('.option2').innerHTML = "Being punished by you makes all sins worth it."
  document.querySelector('.option2').onclick = judgeSurprised

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement.png')"
  document.getElementById("title").innerHTML="Judgement, the High Prosecutor"
  document.getElementById("description").innerHTML="ANY LAST WORDS BEFORE THE REAL PAIN BEGINS?" 
}

function judgeSurprised(){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "But damn, you have amazing eyes."
  document.querySelector('.option1').onclick = judgementUnhappy

  document.querySelector('.option2').style.display = "block"
  document.querySelector('.option2').innerHTML = "Did I mention how much I love your hair?"
  document.querySelector('.option2').onclick = judgementUnhappy

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement.png')"
  document.getElementById("title").innerHTML="Judgement, the High Prosecutor"
  document.getElementById("description").innerHTML="QUIT YOUR CHEAP FLATTERIES! YOU MAKE MY JOB DIFFICULT!" 
}

function judgementUnhappy(){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "Really?"
  document.querySelector('.option1').onclick = judgementUnhappy2
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement unhappy.png')"
  document.getElementById("title").innerHTML="Judgement, the High Prosecutor"
  document.getElementById("description").innerHTML="Look, I don’t really want to do this. But the pacts been sealed. Nothing will prevent your damnation. Nothing will prevent your damnation"
}

function judgementUnhappy2(){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "..."
  document.querySelector('.option1').onclick = judgementUnhappy3
  document.querySelector('.option2').style.display = ""

  document.getElementById("description").innerHTML="However… I could postpone your torment a few years, if you leave and never disturb hell again."
}

function judgementUnhappy3(){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "..."
  document.querySelector('.option1').onclick = judgementUnhappy4
  document.querySelector('.option2').style.display = ""

  document.getElementById("description").innerHTML="Our fates are one. I will kill you and you’ll suffer. But it does not have to be today"
}

function judgementUnhappy4(){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "..."
  document.querySelector('.option1').onclick = judgementUnhappy5
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement unhappy.png')"
  document.getElementById("description").innerHTML="SO CONSIDER YOURSELF LUCKY AND GET OUT OF MY SIGHT!"
}

function judgementUnhappy5(){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "..."
  document.querySelector('.option1').onclick = judgementUnhappy6
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement.png')"
  document.getElementById("description").innerHTML="... ... ..."
}

function judgementUnhappy6(){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "..."
  document.querySelector('.option1').onclick = judgementUnhappy7
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement angry.png')"
  document.getElementById("description").innerHTML="... ... ..."
}

function judgementUnhappy7(){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "..."
  document.querySelector('.option1').onclick = judgementUnhappy8
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement angry.png')"
  document.getElementById("description").innerHTML="WHAT? YOU WANT TO INVITE ME TO YOUR HAREM? DON’T BE RIDICULOUS!"
}

function judgementUnhappy8(){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "Wouldn’t want it any other way."
  document.querySelector('.option1').onclick = gloriousSuccess
 
  document.querySelector('.option2').style.display = "block"
  document.querySelector('.option2').innerHTML = "Believe me. I have worse in my harem already."
  document.querySelector('.option2').onclick = gloriousSuccess

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement unhappy.png')"
  document.getElementById("description").innerHTML="You’d share rood with an immortal avatar of pain, blood-sworn to nurder you through torture?"
}

function judgementUnhappy8(){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "Wouldn’t want it any other way."
  document.querySelector('.option1').onclick = gloriousSuccess
 
  document.querySelector('.option2').style.display = "block"
  document.querySelector('.option2').innerHTML = "Believe me. I have worse in my harem already."
  document.querySelector('.option2').onclick = gloriousSuccess

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement unhappy.png')"
  document.getElementById("description").innerHTML="You’d share rood with an immortal avatar of pain, blood-sworn to nurder you through torture?"
}

function gloriousSuccess(){
  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "[DAB]."
  document.querySelector('.option1').onclick = moreWillBeComingUp
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/judgement surprised.png')"
  document.getElementById("description").innerHTML="Wait, You are serious? Seeing how far off proper ritual we are already, I might as well give it a shot."
}

function moreWillBeComingUp(){
  bossMusic.load()
  endMusic.play()

  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option1').innerHTML = "Uh Hm."
  document.querySelector('.option1').onclick = moreWillBeComingUp2
  document.querySelector('.option2').style.display = ""

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/victory.png')"
  document.getElementById("title").innerHTML=""
  document.getElementById("description").innerHTML="That's it, and you live a happy life with your harem. Because of how you have your harem from hell. You are still known as the HELLTAKER"
}

function moreWillBeComingUp2(){
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option1').innerHTML = "That's true"
    document.querySelector('.option1').onclick = moreWillBeComingUp3
    document.querySelector('.option2').style.display = ""

    document.querySelector('#bgimg').style.backgroundImage = "url('../images/tired.png')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="But it was hell for you to keep order for these demons. Well, life is a hell isn't it? Still better than a normal life."
}

function moreWillBeComingUp3(){
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option1').innerHTML = "...OK."
    document.querySelector('.option1').onclick = theEnd
    document.querySelector('.option2').style.display = ""

    document.querySelector('#bgimg').style.backgroundImage = "url('../images/smile.png')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="Remember, life is just full of scratches except death, kek."
}

function theEnd(){
  document.querySelector('.option1').style.display = "none"
  document.querySelector('.option2').style.display = "none"
  
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/the end.png')"
  document.getElementById("title").innerHTML=""
  document.getElementById("description").innerHTML="THE END"
}


