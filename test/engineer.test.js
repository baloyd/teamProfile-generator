const Engineer = require("../lib/engineer.js");

describe ("getGithub()", ()=>{
    it("should retrieve Github data", ()=>{
       const github = "github"
       const engineer = new Engineer ("name", "id", "email", github);
       expect(engineer.getGithub()).toBe(github);
    })
})

describe ("getRole()", ()=>{
    it("should return Engineer in role data", ()=>{
        const role = "Engineer"
        const engineer = new Engineer ("name", "id", "email", "github")
        expect(engineer.getRole()).toBe(role)
    })
})