//! stop watch
console.log(Date.now())

const display =document.getElementById("display")
let timer=null
let isrunning=false
let starttime=0
let elapsedtime=0

function start(){
    if(!isrunning){
        starttime=Date.now()-elapsedtime
        timer=setInterval(update,10)
        isrunning=true
    }
}

function stop(){
    if(isrunning){
        clearInterval(timer)
        elapsedtime=Date.now()-starttime
        isrunning=false
    }

}

function reset(){
    clearInterval(timer)
    let isrunning=false
    let starttime=0
    let elapsedtime=0
    display.textContent=`00:00:00:00`
}

function update()
{
    const currenttime=Date.now()
    elapsedtime=currenttime-starttime

    let hours=Math.floor(elapsedtime/(100*60*60))
    let minute=Math.floor(elapsedtime/(1000*60)%60)
    let seconds=Math.floor(elapsedtime/1000%60)
    let millseconds=Math.floor(elapsedtime%1000/10)
    
    hours=String(hours).padStart(2,"0")
    seconds=String(seconds).padStart(2,"0")
    minute=String(minute).padStart(2,"0")
    millseconds=String(millseconds).padStart(2,"0")

    display.textContent=`${hours}:${minute}:${seconds}:${millseconds}`
}