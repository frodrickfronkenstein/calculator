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
var pushNumber = function() {
    a.push(i);
    console.log(a);
};

//display number
var displayNumber = function() {
    var b = a.join('');
    b = b.replace(/^0+/, '');
    if (b === "") {
        b = "0";
    };
    outputEl.textContent = b;
    console.log(a);
}

// number buttons
zeroEl.addEventListener('click', function handleClick(event) {
    event
    i="0";
    pushNumber();
    displayNumber();
    console.log(i);
})
oneEl.addEventListener('click', function handleClick(event) {
    event
    i="1";
    pushNumber();
    displayNumber();
    console.log(i);
})
twoEl.addEventListener('click', function handleClick(event) {
    event
    i="2";
    pushNumber();
    displayNumber();
    console.log(i);
})
threeEl.addEventListener('click', function handleClick(event) {
    event
    i="3";
    pushNumber();
    displayNumber();
    console.log(i);
})
fourEl.addEventListener('click', function handleClick(event) {
    event
    i="4";
    pushNumber();
    displayNumber();
    console.log(i);

})
fiveEl.addEventListener('click', function handleClick(event) {
    event
    i="5";
    pushNumber();
    displayNumber();
    console.log(i);
})
sixEl.addEventListener('click', function handleClick(event) {
    event
    i="6";
    pushNumber();
    displayNumber();
    console.log(i);
})
sevenEl.addEventListener('click', function handleClick(event) {
    event
    i="7";
    pushNumber();
    displayNumber();
    console.log(i);
})
eightEl.addEventListener('click', function handleClick(event) {
    event
    i="8";
    pushNumber();
    displayNumber();
    console.log(i)
})
nineEl.addEventListener('click', function handleClick(event) {
    event
    i="9";
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
        pushNumber();
        var b = a.join('');
        b = b.replace(/^0+/, '');
        // if (b === ".") {
        //     b = "0.";
        // };
        outputEl.textContent = b;
        console.log(a);
        console.log(i)
    }
})



// operator buttons
divideEl.addEventListener('click', function handleClick(event) {
    event
    console.log("divide")
})
multiplyEl.addEventListener('click', function handleClick(event) {
    event
    console.log("multiply")
})
minusEl.addEventListener('click', function handleClick(event) {
    event
    console.log("minus")
})
plusEl.addEventListener('click', function handleClick(event) {
    event
    console.log("plus")
})
equalEl.addEventListener('click', function handleClick(event) {
    event
    console.log("equal")
})

//top buttons
acEl.addEventListener('click', function handleClick(event) {
    event
    a = ["0"];
    outputEl.textContent = a
})
plusMinusEl.addEventListener('click', function handleClick(event) {
    event
    console.log("plus-minus")
})
percentageEl.addEventListener('click', function handleClick(event) {
    event
    console.log("percentage")
})