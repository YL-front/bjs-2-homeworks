function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

 Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [...marks];
  } else {
    this.marks.push(...marks);
  }
}



Student.prototype.getAverage = function () {
  if(!this.marks) {
    return 0;
  }
  let sum = 0;
  let avg = 0;
  for (let i=0; i<this.marks.length; i++) {
    sum += this.marks[i];
  }
  avg = sum/this.marks.length;
  return avg;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

let student1 = new Student("Jane", "female", 16);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage()); 
console.log(student1);

let student2 = new Student("John", "male", 17);
student1.setSubject("Informatics");
student1.addMark(4);
student1.addMark(4);
student1.addMark(5);
console.log(student2.getAverage());  
console.log(student2);

let student3 = new Student("Sammer", "female", 17);
student1.setSubject("Literature");
student1.addMark(5);
student1.addMark(3);
student1.addMark(4);
console.log(student3.getAverage()); 
console.log(student3);

let student4 = new Student("Morty", "male", 15);
student1.setSubject("Geometry");
student1.addMark(3);
student1.addMark(3);
student1.addMark(5);
console.log(student4.getAverage()); 
console.log(student4);
