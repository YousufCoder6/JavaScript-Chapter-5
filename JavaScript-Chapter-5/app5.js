// ==========================================
// CHAPTER 5: MATH EXPRESSIONS SOLUTIONS
// ==========================================

function runQ1() {
    // Q1: Add two numbers and show in browser
    var num1 = 3;
    var num2 = 5;
    var sum = num1 + num2;

    document.write("<h1>Chapter 5 - Q1 Output</h1>");
    document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");
    document.write("<a href='chapter5.html'>Go Back</a>");
}

function runQ2() {
    // Q2: Subtraction, multiplication, division, and modulus
    var num1 = 10;
    var num2 = 3;
    
    var sub = num1 - num2;
    var mul = num1 * num2;
    var div = num1 / num2;
    var mod = num1 % num2;

    document.write("<h1>Chapter 5 - Q2 Output</h1>");
    document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>");
    document.write("Multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>");
    document.write("Division of " + num1 + " and " + num2 + " is " + div + "<br>");
    document.write("Modulus of " + num1 + " and " + num2 + " is " + mod + "<br><br>");
    document.write("<a href='chapter5.html'>Go Back</a>");
}

function runQ3() {
    // Q3: JS Mathematic Expressions step-by-step
    var myVar;
    var step1 = "Value after variable declaration is: " + myVar + "<br>";
    
    myVar = 5;
    var step2 = "Initial value: " + myVar + "<br>";
    
    myVar++;
    var step3 = "Value after increment is: " + myVar + "<br>";
    
    myVar = myVar + 7;
    var step4 = "Value after addition is: " + myVar + "<br>";
    
    myVar--;
    var step5 = "Value after decrement is: " + myVar + "<br>";
    
    var remainder = myVar % 3;
    var step6 = "The remainder is: " + remainder + "<br>";

    document.write("<h1>Chapter 5 - Q3 Output</h1>");
    document.write(step1 + step2 + step3 + step4 + step5 + step6 + "<br>");
    document.write("<a href='chapter5.html'>Go Back</a>");
}

function runQ4() {
    // Q4: Movie ticket cost calculation
    var ticketPrice = 600;
    var totalCost = ticketPrice * 5;

    document.write("<h1>Chapter 5 - Q4 Output</h1>");
    document.write("Total cost to buy 5 tickets to a movie is <b>" + totalCost + " PKR</b><br><br>");
    document.write("<a href='chapter5.html'>Go Back</a>");
}

function runQ5() {
    // Q5: Multiplication table of 4
    var tableNum = 4;
    document.write("<h1>Chapter 5 - Q5 Output</h1>");
    document.write("<h2>Table of " + tableNum + "</h2>");
    for (var i = 1; i <= 10; i++) {
        document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
    }
    document.write("<br><a href='chapter5.html'>Go Back</a>");
}

function runQ6() {
    // Q6: Temperature Converter
    var celsius = 25;
    var fahrenheitFromC = (celsius * 9/5) + 32;

    var fahrenheit = 70;
    var celsiusFromF = (fahrenheit - 32) * 5/9;

    document.write("<h1>Chapter 5 - Q6 Output</h1>");
    document.write(celsius + "°C is " + fahrenheitFromC + "°F<br>");
    document.write(fahrenheit + "°F is " + celsiusFromF.toFixed(2) + "°C<br><br>");
    document.write("<a href='chapter5.html'>Go Back</a>");
}

function runQ7() {
    // Q7: Shopping Cart Checkout System
    var item1Price = 650;
    var item1Qty = 3;
    var item2Price = 100;
    var item2Qty = 7;
    var shippingCharges = 100;

    var totalCost = (item1Price * item1Qty) + (item2Price * item2Qty) + shippingCharges;

    document.write("<h1>Chapter 5 - Q7 Output</h1>");
    document.write("Price of item 1 is " + item1Price + "<br>");
    document.write("Quantity of item 1 is " + item1Qty + "<br>");
    document.write("Price of item 2 is " + item2Price + "<br>");
    document.write("Quantity of item 2 is " + item2Qty + "<br>");
    document.write("Shipping Charges " + shippingCharges + "<br><br>");
    document.write("<b>Total cost of your order is " + totalCost + " PKR</b><br><br>");
    document.write("<a href='chapter5.html'>Go Back</a>");
}