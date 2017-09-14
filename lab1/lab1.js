var readline = require('readline');

var value = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu(){
    value.question('Какой средний балл вы хотите узнать? \n 0) Выйти \n 1) Студента по определённому предмету \n 2) Студента \n 3) Группы \n 4) Факультета \n 5) Университета \n', function (answer) {
        switch(answer){
            case "0":
                process.exit(-1);
                break;
            case "1":
                value.question("Введите имя студента \n", function(answer) {
                    var studentName=answer;
                    value.question("Введите имя предмета \n", function(answer) {
                        console.log(bsu.getStudentSubjectAverageScore(studentName, answer));
                        menu();                        
                    });
                });
                break;
            case "2":
                value.question("Введите имя студента \n", function(answer) {
                    console.log(bsu.getStudentAverageScore(answer));
                        menu();     
                });
                break;
            case "3":
                value.question("Введите название группы \n", function(answer) {
                    console.log(bsu.getGroupAverageScore(answer));
                        menu();     
                });
                break;
            case "4":
                value.question("Введите название факультета \n", function(answer) {
                    console.log(bsu.getFacultyAverageScore(answer));
                        menu();     
                });
                break;
            case "5":
                console.log(bsu.getAverageScore(answer));
                menu();
                break;
        }
  
    });
}
menu();
class University{
    constructor(name) {
        this.name = name;
        this.faculties=[];
    }
    addFaculty(faculty) {
        this.faculties.push(faculty);
    }
    getAverageScore(){
        var allFacultiesAvgMarks=[];
        for(var i=0; i<this.faculties.length;i++){
            allFacultiesAvgMarks.push(this.faculties[i].getAverageScore());
        }
        return avg(allFacultiesAvgMarks);
    }
    getFacultyAverageScore(name){
        for(var i=0; i<this.faculties.length;i++){
            if(this.faculties[i].name==name)
                return this.faculties[i].getAverageScore();
                
        }
        return "Такого факультета нет";
    }
    getGroupAverageScore(name){
        for(var i=0; i<this.faculties.length;i++)
            for(var j=0; j<this.faculties[i].groups.length; j++)
                {
                    if(this.faculties[i].groups[j].name==name)
                        return this.faculties[i].groups[j].getAverageScore();
                        
                }
        return "Такой группы нет";
    }
    getStudentAverageScore(name){
        for(var i=0; i<this.faculties.length;i++)
            for(var j=0; j<this.faculties[i].groups.length; j++)
                for(var k=0; k<this.faculties[i].groups[j].students.length; k++)
                {
                    if(this.faculties[i].groups[j].students[k].name==name)
                        return this.faculties[i].groups[j].students[k].getAverageScore();
                        
                }
        return "Такого студента нет";
    }
    getStudentSubjectAverageScore(studentName, subjectName){
        for(var i=0; i<this.faculties.length;i++)
            for(var j=0; j<this.faculties[i].groups.length; j++)
                for(var k=0; k<this.faculties[i].groups[j].students.length; k++)
                {
                    if(this.faculties[i].groups[j].students[k].name==studentName){
                        return this.faculties[i].groups[j].students[k].getSubjectAverageScore(subjectName);
                    }
                }
        return "Такого студента нет";
    }
}
class Faculty{
    constructor(name) {
        this.name = name;
        this.groups=[];
    }
    addGroup(group) {
        this.groups.push(group);
    }
    getAverageScore(){
        var allGroupsAvgMarks=[];
        for(var i=0; i<this.groups.length;i++){
            allGroupsAvgMarks.push(this.groups[i].getAverageScore());
        }
        return avg(allGroupsAvgMarks);
    }
}
class Group{
    constructor(name) {
        this.name = name;
        this.students=[];
    }
    addStudent(student) {
        this.students.push(student);
    }
    getAverageScore(){
        var allStudentsAvgMarks=[];
        for(var i=0; i<this.students.length;i++){
            allStudentsAvgMarks.push(this.students[i].getAverageScore());
        }
        return avg(allStudentsAvgMarks);
    }
}
class Student{
    constructor(name) {
        this.name = name;
        this.subjects={};
    }
    addSubject(subject, marks) {
        this.subjects[subject]=marks;

    }
    getAverageScore(){
        var allSubjetsAvgMarks=[];
        for(var key in this.subjects){
            allSubjetsAvgMarks.push(avg(this.subjects[key]));
        }
        return avg(allSubjetsAvgMarks);
    }
    getSubjectAverageScore(subjectName){
        var subjectAvgMark;
        for(var key in this.subjects){
            if(key==subjectName){
                subjectAvgMark=avg(this.subjects[key]);
            }
        }
        if(!subjectAvgMark){
            return "Студент не изучает заданный предмет";
        }
        else
            return subjectAvgMark;
    }
}


Array.prototype.sum = function() {
    return this.reduce(function(a,b){return a+b;});
};
function avg(arr){
    return (parseFloat((arr.sum() / arr.length).toFixed(1)));
}


var katya=new Student("Екатерина");
    katya.addSubject("Математический анализ", [6,8,9]);
    katya.addSubject("Английский язык", [9,10,3]);

var ira=new Student("Ирина");
    ira.addSubject("Программирование", [1,8,5]);
    ira.addSubject("История", [1,5,3]);

var dima=new Student("Дмитрий");
    dima.addSubject("Литература", [9,5,2]);
    dima.addSubject("Политология", [10,10,6]);


var web=new Group("Веб-программирование");
var mobile=new Group("Мобильные приложения");
var architecture=new Group("Архитектура");
    web.addStudent(katya);
    mobile.addStudent(ira);
    architecture.addStudent(dima);


var mmf=new Faculty("ММФ");   
    mmf.addGroup(web);
    mmf.addGroup(mobile);
var fsk=new Faculty("ФСК");
    fsk.addGroup(architecture);
var bsu=new University("bsu");
    bsu.addFaculty(mmf);
    bsu.addFaculty(fsk);

