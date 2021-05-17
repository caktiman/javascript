var a = new Audio("drum bottom left.m4a")
var b= new Audio("drum top left.m4a")
var c = new Audio("drum top right.m4a")
var d = new Audio("drum bottom right.m4a")
var e = new Audio("kick rev.m4a")
var f = new Audio("broken snare.m4a")
var g = new Audio("normal snare.m4a")

document.addEventListener("mouseover", check)
document.addEventListener("keyup", checkClick)

function check(event){
    console.log(event.explicitOriginalTarget.id)
    if (event.explicitOriginalTarget.id === "a"){
        a.play()
        setTimeout(() => {
            a.load()
        }, 1500)
    }else if(event.explicitOriginalTarget.id === "b"){
        b.play()
        setTimeout(() => {
            b.load()
        }, 1500)
    }else if(event.explicitOriginalTarget.id === "c"){
        c.play()
        setTimeout(() => {
            c.load()
        }, 1500)
    }else if(event.explicitOriginalTarget.id === "d"){
        d.play()
        setTimeout(() => {
            d.load()
        }, 1500)
    }else if(event.explicitOriginalTarget.id === "e"){
        e.play()
        setTimeout(() => {
            e.load()
        }, 1500)
    }else if(event.explicitOriginalTarget.id === "f"){
        f.play()
        setTimeout(() => {
            f.load()
        }, 1500)
    }else if(event.explicitOriginalTarget.id === "g"){
        g.play()
        setTimeout(() => {
            g.load()
        }, 1500)
    }
}

//This is really bad la!
function checkClick(event){
    console.log(event.key)
    if (event.key === "a" ) {
        a.play()
        setTimeout(() => {
            a.load()
        }, 1500)
    }else if(event.key === "s"){
        b.play()
        setTimeout(() => {
            b.load()
        }, 1500)
    }else if(event.key === "d"){
        c.play()
        setTimeout(() => {
            c.load()
        }, 1500)
    }else if(event.key === "f"){
        d.play()
        setTimeout(() => {
            d.load()
        }, 1500)
    }else if(event.key === " "){
        e.play()
        setTimeout(() => {
            e.load()
        }, 1500)
    }else if(event.key === "j"){
        f.play()
        setTimeout(() => {
            f.load()
        }, 1500)
    }else if(event.key === "k"){
        g.play()
        setTimeout(() => {
            g.load()
        }, 1500)
    }
}