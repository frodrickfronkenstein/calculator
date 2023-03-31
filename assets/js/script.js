//choose calculator buttons
var basicEl = document.querySelector("#basic");
var scientificEl = document.querySelector("#scientific");
var graphicEl = document.querySelector("#graphic");

//output
var outputEl = document.querySelector("#output");

//buttons
var numPadEl = document.querySelectorAll(".zero-nine");
var decimalEl = document.querySelector("#decimal");
var acEl = document.querySelector("#ac");
var plusMinusEl = document.querySelector("#plus-minus");
var percentageEl = document.querySelector("#percentage");
var divideEl = document.querySelector("#divide");
var multiplyEl = document.querySelector("#multiply");
var minusEl = document.querySelector("#minus");
var plusEl = document.querySelector("#plus");
var equalEl = document.querySelector("#equal");

//choose calculator
scientificEl.addEventListener('click', function handleClick(event) {
    event
    window.alert("not yet ready for prime time")
})
graphicEl.addEventListener('click', function handleClick(event) {
    event
    window.alert("not yet ready for prime time")
})

// functions
//push number to array
var a = [];
var b = [];
var pushNumber = function() {
    if(a.length > 10) {
        console.log("overflow")
    } else {
        a.push(i);
    }
};

//display number
var displayNumber = function() {
    var x = a.join('');
    if (x === "") {
        x = "0";
    };
    outputEl.textContent = x;
}
//get rid of 0 at beginning of array
var ifZero = function() {
    if (a[0] === "0") {
        a.shift("0");
    } if (a[0] === "-" && a[1] === "0") {
        a.splice(1,1);
    }
}

// numpad
numPadEl.forEach(numPad => {
    numPad.addEventListener('click', function handleClick(event) {
        event
        i = numPad.innerHTML;
        console.log(i);
        ifZero();
        pushNumber();
        displayNumber();
    })
})

decimalEl.addEventListener('click', function handleClick(event) {
    event
    i=".";
    if (!a.includes(".")) {
        ifZero();
        pushNumber();
        var x = a.join('');
        outputEl.textContent = x;
    }
})

// operator buttons
divideEl.addEventListener('click', function handleClick(event) {
    event
    var x = a.join('');
    b.push(x);
    if (b.includes("/") || b.includes("*") || b.includes("+") || b.includes("-")) {
        console.log(true);
    } else {
        b.push("/");
    }
    a = [];
})
multiplyEl.addEventListener('click', function handleClick(event) {
    event
    var x = a.join('');
    b.push(x);
    if (b.includes("/") || b.includes("*") || b.includes("+") || b.includes("-")) {
        console.log(true);
    } else {
        b.push("*");
    }
    a = [];
})
minusEl.addEventListener('click', function handleClick(event) {
    event
    var x = a.join('');
    b.push(x);
    if (b.includes("/") || b.includes("*") || b.includes("+") || b.includes("-")) {
        console.log(true);
    } else {
        b.push("-");
    }
    a = [];
})
plusEl.addEventListener('click', function handleClick(event) {
    event
    var x = a.join('');
    b.push(x);
    if (b.includes("/") || b.includes("*") || b.includes("+") || b.includes("-")) {
        console.log(true);
    } else {
        b.push("+");
    }
    a = [];
})
equalEl.addEventListener('click', function handleClick(event) {
    event
    var x = a.join('');
    b.push(x);
    var y = b.join('');
    var z = eval(y);
    outputEl.textContent = z;
    a = ["0"];
    b = [];
})

//top buttons
acEl.addEventListener('click', function handleClick(event) {
    event
    a = ["0"];
    outputEl.textContent = a;
})
plusMinusEl.addEventListener('click', function handleClick(event) {
    event
    if (a.includes("-")) {
        console.log(true);
        a.shift("-");
    } else {
        a.unshift("-");
    }
    displayNumber();
})
percentageEl.addEventListener('click', function handleClick(event) {
    event
    var x = a.join('');
    a = ["0"];
    var x = x * 0.01;
    outputEl.textContent = x;

})