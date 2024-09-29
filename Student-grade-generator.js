// Initialize the mark variable
let mark = 90; // Set the student's mark to 90

// Determine the grade based on the mark
if (mark > 0 && mark <= 40) {
    console.log("E"); // Grade E for marks between 1 and 40
} else if (mark >= 40 && mark <= 49) {
    console.log("D"); // Grade D for marks between 40 and 49
} else if (mark >= 50 && mark <= 59) { // Changed 49 to 50 for clarity
    console.log("C"); // Grade C for marks between 50 and 59
} else if (mark >= 60 && mark <= 69) {
    console.log("B"); // Grade B for marks between 60 and 69
} else if (mark >= 70 && mark <= 100) {
    console.log("A"); // Grade A for marks between 70 and 100
} else {
    console.log("INVALID INPUT"); // Output for invalid marks (less than 1 or greater than 100)
}
