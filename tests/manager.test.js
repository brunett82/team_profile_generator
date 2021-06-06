const Manager = require('../src/manager');

describe('Set office number', () => {
    const office = 666;
    const mgr = new Manager('name', 5, 'test@gmail.com', office);
    expect(mgr.officeNumber).toBe(office);
})

describe('Can get role from getRole()', () => {
    it('should get manager role', () => {
        const role = 'manager';
        const mgrRole = new Manager(role);
        expect(mgrRole.getRole()).toBe(role);
    })
})

describe('Can get office number from getSchool', () => {
    it('should get manager office number', () => {
        const office = 666;
        const mgr = new Manager(office);
        expect(mgr.getOfficeNumber()).toBe(office);
    })
})