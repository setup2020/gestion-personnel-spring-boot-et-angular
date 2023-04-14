var fs = require("fs");
var str = `
export const environment = {
    production: true,
    URL_ADMIN: '${process.env.SERVER_API_URL}admin-v1/',
    URL_FRONT:'${process.env.SERVER_API_URL}front-v1/',
    URL_APP:'${process.env.SERVER_API_URL}api/'
};
`;
fs.writeFile("./src/environments/environment.prod.ts", str, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
