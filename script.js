const clock=document.querySelector(".clock")
const waveBtn=document.querySelector(".wave-btn")
const canvas = document.getElementById('Matrix');
const wrapper=document.querySelector(".wrapper")




function display(){
const date=new Date()
let hours=date.getHours()
let minutes=date.getMinutes()
let seconds=date.getSeconds()
if(minutes<10){
    minutes=`0${minutes}`
}
if(seconds<10){
    seconds=`0${seconds}`
}
clock.innerHTML=`${hours}:${minutes}:${seconds}`}
setInterval(display,1000)

//The Matrix
waveBtn.addEventListener("click",function(){

canvas.style.display="block"
wrapper.style.display="none"


const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 20;
const columns = canvas.width/fontSize;
const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';
	

	for(let i = 0; i < rainDrops.length; i++)
	{
		
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 30);
})

document.addEventListener("keydown",function(e){
    if(e.code==="Escape"){
        canvas.style.display="none"
        wrapper.style.display="flex"
    }
})

