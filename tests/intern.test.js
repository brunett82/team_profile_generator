const Intern = require('../src/intern');

describe('Set school name', () => {
    const schoolName = 'testSchool';
    const int = new Intern('name', 5, 'test@gmail.com', schoolName);
    expect(int.school).toBe(schoolName);
})

describe('Can get role from getRole()', () => {
    it('should get intern role', () => {
        const role = 'intern';
        const intRole = new Intern(role);
        expect(intRole.getRole()).toBe(role);
    })
})

describe('Can get school name from getSchool', () => {
    it('should get intern school', () => {
        const schoolName = 'testSchool';
        const int = new Intern(schoolName);
        expect(int.getSchool()).toBe(schoolName);
    })
})