const Employee = require('../src/employee');

describe('Can create a new object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
})

describe('Can set name', () => {
    it('should set the employee name', () => {
        const name = 'Billy';
        const empName = new Employee(name);
        expect(empName.name).toBe(name);
    }) 
})

describe('Can set id', () => {
    it('should set the employee id', () => {
        const id = 25;
        const empId = new Employee(id);
        expect(empId.id).toBe(id);
    })
})

describe('Can set id', () => {
    it('should set the employee email', () => {
        const email = 'test@gmail.com';
        const empEmail = new Employee(email);
        expect(empEmail.email).toBe(email);
    })
})

describe('Can get name from getNam()', () => {
    it('should get employee name', () => {
        const name = 'Billy';
        const empName = new Employee(name);
        expect(empName.getName()).toBe(name);
    })
})

describe('Can get ID from getID()', () => {
    it('should get employee ID', () => {
        const id = 55;
        const empId = new Employee(id);
        expect(empId.getId()).toBe(id);
    })
})
describe('Can get email from getEmail()', () => {
    it('should get employee email', () => {
        const email = 'test@gmail.com';
        const empEmail = new Employee(email);
        expect(empEmail.getEmail()).toBe(email);
    })
})

describe('Can get role from getRole()', () => {
    it('should get employee role', () => {
        const role = 'employee';
        const empRole = new Employee(role);
        expect(empRole.getRole()).toBe(role);
    })
})