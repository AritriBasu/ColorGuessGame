//selectors
var numSquares=6;
var colors=generateRndColor(numSquares);
var picked=pickColor();
var dispMsg=document.getElementById("disp");
dispMsg.textContent=picked;
var Msg=document.querySelector("#try");
var square=document.getElementsByClassName("square");
var h1=document.querySelector("h1");
var reset=document.getElementById("reset");
var easybtn=document.getElementById("easybtn");
var hardbtn=document.getElementById("hardbtn");

easybtn.addEventListener("click",function(){
    hardbtn.classList.remove("mode");
    easybtn.classList.add("mode");
    numSquares=3;

    colors=generateRndColor(numSquares);

    picked=pickColor();

    dispMsg.textContent=picked;

    for(let i=0;i<square.length;i++)
        if(colors[i])
        square[i].style.backgroundColor=colors[i];
        else
        square[i].style.display="none";
});

hardbtn.addEventListener("click",function(){
    easybtn.classList.remove("mode");
    hardbtn.classList.add("mode");
    numSquares=6;

    colors=generateRndColor(numSquares);

    picked=pickColor();

    dispMsg.textContent=picked;

    for(let i=0;i<square.length;i++)
    {
        square[i].style.backgroundColor=colors[i];
        square[i].style.display="block";
    }
});
reset.addEventListener("click",function()
{
    colors=generateRndColor(numSquares);

    picked=pickColor();

    dispMsg.textContent=picked;

    h1.style.backgroundColor="steelblue";

    Msg.textContent="";

    this.textContent="New Colours"

    for(let i=0;i<square.length;i++){
        square[i].style.backgroundColor=colors[i];
    }

});

for(let i=0;i<square.length;i++)
{
    //initial colors
    square[i].style.backgroundColor=colors[i];

    //event listener
    square[i].addEventListener("click",function(){
        var clicked=this.style.backgroundColor;
        if(clicked===picked){
            Msg.textContent="Correct!";
            ChangeColor(clicked);
            h1.style.backgroundColor=clicked;
            reset.textContent="Play again?"
        }
        else{
            this.style.backgroundColor="#232323";
            Msg.textContent="Try Again!";
        }
    });
}


function pickColor()
{
    var rndindex=Math.floor(Math.random()*colors.length);
    return (colors[rndindex]);
}

function ChangeColor(color)
{
    for(let i=0;i<square.length;i++)
        square[i].style.backgroundColor=color;
}
function generateRndColor(num)
{
    var arr=[];
    for(let i=0;i<num;i++)
    {
        arr.push(RandColor());
    }
    return arr;
}

function RandColor()
{

    var r=Math.floor(Math.random()*255);
    var g=Math.floor(Math.random()*255);
    var b=Math.floor(Math.random()*255);

   return("rgb("+r+", "+g+", "+b+")");
}