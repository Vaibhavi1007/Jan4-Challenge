const counter = {
    count: 0,

    increment() {
        this.count++;
        this.updateText();
    },

    reset() {
        this.count = 0;
        this.updateText();
    },

    add(value){
        if (isNaN(value)) return "INVALID";
        if (value <= 0) return "NON-POSITIVE";
       
        this.count += value;
        this.updateText();
    },

    updateText() {
        const word = this.count === 1 ? "time" : "times";
        countText.innerText = `Clicked ${this.count} ${word}`;  
    }
};

let btn = document.getElementById("btn");
let countText = document.getElementById("countText");
let resetbtn = document.getElementById("resetbtn");
let add = document.getElementById("add");
const input = document.getElementById("input");

btn.addEventListener("click", function () {
    counter.increment();
});

resetbtn.addEventListener("click" , function() {
    counter.reset();
});

add.addEventListener("click" , function(){   
    const value = Number(input.value);
    const result = counter.add(value);

    if(result === "INVALID"){
        alert("Please enter a valid number")
    }else if(result === "NON-POSITIVE"){
        "Please enter a number greater than 0"
    }
});
  
