var date = new Date();
var hours = date.getHours();

if (hours >= 6 && hours <= 12) {
    alert('Sabahiniz xeyr');
    document.body.style.backgroundColor = 'darkolivegreen';
}
else if (hours >= 13 && hours <= 18) {
    alert('Gunortaniz xeyr');
    document.body.style.backgroundColor = 'aqua';
}
else if (hours >= 19 && hours <= 23) {
    alert('Axshaminiz xeyr');
    document.body.style.backgroundColor = 'purple';
}
else {
    alert('Geceniz xeyre');
    document.body.style.backgroundColor = 'firebrick';
}


function Toplama() {
    var a = Number(document.getElementById('inp1').value);
    var b = Number(document.getElementById('inp2').value);
    var cem = a + b;
    document.getElementById('result').innerHTML = cem;

}

function Cixma() {
    var a = Number(document.getElementById('inp1').value);
    var b = Number(document.getElementById('inp2').value);
    var minus = a - b;
    document.getElementById('result').innerHTML = minus;

}

function Vurma() {
    var a = Number(document.getElementById('inp1').value);
    var b = Number(document.getElementById('inp2').value);
    var vur = a * b;
    document.getElementById('result').innerHTML = vur;

}

function Bolme() {
    var a = Number(document.getElementById('inp1').value);
    var b = Number(document.getElementById('inp2').value);
    var div = a / b;
    document.getElementById('result').innerHTML = div.toFixed(2);

}
