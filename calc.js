// getting elements by id
inputbox = document.getElementById("inputnum")
number1 = document.getElementById("number1")
number2 = document.getElementById("number2")
number3 = document.getElementById("number3")
number4 = document.getElementById("number4")
number5 = document.getElementById("number5")
number6 = document.getElementById("number6")
number7 = document.getElementById("number7")
number8 = document.getElementById("number8")
number9 = document.getElementById("number9")
number0 = document.getElementById("number0")
clear = document.getElementById("clear")
minus = document.getElementById("minus")
percent = document.getElementById("percent")
div = document.getElementById("div")
mul =document.getElementById("mul")
sub =document.getElementById("sub")
add = document.getElementById("add")
dot = document.getElementById("dot")
del = document.getElementById("del")
res= document.getElementById("res")

// functions

function addnumber(num)
{
     //console.log(num)
    storedtext =  document.getElementById("inputnum").value;
    document.getElementById("inputnum").value = storedtext + num
}

function clear1()
{
    document.getElementById("inputnum").value = ""
}

function minus1()
{
    storedtext =  document.getElementById("inputnum").value;
    document.getElementById("inputnum").value = "-" + storedtext
}

function percent1()
{
    storedtext =  document.getElementById("inputnum").value;
    document.getElementById("inputnum").value = storedtext + " % "
    result1()
}

function div1()
{
    constant_run()
    storedtext =  document.getElementById("inputnum").value;
    document.getElementById("inputnum").value = storedtext + " / "
}

function mul1()
{
    constant_run()
    storedtext =  document.getElementById("inputnum").value;
    document.getElementById("inputnum").value = storedtext + " x "
}

function sub1()
{
    constant_run()
    storedtext =  document.getElementById("inputnum").value;
    document.getElementById("inputnum").value = storedtext + " - "
}

function add1()
{
    constant_run()
    storedtext =  document.getElementById("inputnum").value;
    document.getElementById("inputnum").value = storedtext + " + "
}

function dot1()
{
    storedtext =  document.getElementById("inputnum").value;
    document.getElementById("inputnum").value = storedtext + "."
}

function result1()
{
    storedtext =  document.getElementById("inputnum").value;
    const myarray = storedtext.split(" ");
    if (myarray[1] == "+")
    {
        sum = parseFloat(myarray[0]) + parseFloat(myarray[2]);
        document.getElementById("inputnum").value = sum

    }
    else if (myarray[1] == "-")
    {
        diff = parseFloat(myarray[0]) - parseFloat(myarray[2]);
        document.getElementById("inputnum").value = diff
    }
    else if (myarray[1] == "/")
    {
        div2 = parseFloat(myarray[0]) / parseFloat(myarray[2]);
        document.getElementById("inputnum").value = div2
    }
    else if (myarray[1] == "x")
    {
        mul2 = parseFloat(myarray[0]) * parseFloat(myarray[2]);
        document.getElementById("inputnum").value = mul2
    }
    else if (myarray[1] == "%")
    {
        per = parseFloat(myarray[0]) / 100
        document.getElementById("inputnum").value = per
    }
    else
    {
        document.getElementById("inputnum").value = "Invalid operation"
    }
}
/* This function is used for performimg operation for every 2 elements and returning the ans.
ex : 2 + 3 x 4
here first 2 +3 is calc as this func checks continously to perform when to operands are found
*/
function constant_run()
{
    storedtext =  document.getElementById("inputnum").value;
    const myarray = storedtext.split(" ");
    if (myarray.length == 3 && myarray[myarray.length-1] != "")
    {
    result1()
    }
    // setTimeout(constant_run, 10000)
}
constant_run()

 //when del button pressed this function is called as this is added in event listener of del button
function dele1()
{
    storedtext = document.getElementById("inputnum").value;
    string1 =new String(storedtext);
    const arr = string1.split('');
    console.log(arr)
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === " ") {
            arr.splice(i, 1);
        }
    }
    console.log(arr)
    let popped = arr.pop();
    const withoutCommas = arr.join('');
    document.getElementById("inputnum").value = withoutCommas;
}
// listeners

clear.addEventListener("click", clear1);
minus.addEventListener("click", minus1);
percent.addEventListener("click", percent1);
div.addEventListener("click", div1);
sub.addEventListener("click", sub1);
add.addEventListener("click", add1);
mul.addEventListener("click", mul1);
dot.addEventListener("click", dot1);
del.addEventListener("click", dele1);
res.addEventListener("click" , result1);

number0.addEventListener("click", function()
{
    addnumber("0")
}, false);
number1.addEventListener("click", function()
{
    addnumber("1")
}, false);
number2.addEventListener("click", function()
{
    addnumber("2")
}, false);
number3.addEventListener("click", function()
{
    addnumber("3")
}, false);
number4.addEventListener("click", function()
{
    addnumber("4")
}, false);
number5.addEventListener("click", function()
{
    addnumber("5")
}, false);
number6.addEventListener("click", function()
{
    addnumber("6")
}, false);
number7.addEventListener("click", function()
{
    addnumber("7")
}, false);
number8.addEventListener("click", function()
{
    addnumber("8")
}, false);
number9.addEventListener("click", function()
{
    addnumber("9")
}, false);
