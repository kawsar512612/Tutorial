let students = [
    {
        id: 1,
        name: "kawsar",
        marks: 60
    },
    {
        id: 2,
        name: "Rahim", 
        marks: 70
    }, 
    {
        id: 3,
        name: "karim",
        marks: 80
    }
];

// Add student 
function addStudent(id, name, marks){
    const newStudent = {id, name, marks};
    students = [...students, newStudent];

    console.log("Student Added");
    console.log(students)
}
addStudent(4, "hasib", 99);


// // Delete Student
// function DeleteStudent(id){
//     students = students.filter(student => student.id !== id);

//     console.log("Student Deleted");
//     console.log(students);
// }

// DeleteStudent(1);

// Search Students
// function searchStudent(name){
//     const result = students.find(
//         student => student.name.toLocaleLowerCase() ===name.toLocaleLowerCase()
//     );
//     if(result){
//         console.log("student found");
//         console.log(result);
//     }else{
//         console.log("Student not found");
//     }
// }
// searchStudent("kawsar");

// Average Marks
// function averageMarks(){
//     let total = 0;

//     for(let student of students){
//         total += student.marks;
//     }

//     const average = total /students.length;
//     console.log(`Average Mark is: ${average}`);
// }
// averageMarks();

//Top Student

function topStudent(){
    let top = students[0];

    for(let student of students){
        if(student.marks > top.marks){
            top = student;
        }
    }

    const {name, marks} = top;

    console.log("Top Student");
    console.log(`name: ${name} || Marks: ${marks}`);
}
topStudent();


// All Student 
function showStudents(){
    students.forEach(student => {
        const {id, name, marks} = student;
        console.log(`ID: ${id} and Name: ${name} and Marks: ${marks}`);
    });
}

showStudents();