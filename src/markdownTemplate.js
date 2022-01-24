const listMaker = (string) => {
    let text = string;
    var textArr = text.split('/');
    let arrLength = textArr.length;
    var list = '';
    for (i = 0; i < arrLength; i++) {
      let stepText = textArr[i].trim()
      let newLine = '\n';
      let bullet = '- ';
      stepText = bullet + stepText + newLine;
      list = list += stepText;
    }
    return list;
}

const capitalizeFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const installSection = data => {
  var { install } = data;
  if (install) {
    if (install.includes('/')) {
      install = listMaker(install);
    }
    return `## Installation\n${install}`;
  }
  else {
    return '';
  }
};

const usageSection = data => {
  var { usage } = data;
  if (usage) {
    if (usage.includes('/')) {
      usage = listMaker(usage);
    }
    return`## Usage\n${usage}`;
  }
  else {
    return '';
  }
};

const creditsSection = data => {
  let { collab } = data;
  if (collab) {
    if (collab.includes('/')) {
      collab = listMaker(collab);
    }
    return `## Credits\n${collab}`;
  }
  else {
    return '';
  }
};

// If there is no license, return an empty string
const licenseSection = data => {
  let { license } = data;
  if (license) {
    if(license === 'none') {
      return '';
    }
   return `## License\nLicensed under the ${license}.`
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}


var generateTable = (data) => {
  let tableArr = [];
  let { install, usage, credits, license } = data;

  if (install) {
    tableArr.push('Installation');
  }
  if (usage) {
    tableArr.push('Usage');
  }
  if (credits) {
    tableArr.push('Credits');
  }
  if (license) {
    tableArr.push('License');
  }

  let length = tableArr.length;
  var tableString = '';

  for (i = 0; i < length; i++) {
    let lowerCase = tableArr[i].toLowerCase();
    let content = `* [${tableArr[i]}](#${lowerCase})\n`;
    tableString = tableString += content;
  }
  
  console.log(tableString);
  return tableString;
}


// generates markdown Content with data
var markdownContent = data => {
let title = capitalizeFirst(data.title);

return `
# ${title}

## Descritption
${data.description}

## Table of Contents
${generateTable(data)}

${installSection(data)}

${usageSection(data)}

${creditsSection(data)}

${licenseSection(data)}

`;
};

module.exports = markdownContent;
