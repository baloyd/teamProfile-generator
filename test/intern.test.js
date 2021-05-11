const Intern = require("../lib/intern.js");

describe ("getSchool()", ()=>{
    it("should retrieve Github data", ()=>{
       const school = "school"
       const intern = new Intern ("name", "id", "email", school);
       expect(intern.getSchool()).toBe(school);
    })
})

describe ("getRole()", ()=>{
    it("should return Intern in role data", ()=>{
        const role = "Intern"
        const intern = new Intern ("name", "id", "email", "school")
        expect(intern.getRole()).toBe(role)
    })
})