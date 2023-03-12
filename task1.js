/*1- Task: Create a Program to Calculate Student Grades

Breakdown:

· Declare two variables for the exam scores, e.g., englishMarks and urduMarks, and assign them values.

· Calculate the average of the two exams using the formula: (englishMarks + urduMarks) / 2

· Use if-else conditionals to determine the student's grade based on the average score.

· For example, if the average score is greater than or equal to 80, assign grade "A", if it is greater than or equal to 70 and less than 80, assign grade "B", and so on until grade "F" for a score below 60.

· Display the grade to the user as output.*/
//Declare two variables for the exam scores, e.g., englishMarks and urduMarks, and assign them values.
var englishMarks = 49;
var urduMarks = 45;
console.log("----------------AVERAGE---------");
//Calculate the average of the two exams using the formula: (englishMarks + urduMarks) / 2
var avg = (englishMarks + urduMarks) / 2;
// if the average score is greater than or equal to 80, assign grade "A", if it is greater than 
//or equal to 70 and less than 80, assign grade "B", and so on until grade "F" for a score below 60.
if (avg > 100 || avg < 0) {
    console.log("INVALIDE RANGE OF AVERAGE");
    console.log("Average : ".concat(avg));
}
else if (avg >= 80 && avg <= 100) {
    console.log("Average : ".concat(avg));
    console.log("GRADE: A");
}
else if (avg >= 70 && avg < 80) {
    console.log("Average : ".concat(avg));
    console.log("GRADE: B");
}
else if (avg >= 60 && avg < 70) {
    console.log("Average : ".concat(avg));
    console.log("GRADE: C");
}
else if (avg >= 50 && avg < 60) {
    console.log("Average : ".concat(avg));
    console.log("GRADE: D");
}
else if (avg >= 40 && avg < 50) {
    console.log("Average : ".concat(avg));
    console.log("GRADE: E");
}
else if (avg >= 30 && avg < 40) {
    console.log("Average : ".concat(avg));
    console.log("GRADE: F");
}
else {
    console.log("Average : ".concat(avg));
    console.log("Grade: F");
    console.log("SORRY try again,you are failed");
}
