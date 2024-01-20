
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
      const percentage = (totalMarks* 100/ 175);

      // Determine the grade
      let grade;
      if (totalMarks >= 175) {
        grade = 'A+';
      } else if (totalMarks >= 160) {
        grade = 'A';
      } else if (totalMarks >= 150) {
        grade = 'B';
      } else if (totalMarks >= 140) {
        grade = 'C';
      }else if (totalMarks >= 130) {
        grade = 'D';
      else {
        grade = 'E';
      }
      let box = document.createElement("div")
      box.innerHTML = `Student: ${studentName} | Total Marks: ${totalMarks} | Grade: ${grade} | Percentage:${percentage}<hr style="width:50%;">`
      let con = document.getElementById("result")
      con.append(box)

      // Save data to localStorage
      /*const studentData = {
        studentName,
        totalMarks,
        grade,
        position: Math.floor(Math.random() * 10) + 1
      };

      // Retrieve existing data from localStorage
      const existingData = JSON.parse(localStorage.getItem('studentData')) || [];

      // Add the new data to the existing data
      existingData.push(studentData);

      // Save the updated data back to localStorage
      localStorage.setItem('studentData', JSON.stringify(existingData));

      // Display the result
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = Student: ${studentName} | Total Marks: ${totalMarks} | Grade: ${grade} | Position in Class: ${studentData.position};*/
    }
  
  
