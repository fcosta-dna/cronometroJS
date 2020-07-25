const p1 = document.getElementById("p1");
const bstart = document.getElementById("bstart");
const bpause = document.getElementById("bpause");
const breset = document.getElementById("breset");
  
let ms = 0;
let min = 0;
let seg = 0;
p1.innerHTML = `${min}:${seg}:${ms}`
function start(){
    this.count = 0; 
    bstart.addEventListener('click', e => {
        this.count++
        if(this.count >= 2){
            return;
        }else{
            this.starter = setInterval(function(){
                p1.innerHTML = `${min}:${seg}:${ms}`
                ms+=10
                if(ms === 1000){
                   seg+=1
                   ms=0
                   } else if(seg === 60){
                    min+=1
                    seg=0
                    }        
            }, 10)
        }     
    })
}

function pause(){
    bpause.addEventListener('click', e => {
      clearInterval(this.starter)
      this.count = 0
})}

function reset(){
    breset.addEventListener('click', e => {
        clearInterval(this.starter)
        this.count = 0
        ms = 0;
        min = 0;
        seg = 0;
        p1.innerHTML = `${min}:${seg}:${ms}`
  })
}

start();
pause();
reset();




