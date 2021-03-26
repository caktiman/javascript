
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
    document.getElementById("title").innerHTML=""
    document.getElementById("description").innerHTML="You decided to fall for any pitfall, time for VTuber!!!"
  }

}

function start(){



  document.querySelector('.option2').onclick = myNewFunction
}



