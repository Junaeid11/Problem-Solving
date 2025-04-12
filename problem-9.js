const students = [
    { name: "Alice", grades: [85, 90, 78] },
    { name: "Bob", grades: [72, 88, 95] },
    { name: "Charlie", grades: [93, 91, 89] },
    { name: "Diana", grades: [68, 74, 80] },
    { name: "Ethan", grades: [100, 98, 99] }
  ];
  
  function AverageArray(student) {
    return student.map(data => {
        const average = data.grades.reduce((sum, grade) => sum + grade, 0) / data.grades.length;
        return {
          name: data.name,
          average: average
        };
      }).sort((a, b) => b.average - a.average); 
    
  }
  
  const result = AverageArray(students);
  console.log(result);
  