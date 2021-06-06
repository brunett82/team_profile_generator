const Engineer = require('../src/engineer');

describe('Set github name', () => {
    const gitName = 'testUser';
    const eng = new Engineer('name', 5, 'test@gmail.com', gitName);
    expect(eng.github).toBe(gitName);
})

describe('Can get role from getRole()', () => {
    it('should get employee role', () => {
        const role = 'engineer';
        const empRole = new Engineer(role);
        expect(empRole.getRole()).toBe(role);
    })
})

describe('Can get github name from getGitHub', () => {
    it('should get employee GitHub', () => {
        const gitName = 'testUser';
        const engGit = new Engineer(gitName);
        expect(engGit.getGitHub()).toBe(gitName);
    })
})