// class Employee{
//     setemployee(eid,name,dept,salary)
//     {
//         this.eid=eid;
//         this.name=name;
//         this.dept=dept;
//         this.salary=salary;
//     }
//     DisplayDetails(){
//         console.log(this.eid,this.name,this.dept,this.salary);
//     }
// }

// var emp=new Employee()
// emp.setemployee(10,"sreya","hr",40000)
// emp.DisplayDetails()

class Employee{
    m1(){
        console.log("inside parent");
    }
}
class Employee extends parent{
    constructor(eid,name,dept,salary){
    super().m1()
        this.eid=eid;
        this.name=name;
        this.dept=dept;
        this.salary=salary;
    }
    DisplayDetails(){
        console.log(this.eid,this.name,this.dept,this.salary);
    }

}
var emp=new Employee(10,"sreya","hr",40000)
emp.DisplayDetails()

