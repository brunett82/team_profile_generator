const path = require("path");
const fs = require("fs");

const distroDir = path.resolve(__dirname, "../distro");

const render = employees => {
    const html = [];

    html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );
    html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );

    return renderMain(html.join(""));

};

const renderManager = manager => {
    let output = fs.readFileSync(path.resolve(distroDir, "manager.html"), "utf8");
    output = replacePlaceholders(output, "name", manager.getName());
    output = replacePlaceholders(output, "role", manager.getRole());
    output = replacePlaceholders(output, "email", manager.getEmail());
    output = replacePlaceholders(output, "id", manager.getId());
    output = replacePlaceholders(output, "officeNumber", manager.getOfficeNumber());
    return output;
};

const renderEngineer = engineer => {
    let output = fs.readFileSync(path.resolve(distroDir, "engineer.html"), "utf8");
    output = replacePlaceholders(output, "name", engineer.getName());
    output = replacePlaceholders(output, "role", engineer.getRole());
    output = replacePlaceholders(output, "email", engineer.getEmail());
    output = replacePlaceholders(output, "id", engineer.getId());
    output = replacePlaceholders(output, "github", engineer.getGithub());
    return output;
};

const renderIntern = intern => {
    let output = fs.readFileSync(path.resolve(distroDir, "intern.html"), "utf8");
    output = replacePlaceholders(output, "name", intern.getName());
    output = replacePlaceholders(output, "role", intern.getRole());
    output = replacePlaceholders(output, "email", intern.getEmail());
    output = replacePlaceholders(output, "id", intern.getId());
    output = replacePlaceholders(output, "school", intern.getSchool());
    return output;
};

const renderMain = html => {
    const output = fs.readFileSync(path.resolve(distroDir, "main.html"), "utf8");
    return replacePlaceholders(output, "team", html);
};

const replacePlaceholders = (output, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return output.replace(pattern, value);
};

module.exports = render;