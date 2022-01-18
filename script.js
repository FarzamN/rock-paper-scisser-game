function rpsgame(YourChoise) {
  
    document.getElementById("userselect").innerHTML = "Please wait Thinking.....";
    setTimeout(function ()
    {
        var random = Math.floor(Math.ceil(Math.random() * 3));
        if (random == "1") { var comid = "rock"; }
        if (random == "2") { var comid = "paper"; }
        if (random == "3") { var comid = "scisser"; }
        //for ro.idck
        if (comid == YourChoise.id) {
            document.getElementById("draw").style.display = "block";
            if(random == "1"){
                document.getElementById("rock-2").style.display = "block";
                document.getElementById("rock").style.display = "block";
                document.getElementById("scisser").style.display = "none";
                document.getElementById("paper").style.display = "none";
            }
            if(random == "2"){
                document.getElementById("paper-2").style.display = "block";
                document.getElementById("rock").style.display = "none";
                document.getElementById("scisser").style.display = "none";
                document.getElementById("paper").style.display = "block";
            }
            if(random == "3"){
                document.getElementById("scisser-2").style.display = "block";
                document.getElementById("rock").style.display = "none";
                document.getElementById("scisser").style.display = "block";
                document.getElementById("paper").style.display = "none";
            }
        }
        if (comid == "rock" && YourChoise.id == "paper") {
            document.getElementById("win").style.display = "block";
            document.getElementById("scisser").style.display = "none";
        };
        if (comid == "rock" && YourChoise.id == "scisser") {
            document.getElementById("lose").style.display = "block";
            document.getElementById("paper").style.display = "none";
        };
        //for paper
        if (comid == "paper" && YourChoise.id == "scisser") {
            document.getElementById("win").style.display = "block";
            document.getElementById("rock").style.display = "none";
        };
        if (comid == "paper" && YourChoise.id == "rock") {
            document.getElementById("lose").style.display = "block"
            document.getElementById("scisser").style.display = "none"
        };
        //for scisser
        if (comid == "scisser" && YourChoise.id == "paper") {
            document.getElementById("lose").style.display = "block"
            document.getElementById("rock").style.display = "none"
        };
    
        if (comid == "scisser" && YourChoise.id == "rock") {
            document.getElementById("win").style.display = "block"
            document.getElementById("paper").style.display = "none"
            
        }
        document.getElementById("userselect").innerHTML = "";
    },2000);
}
function reset(){
    location.reload();
}
function thinking()
{
    
  
}
