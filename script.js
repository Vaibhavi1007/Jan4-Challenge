 
    // document.getElementById("btn").onclick = function () {
    //   // alert("It works!");
    // };
    let countText = document.getElementById("countText");
    let count = 0;
    document.getElementById("btn").onclick = function () {
      count++;
      countText.innerText = "Clicked " + count + " times";
    };
  
