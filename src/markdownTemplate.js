const listMaker = (string) => {
  let hasListMarker = string.includes('/');
  if (!hasListMarker) {
    return string;
  }
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
  let { install } = data;
  if (install) {
    let installList = listMaker(install);
    return `## Installation\n${installList}`;
  }
};

const usageSection = data => {
  let { usage } = data;
  if (usage) {
    let usageList = listMaker(usage);
    return`## Usage\n${usageList}`;
  }
};

const creditsSection = data => {
  let { collab } = data;
  if (collab) {
    let collabList = listMaker(collab);
    return `## Credits\n${collabList}`;
  }
};

// If there is no license, return an empty string
const licenseSection = data => {
  let { license } = data;
  if (license)
    if(license === 'none') {
      return;
    }
   return `## License\nLicensed under the ${license}.`
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
