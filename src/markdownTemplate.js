const validateHeaders = (headers) => {
  const { install, usage } = headers;
  hasInstall = true;
  hasUsage = true;
  hasCredits = true;

  if (install === '') {
    var hasInstall = false;
  }
  if (usage === '') {
    var hasUsage = false;
  }
  if (headers.collabConfirm === false) {
    var hasCredits = false;
  }
  return [hasInstall, hasUsage, hasCredits];
}


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

var generateTable = (install, usage, credits) => {
  var tableArr = [];

  if (install) {
    tableArr.push('Installation');
  }
  if (usage) {
    tableArr.push('Usage');
  }
  if (credits) {
    tableArr.push('Credits');
  }
  tableArr.push('Liscense');

  let length = tableArr.length;
  var tableString = '';

  for (i = 0; i < length; i++) {
    let lowerCase = tableArr[i].toLowerCase();
    let content = `* [${tableArr[i]}](#${lowerCase})\n`;
    tableString = tableString += content;
  }
  
  return tableString;
}


// generates markdown Content with data
var markdownContent = data => {
// validate existence of certain data
[hasCredits, hasUsage, hasInstall] = validateHeaders(data);

return `
# ${data.title}

## Descritption
${data.description}

## Table of Contents
${generateTable(hasInstall, hasUsage, hasCredits)}


`;
};

module.exports = markdownContent;
