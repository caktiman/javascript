var introMusic = new Audio("../game audio/Apropos.mp3")
var vtuberMusic = new Audio("../game Audio/Shiny Smily Story Instrumental.mp3")
var mainMusic = new Audio("../game Audio/Vitality VIP Edit.mp3")
var bossMusic = new Audio("../game Audio/Epitomize Sinners VIP")
var endMusic = new Audio("../game Audio/Luminescent.mp3")

introMusic.play()

document.addEventListener("keyup", pressEnter)

function pressEnter(event) {
  
  if (event.keyCode === 13) {
   event.preventDefault();
   initiation()
  }

  if (event.keyCode === 65){
    vTuber()
  }
}

function quit(){
  window.close()
}

function initiation(){
  document.removeEventListener("keyup", pressEnter)

  document.querySelector('#bgimg').style.backgroundImage = "url('../images/Beelzebub.png')"
  document.getElementById("title").innerHTML="Belzebub, The Great Fly"
  document.getElementById("description").innerHTML="Hi you, plz don’t mind me la. It’s just me, a fly called Beelzebub la."
 
  document.addEventListener("keyup", mainMenu)
}

function mainMenu(event) {
  if (event.keyCode === 13 ) {
    document.getElementById("description").innerHTML=""
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option2').style.display = "block"
    

    setTimeout(() => {
      document.querySelector('.option1').style.opacity = "1"
      document.querySelector('.option1').style.transform = "none"
      document.querySelector('.option2').style.opacity = "1"
      document.querySelector('.option2').style.transform = "none"
    }, 100)
  }
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

  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/bad end.png')"
    document.getElementById("title").innerHTML="Developer"
    document.getElementById("description").innerHTML="You decided to fall for any pitfall, time for VTuber!!!"
  }

}

function start(){
  document.removeEventListener("keyup", mainMenu)

  document.querySelector('.option1').style.display = "none"
  document.querySelector('.option2').style.display = "none"
  document.querySelector('#bgimg').style.backgroundImage = "url('none')"
  document.querySelector('#bgimg').style.backgroundColor = "#01031c"
  document.getElementById("title").innerHTML=""
  document.getElementById("description").innerHTML="You really like the story, eh? Fine, I will tell it again…"
  
  document.addEventListener("keyup", noGirl)

}

function noGirl(){
  if (event.keyCode === 13) {
    event.preventDefault();
    // document.removeEventListener("keyup", start)
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/woke up.png')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="You woke up wanting to have a girlfriend because you have NONE!!!"
    
    document.removeEventListener("keyup", noGirl) 
    document.addEventListener("keyup", dressedUp)
  }
}

function dressedUp(){
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/dressed up.png')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="Anyway, you decided to take action, and you realized that humans sucks, so you decided to have something elusive. Demon girls! What a fine taste you have, eh?"  
  
    document.removeEventListener("keyup", dressedUp) 
    document.addEventListener("keyup", determination)
  }
}

function determination(){
  if (event.keyCode === 13) {
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
    document.addEventListener("keyup", pandemonia)
  }, 500);
}

function pandemonia(event){
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/Pandemonia.png')"
    document.getElementById("title").innerHTML="Pandemonia, the Tired Demon"
    document.getElementById("description").innerHTML="Name’s Pandemonica, Hell’s Customer Service. How may I serve you?"  
  
    document.removeEventListener("keyup", pandemonia) 
    document.addEventListener("keyup", pandemoniaChoice)
  }
}

function pandemoniaChoice(event) {
  if (event.keyCode === 13 ) {
    document.getElementById("description").innerHTML=""
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option2').style.display = "block"
    document.querySelector('.option1').innerHTML = "We can figure something out at my place"
    document.querySelector('.option2').innerHTML = "Maybe I can serve YOU instead?"

    
    document.querySelector('.option1').onclick = panFail
    document.querySelector('.option2').onclick = panSuccess
    document.removeEventListener("keyup", pandemoniaChoice) 
    document.addEventListener("keyup", panChoicePop)
  }
}

function panChoicePop(event){
  if (event.keyCode === 13 ) { 
    document.querySelector('.option1').style.display = "block"
    document.querySelector('.option2').style.display = "block"
    document.querySelector('.option1').style.opacity = "0"
    document.querySelector('.option2').style.opacity = "0"
    document.querySelector('.option1').style.transform = "0"
    document.querySelector('.option2').style.transform = "0"




    setTimeout(() => {
      document.querySelector('.option1').style.opacity = "1"
      document.querySelector('.option1').style.transform = "none"
      document.querySelector('.option2').style.opacity = "1"
      document.querySelector('.option2').style.transform = "none"
    }, 100)

    document.removeEventListener("keyup", panChoicePop) 
  }

}

function panFail(event){
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/Pandemonia.png')"
  document.getElementById("title").innerHTML="Pandemonia, the Tired Demon"
  document.getElementById("description").innerHTML="You thought you’re leaving hell alive? How delusional."

  document.removeEventListener("onclick", panFail)
  document.addEventListener("keyup", pandFailFail)
}

function pandFailFail(event){
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector('.option1').style.display = ""
    document.querySelector('.option2').style.display = ""
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/bad end.png')"
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="She took your face in her hands and snapped your neck with professional gentleness."  
  
    document.removeEventListener("keyup", pandFailFail) 
  }
}

function panSuccess(event) {
  document.querySelector('.option1').style.display = ""
  document.querySelector('.option2').style.display = ""
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/Pandemonia Success.png')"
  document.getElementById("title").innerHTML="Pandemonia, the Tired Demon"
  document.getElementById("description").innerHTML="Sweet of you to offer. I could really use some coffee. I’m not myself without it." 

  document.removeEventListener("onclick", panSuccess) 
  document.addEventListener("keyup", modeusChoice)
}

function modeusChoice(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector('#bgimg').style.backgroundImage = "url('../images/Modeus.png')"
    document.getElementById("title").innerHTML="Modeus, the lustful Demon"
    document.getElementById("description").innerHTML="You and me. Now."

    document.querySelector('.option1').innerHTML = "Deal. No question asked."
    document.querySelector('.option2').innerHTML = "No time. Busy gathering girls."  
    document.querySelector('.option1').onclick = modeFail
    document.querySelector('.option2').onclick = modeSuccess
    document.removeEventListener("keyup", modeusChoice) 
    document.addEventListener("keyup", mainMenu)
  }
  
}







