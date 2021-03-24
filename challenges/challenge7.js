// function pic(){
//   document.querySelector("#bgimg").style.backgroundImage = 'url("../images/void.png")';
// }


function start(){
  console.log('start function ran')
  var enter = document.getElementById('start')
  document.querySelector('#bgimg').style.backgroundImage = "url('../images/Beelzebub.png')"
  document.getElementById("title").innerHTML="Belzebub, The Great Fly"
  document.getElementById("description").innerHTML="Hi you, plz don’t mind me la. It’s just me, a fly called Beelzebub la."
  // document.querySelector('.option1').style.display = "block"
  // document.querySelector('.option2').style.display = "block"

  document.querySelector('.option1').style.display = "block"
  document.querySelector('.option2').style.display = "block"

  setTimeout(() => {
    document.querySelector('.option1').style.opacity = "1"
    document.querySelector('.option1').style.transform = "none"
    document.querySelector('.option2').style.opacity = "1"
    document.querySelector('.option2').style.transform = "none"
  }, 100)
}


function quit(){
    window.close()
}

document.addEventListener("keyup", function(press) {
  if (press.keyCode === 13) {
   press.preventDefault();
   start()
  }
})

enter.addEventListener('enter',function(){
  alert("it works");
},false);