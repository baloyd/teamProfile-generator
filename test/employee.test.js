const Employee = require("../lib/employee.js");


    describe("Initialization", ()=>{
       it("should create a new instance of Employee",()=>{

        const employee = new Employee();
        expect(typeof(employee)).toBe("object"); 
       })

      
    })

    
describe("getName()", ()=>{
    it("should retrieve name data", ()=>{
        const name = "John"
        const employee = new Employee(name, "123", "email");
        expect(employee.getName()).toBe(name);
    })
})

describe("getId()", ()=>{
    it("should retrieve id data", ()=>{
        const id = "123"
        const employee = new Employee("name", id, "email");
        expect(employee.getId()).toBe(id);
    })
})

describe("getEmail()", ()=>{
    it("should retrieve email data", ()=>{
        const email= "JohnDoe@gmail.com"
        const employee = new Employee("name", "id", email);
        expect(employee.getEmail()).toBe(email);
    })
})

describe("getRole()", ()=>{
    it("should return Employee", ()=>{
        const role = "Employee";
        const employee= new Employee ("name", "id", "email");
        expect(employee.getRole()).toBe(role);
    })
})