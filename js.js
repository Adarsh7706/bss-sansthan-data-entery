let marks = []
var obj={}
var c=1
var d=1
var totalMarks
var marks2
function calculateGrades() {
 // Get input values
 const studentName = document.getElementById('studentName').value;
 const subject1 = parseFloat(document.getElementById('subject1').value);
 const subject2 = parseFloat(document.getElementById('subject2').value);
 const subject3 = parseFloat(document.getElementById('subject3').value);
 const subject4 = parseFloat(document.getElementById('subject4').value);
 const subject5 = parseFloat(document.getElementById('subject5').value);
 const subject6 = parseFloat(document.getElementById('subject6').value);
 const subject7 = parseFloat(document.getElementById('subject7').value);

 // Calculate total marks
  const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5 + subject6 + subject7;
  const percentage = (totalMarks*100/175).toFixed(2);

 // Determine the grade
 let grade;
      if (totalMarks >= 170) {
        grade = 'A+';
      } else if (totalMarks >= 160) {
        grade = 'A';
      } else if (totalMarks >= 150) {
        grade = 'B';
      } else if (totalMarks >= 140) {
        grade = 'C';
      }else if (totalMarks >= 130) {
        grade = 'D';
      }
      else{
        grade = 'E';
      }
obj[c++]=totalMarks

  marks.push(totalMarks)
 


  marks2 = marks.sort()
 marks2 = marks2.reverse()
 
 
 
 let box = document.createElement("div")
 box.innerHTML = `Student ${d++}: ${studentName} | Total Marks: ${totalMarks} | Grade: ${grade} | Percentage: ${percentage}<hr style="width:50%;">
 
 `
 let con = document.getElementById("result")
 con.append(box)
 }
