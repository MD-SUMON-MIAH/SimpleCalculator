function clicked() {

    let a = parseInt(document.getElementById('No1').value);
    let b = parseInt(document.getElementById('No2').value);
    let sum = a + b;
    let sub = a - b;
    let mul = a * b;
    let div = a / b;
    console.log(a);
    console.log('Clicked');

    document.getElementById('sum').innerHTML = 'Summation : ' + sum;
    document.getElementById('sub').innerHTML = 'Subtraction : ' + sub;
    document.getElementById('mult').innerHTML = 'Multiplication : ' + mul;
    document.getElementById('divi').innerHTML = 'Division : ' + div;

}