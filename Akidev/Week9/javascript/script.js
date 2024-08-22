alert("Hello, World!"); // This is a comment
alert("Hello, Mohamed!"); // This is a comment

var daysInYear = 365.25;
var daysInWeek = 7;
var yearsInLifetime = 80;

var averageNumberOfWeeksInLifetime =
  (daysInYear * yearsInLifetime) / daysInWeek;

alert(
  "Average Number of Weeks in a Lifetime = " +
    averageNumberOfWeeksInLifetime.toFixed(2)
);

var intString = "123";
var integerNumber = parseInt(intString); // The second argument '10' specifies base 10

console.log("Converted Integer:", integerNumber);

var floatString = "123.456";
var floatNumber = parseFloat(floatString);

console.log("Converted Float:", floatNumber);

var amount = 100000;
var highValue;

if (amount > 500000) {
  highValue = true;
} else {
  highValue = false;
}

console.log("highValue:", highValue);
