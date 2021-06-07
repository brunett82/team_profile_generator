const path = require("path");
const fs = require("fs");

const distroDir = path.resolve(__dirname, "../distro");

const render = employees => {
    const html = [];

    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => pubMgr(manager))
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => pubEng(engineer))
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => pubInt(intern))
    );

    return pubIndex(html.join(""));

};

const pubMgr = manager => {
    let output = fs.readFileSync(path.resolve(distroDir, "mgr.html"), "utf8");
    output = temp(output, "name", manager.getName());
    output = temp(output, "role", manager.getRole());
    output = temp(output, "email", manager.getEmail());
    output = temp(output, "id", manager.getId());
    output = temp(output, "officeNumber", manager.getOfficeNumber());
    return output;
};

const pubEng = engineer => {
    let output = fs.readFileSync(path.resolve(distroDir, "eng.html"), "utf8");
    output = temp(output, "name", engineer.getName());
    output = temp(output, "role", engineer.getRole());
    output = temp(output, "email", engineer.getEmail());
    output = temp(output, "id", engineer.getId());
    output = temp(output, "github", engineer.getGithub());
    return output;
};

const pubInt = intern => {
    let output = fs.readFileSync(path.resolve(distroDir, "intern.html"), "utf8");
    output = temp(output, "name", intern.getName());
    output = temp(output, "role", intern.getRole());
    output = temp(output, "email", intern.getEmail());
    output = temp(output, "id", intern.getId());
    output = temp(output, "school", intern.getSchool());
    return output;
};

const pubIndex = html => {
    const output = fs.readFileSync(path.resolve(distroDir, "index.html"), "utf8");
    return temp(output, "team", html);
};

const temp = (output, holder, value) => {
    const pattern = new RegExp("{{ " + holder + " }}", "gm");
    return output.replace(pattern, value);
};

module.exports = render;