var lowE = new Audio("Guitar low e.m4a")
var  A= new Audio("Guitar A rev.m4a")
var D = new Audio("Guitar d.m4a")
var G = new Audio("Guitar g.m4a")
var B = new Audio("Guitar b.m4a")
var highE = new Audio("Guitar high e rev.m4a")

document.addEventListener("mouseover", check)

function check(event){
    // console.log(event.explicitOriginalTarget.id)
    console.log(event.target.id)
    if (event.target.id === "1"){
        lowE.play()
        setTimeout(() => {
            lowE.load()
        }, 4000)
    }else if(event.target.id === "2"){
        A.play()
        setTimeout(() => {
            A.load()
        }, 4000)
    }else if(event.target.id === "3"){
        D.play()
        setTimeout(() => {
            D.load()
        }, 4000)
    }else if(event.target.id === "4"){
        G.play()
        setTimeout(() => {
            G.load()
        }, 4000)
    }else if(event.target.id === "5"){
        B.play()
        setTimeout(() => {
            B.load()
        }, 4000)
    }else if(event.target.id === "6"){
        highE.play()
        setTimeout(() => {
            highE.load()
        }, 4000)
    }
}
