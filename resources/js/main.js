function countingCalculator(){
        num1 = document.getElementById("number1000").value;
        num2 = document.getElementById("number500").value;
        num3 = document.getElementById("number200").value;
        num4 = document.getElementById("number100").value;
        num5 = document.getElementById("number50").value;
        num6 = document.getElementById("number20").value;
        num7 = document.getElementById("number10").value;
        num8 = document.getElementById("number5").value;
        num9 = document.getElementById("number2").value;
        num10 = document.getElementById("number1").value;

        document.getElementById("amount1000").innerHTML = 1000 * num1;
        document.getElementById("amount500").innerHTML = 500 * num2;
        document.getElementById("amount200").innerHTML = 200 * num3;
        document.getElementById("amount100").innerHTML = 100 * num4;
        document.getElementById("amount50").innerHTML = 50 * num5;
        document.getElementById("amount20").innerHTML = 20 * num6;
        document.getElementById("amount10").innerHTML = 10 * num7;
        document.getElementById("amount5").innerHTML = 5 * num8;
        document.getElementById("amount2").innerHTML = 2 * num9;
        document.getElementById("amount1").innerHTML = 1 * num10;

        document.getElementById("totalAmount").innerHTML =
        1000 * num1 + 500 * num2 + 
        200 * num3 + 100 * num4 + 
        50 * num5 + 20 * num6 + 
        10 * num7 + 5 * num8 + 
        2 * num9 + 1 * num10;
}
function refreshPage(){
    window.location.reload();
} 
