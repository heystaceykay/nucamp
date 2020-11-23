class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name,level,students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {
        if (this.students.filter(student => student.email === studentToRegister.email).length > 0) {
            console.log(`Registering ${student.email} to the ${bootcamp}`);
            return this;
        }
        else {
            this.students = this.students.concat(studentToRegister)
            console.log(`Registering ${studentToRegister.name} to the bootcamp.`)
        }
        
        return this.students;
    };
}