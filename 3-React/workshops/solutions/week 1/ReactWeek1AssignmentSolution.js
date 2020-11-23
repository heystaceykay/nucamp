class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        let foundStudent = this.students.filter(student => student.email === studentToRegister.email);
        if (foundStudent.length === 0) {
            bootcamp.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals.`);
        } else {
            console.log("Student is already registered!")
        }
        return this.students
    }
}

class BootcampIncludes {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        const emailArray = this.students.map(student => student.email);
        if (!emailArray.includes(studentToRegister.email)) {
            bootcamp.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals.`);
        } else {
            console.log("Student is already registered!")
        }
        return this.students
    }
}

const student = new Student("gordon", "email@email.com", "washington");
const student2 = new Student("gordony", "email@email.com", "washington");

const bootcamp = new Bootcamp("nucamp", "advanced");
// const bootcamp = new BootcampIncludes("nucamp", "advanced");

bootcamp.registerStudent(student);
bootcamp.registerStudent(student2);


