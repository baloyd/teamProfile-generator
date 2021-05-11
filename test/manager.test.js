const Manager = require("../lib/manager.js");

describe ("getOfficeNumber()", ()=>{
    it("should retrieve Office number data", ()=>{
       const office = "office"
       const manager = new Manager ("name", "id", "email", office);
       expect(manager.getOfficeNumber()).toBe(office);
    })
})

describe ("getRole()", ()=>{
    it("should return Manager in role data", ()=>{
        const role = "Manager"
        const manager = new Manager ("name", "id", "email", "office")
        expect(manager.getRole()).toBe(role)
    })
})