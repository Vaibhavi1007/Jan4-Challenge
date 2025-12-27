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
        if(value > 0){
        for (let index = 0; index < value; index++) {
            this.increment();
        }
    }
    },

    updateText() {
        const word = this.count === 1 ? "time" : "times";
        if(countText){
        countText.innerText = `Clicked ${this.count} ${word}`;
        }
    }
};

let btn = document.getElementById("btn");
let countText = document.getElementById("countText");

btn.addEventListener("click", function () {
    counter.increment();
});

resetbtn.addEventListener("click" , function() {
    counter.reset();
});
  
