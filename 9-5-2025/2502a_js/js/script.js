function addition() {
    var fv = parseInt(document.getElementById('firstval').value);
    var sv = parseInt(document.getElementById('secondval').value);
    var res = document.getElementById('result');
    

    var r = parseInt(fv+sv);
    res.innerText = "The Result is "+r
}

function subtract()
{
    var firstval = parseInt(document.getElementById('firstval').value);
    var seccondval = parseInt(document.getElementById('secondval').value);
    var result = document.getElementById('result');

    var r = parseInt(seccondval-firstval);
    result.innerText = "The Subtraction Result is "+r
}

function multiply() {

    var fvm = parseInt(document.getElementById('firstval').value);
    var svm = parseInt(document.getElementById('secondval').value);
    var resM = document.getElementById('result');

    var r = parseInt(fvm*svm);
    resM.innerText = "The Multipycation Result is "+r
}

function div() {

    var fvd = parseInt(document.getElementById('firstval').value);
    var svd = parseInt(document.getElementById('secondval').value);
    var resd = document.getElementById('result');

    var r = parseInt(fvd*svd);
    resd.innerText = "The divided Result is "+r
}