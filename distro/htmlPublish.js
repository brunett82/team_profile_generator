const path = require("path");
const fs = require("fs");

const distroDir = path.resolve(__dirname, '../distro');

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
  let template = fs.readFileSync(path.resolve(distroDir, "mgr.html"), "utf8");
  template = update(template, "name", manager.getName());
  template = update(template, "role", manager.getRole());
  template = update(template, "email", manager.getEmail());
  template = update(template, "id", manager.getId());
  template = update(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(distroDir, "eng.html"), "utf8");
  template = update(template, "name", engineer.getName());
  template = update(template, "role", engineer.getRole());
  template = update(template, "email", engineer.getEmail());
  template = update(template, "id", engineer.getId());
  template = update(template, "github", engineer.getGitHub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(distroDir, "intern.html"), "utf8");
  template = update(template, "name", intern.getName());
  template = update(template, "role", intern.getRole());
  template = update(template, "email", intern.getEmail());
  template = update(template, "id", intern.getId());
  template = update(template, "school", intern.getSchool());
  return template;
};

const renderMain = html => {
  const template = fs.readFileSync(path.resolve(distroDir, "index.html"), "utf8");
  return update(template, "team", html);
};

const update = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;