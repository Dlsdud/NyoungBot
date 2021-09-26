var d = new Date();

let timer;
let time = 0;
var starFlag = true;
var t = 0;

module.exports = {   

    name: '공부',
    description: "스톱워치 명령어",

    execute(message) {

        try{
            if(starFlag){
                timer = setInterval(function(){
                    time = time + 1;
            
                    min = Math.floor(time/60);
                    hour = Math.floor(min/60);
                    sec = time%60;
                    min = min%60;
            
                    var th = hour;
                    var tm = min;
                    var ts = sec;
                    if(th<10){ th = "0" + hour;}
                    if(tm<10){ tm = "0" + min; }
                    if(ts<10){ ts = "0" + sec; }
                    
                    console.log(th, tm, ts);
                    t = th+":"+tm+":"+ts;
                }, 1000);
                starFlag = false;
                message.channel.send(`${message.author}, 파이팅! \n 시작시간: ${d.toLocaleTimeString()}`);        
                return t;
            } else if(!starFlag){
                clearInterval(timer);
                starFlag = true;
                message.channel.send(`${message.author}, 수고했어!! \n 종료시간: ${d.toLocaleTimeString()} \n 총 공부시간: ${t}`)
            }
        } 
        catch(error) {
          console.error(error);
        }
    }
} 