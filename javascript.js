
function checkfun(count){
switch (count) {
    case 0:
        document.querySelector(".div1").style.backgroundColor="hsl(249deg 9% 15%)";
        break;
    case 1:
        document.querySelector(".div2").style.backgroundColor="hsl(249deg 9% 15%)";
        break;
        case 2,3:
            document.querySelector(".div3").style.backgroundColor="hsl(249deg 9% 15%)";
        break;

    default:
        break;}
        console.log(count);
}
let range=document.querySelector('.inputrange');
range.addEventListener("mousemove",function(){
    let value=range.value;
    var color='linear-gradient(90deg,hsl(126deg 100% 82%)' +value*5+'%,hsl(249deg 13% 10%)' +value*5+'%)';
    range.style.background=color;
    document.querySelector(".num").innerText=value;
})
let count=2;
document.querySelector(".checkdiv").addEventListener("click",function(e){
    if(e.target.checked==true){
        count++;
        if(count>=5){count=1;}
    }
    switch (count) {
        case 1:
            document.querySelector(".div1").style.backgroundColor="hsl(41deg 93% 70%)";
            document.querySelector(".div1").style.border="2px solid hsl(41deg 93% 70%)";
            break;
            case 2,3:
                document.querySelector(".div1").style.backgroundColor="hsl(41deg 93% 70%)";
            document.querySelector(".div1").style.border="2px solid hsl(41deg 93% 70%)";
                document.querySelector(".div2").style.backgroundColor="hsl(41deg 93% 70%)";
            document.querySelector(".div2").style.border="2px solid hsl(41deg 93% 70%)";
            break;
            case 4:
                document.querySelector(".div1").style.backgroundColor="hsl(41deg 93% 70%)";
            document.querySelector(".div1").style.border="2px solid hsl(41deg 93% 70%)";
                document.querySelector(".div2").style.backgroundColor="hsl(41deg 93% 70%)";
            document.querySelector(".div2").style.border="2px solid hsl(41deg 93% 70%)";
            document.querySelector(".div3").style.backgroundColor="hsl(41deg 93% 70%)";
            document.querySelector(".div3").style.border="2px solid hsl(41deg 93% 70%)";
            break;
    
        default:
            break;
    }
    if(e.target.checked==false){
        count--;
        checkfun(count);
    }
    console.log(count);
})

document.querySelector(".btn").addEventListener("click",function(){
    let random=Math.floor(Math.random()*4);
    let chkbox1=document.getElementById('chkbox1');
    let chkbox2=document.getElementById('chkbox2');
    let chkbox3=document.getElementById('chkbox3');
    let chkbox4=document.getElementById('chkbox4');
    let x=document.querySelector(".inputdiv input").value="";
    for(let i=1;i<=range.value;i++){
        if(x.length<range.value){
    if(chkbox1.checked==true){
        let num=Math.floor(Math.random()*(90-65))+65;
        x=document.querySelector(".inputdiv input").value+=String.fromCharCode(num);
    }}

    if(x.length<range.value){
    if(chkbox2.checked==true){
        let num=Math.floor(Math.random()*(122-97))+97;
        x=document.querySelector(".inputdiv input").value+=String.fromCharCode(num);
    }}

    if(x.length<range.value){
    if(chkbox3.checked==true){
        let num=Math.floor(Math.random()*(9-1))+1;
        x=document.querySelector(".inputdiv input").value+=num;
    }}

    if(x.length<range.value){
    if(chkbox4.checked==true){
        let num=Math.floor(Math.random()*(47-33))+33;
        x=document.querySelector(".inputdiv input").value+=String.fromCharCode(num);
    }}
  }
})