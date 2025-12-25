 
    // document.getElementById("btn").onclick = function () {
    //   // alert("It works!");
    // };
      
    let count = 0;
    let countText = document.getElementById("countText");
    let btn = document.getElementById("btn");
    let resetbtn = document.getElementById("resetbtn");


    btn.onclick = function () {
      count++;
      const word = count === 1? "time" : "times";
      countText.innerText = `Clicked ${count} ${word}`;
    };

    if(resetbtn){
    resetbtn.onclick = function (){
        count = 0;
        countText.innerText = "Clicked 0 times";
    }
};
  
