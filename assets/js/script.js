//choose calculator buttons
var basicEl = document.querySelector("#basic");
var scientificEl = document.querySelector("#scientific");
var graphicEl = document.querySelector("#graphic");

//output
var outputEl = document.querySelector("#output");

//buttons
var acEl = document.querySelector("#ac");
var plusMinusEl = document.querySelector("#plus-minus");
var percentageEl = document.querySelector("#percentage");
var divideEl = document.querySelector("#divide");
var sevenEl = document.querySelector("#seven");
var eightEl = document.querySelector("#eight");
var nineEl = document.querySelector("#nine");
var multiplyEl = document.querySelector("#multiply");
var fourEl = document.querySelector("#four");
var fiveEl = document.querySelector("#five");
var sixEl = document.querySelector("#six");
var minusEl = document.querySelector("#minus");
var oneEl = document.querySelector("#one");
var twoEl = document.querySelector("#two");
var threeEl = document.querySelector("#three");
var plusEl = document.querySelector("#plus");
var zeroEl = document.querySelector("#zero");
var decimalEl = document.querySelector("#decimal");
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
    if(a.length > 11) {
        console.log("overflow")
    } else {
        a.push(i);
        console.log(a);
    }
};

//display number
var displayNumber = function() {
    var x = a.join('');
    x = x.replace(/^0+/, '');
    if (x === "") {
        x = "0";
    };
    outputEl.textContent = x;
    console.log(a);
}
//get rid of 0 at beginning of array
var ifZero = function() {
    if (a[0] === "0") {
        a.shift("0");
    } if (a[0] === "-" && a[1] === "0") {
        a.splice(1,1);
    }
}

// number buttons
zeroEl.addEventListener('click', function handleClick(event) {
    event
    i="0";
    ifZero();
    pushNumber();
    displayNumber();
    console.log(i);
})
oneEl.addEventListener('click', function handleClick(event) {
    event
    i="1";
    ifZero();
    pushNumber();
    displayNumber();
    console.log(i);
})
twoEl.addEventListener('click', function handleClick(event) {
    event
    i="2";
    ifZero();
    pushNumber();
    displayNumber();
    console.log(i);
})
threeEl.addEventListener('click', function handleClick(event) {
    event
    i="3";
    ifZero();
    pushNumber();
    displayNumber();
    console.log(i);
})
fourEl.addEventListener('click', function handleClick(event) {
    event
    i="4";
    ifZero();
    pushNumber();
    displayNumber();
    console.log(i);

})
fiveEl.addEventListener('click', function handleClick(event) {
    event
    i="5";
    ifZero();
    pushNumber();
    displayNumber();
    console.log(i);
})
sixEl.addEventListener('click', function handleClick(event) {
    event
    i="6";
    ifZero();
    pushNumber();
    displayNumber();
    console.log(i);
})
sevenEl.addEventListener('click', function handleClick(event) {
    event
    i="7";
    ifZero();
    pushNumber();
    displayNumber();
    console.log(i);
})
eightEl.addEventListener('click', function handleClick(event) {
    event
    i="8";
    ifZero();
    pushNumber();
    displayNumber();
    console.log(i)
})
nineEl.addEventListener('click', function handleClick(event) {
    event
    i="9";
    ifZero();
    pushNumber();
    displayNumber();
    console.log(i)
})
decimalEl.addEventListener('click', function handleClick(event) {
    event
    i=".";
    if (a.includes(".")) {
        console.log(i);
    } else {
        ifZero();
        pushNumber();
        var x = a.join('');
        outputEl.textContent = x;
        console.log(a);
        console.log(i)
    }
})



// operator buttons
divideEl.addEventListener('click', function handleClick(event) {
    event
    console.log("divide");
    var x = a.join('');
    b.push(x);
    b.push("/");
    a = [];
    console.log(b);
})
multiplyEl.addEventListener('click', function handleClick(event) {
    event
    console.log("multiply");
    var x = a.join('');
    b.push(x);
    b.push("*");
    a = [];
    console.log(b);
})
minusEl.addEventListener('click', function handleClick(event) {
    event
    console.log("minus");
    var x = a.join('');
    b.push(x);
    b.push("-");
    a = [];
    console.log(b);
})
plusEl.addEventListener('click', function handleClick(event) {
    event
    console.log("plus");
    var x = a.join('');
    b.push(x);
    b.push("+");
    a = [];
    console.log(b);
})
equalEl.addEventListener('click', function handleClick(event) {
    event
    console.log("equal")
    var x = a.join('');
    b.push(x);
    var y = b.join('');
    var z = eval(y);
    outputEl.textContent = z;
    a = [];
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
    console.log("plus-minus")
})
percentageEl.addEventListener('click', function handleClick(event) {
    event
    console.log("percentage")
    var x = a.join('');
    a = ["0"];
    var x = x * 0.01;
    outputEl.textContent = x;

})