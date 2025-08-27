

let englishMarks = 200;
let urduMarks = 70;

let totalMarks = englishMarks + urduMarks ;

console.log(totalMarks);
 
if (totalMarks > 200){
  document.write("marks are not valid")
}
else if (totalMarks >= 180) {
  document.write("your grade is A+")
} else if (totalMarks >= 160){
  document.write("your grade is A")
} else if (totalMarks >= 140){
  document.write("your grade is B")
} else if (totalMarks >= 120){
  document.write("your grade is C")
} else if (totalMarks >= 100){
  document.write("your grade is D")
} else {
  document.write("your grade is F")
}
