const listMaker = (string) => {
    let text = string;
    var textArr = text.split('*');
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

const titleSection = (data, badge) => {
  let { title } = data;
  
  const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } 

  capitalizeFirst(title);

  return `# ${title}\n${badge}`;
}


const installSection = data => {
  var { install } = data;
  if (install) {
    if (install.includes('*')) {
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
    if (usage.includes('*')) {
      usage = listMaker(usage);
    }
    return`## Usage\n${usage}`;
  }
  else {
    return '';
  }
};

// TODO: Add github User links with input data
const creditsSection = data => {
  let { credits } = data;
  if (credits) {
    if (credits.includes('*')) {
      credits = listMaker(credits);
    }
    return `## Credits\n${credits}\n`;
  }
  else {
    return '';
  }
};

const additionalSources = data => {
  let { sources } = data;
  if (sources) {
    if (sources.includes('*')) {
      sources = listMaker(sources);
    }
    return `### Additional Sources\n${sources}`;
  }
  else {
    return '';
  }
}

// If there is no license, return an empty string
// TODO: add links to license;
const licenseSection = data => {
  let { license } = data;
  if (license) {
    if(license === 'none') {
      return '';
    }
   return `## License\nLicensed under the ${license}.`
  }
}

// Test Section
const testSection = data => {
  let { tests } = data;
  if (tests) {
    if (tests.includes('*')) {
      tests = listMaker(tests);
    }
    return `## Test\n${tests}`;
  }
  else {
    return '';
  }
}

// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let { license } = data;
  if (license === 'none') {
    return false;
  }
  let badgetitle = license.replace(' License', '');
  var badge = `![license](https://img.shields.io/badge/license-${badgetitle}-green)`;
  console.log(badge);
  return badge;
}

const contributingSection = data => {
  let { confirmContributing, contributeOptions, customContribute } = data;
  if (confirmContributing) {
    if (contributeOptions) {
      return `## Contributing\n- [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)`;
    }
    else {
      if (customContribute.includes('*')) {
        customContribute = listMaker(customContribute);
      }
      return `## Contributing\n${customContribute}`;
    }
  } else {
    return '';
  }
}

// Questions Section
const questionsSection = data => {
  let { email, gitName } = data;
  let content = `
  ## Questions
  To reach out with any questions, please go to my [GitHub](https://github.com/${gitName}) page or email me at ${email}.
  `
  return content;
}

var generateTable = (data) => {
  let tableArr = [];
  let { install, usage, credits, license, confirmContributing, tests } = data;

  const pushToArray = (dataInput, title) => {
    if(dataInput) {
      tableArr.push(title);
    }
    else {
      return;
    }
  }

  // validate and push different sections to the array
  pushToArray(install, 'Installation');
  pushToArray(usage, 'Usage');
  pushToArray(credits, 'Credits');
  pushToArray(license, 'License');
  pushToArray(confirmContributing, 'Contributing');
  pushToArray(tests, 'Tests');

  var tableString = '';

  for (i = 0; i < tableArr.length; i++) {
    let lowerCase = tableArr[i].toLowerCase();
    let content = `* [${tableArr[i]}](#${lowerCase})\n`;
    tableString = tableString += content;
  }
  
  // add questions section
  let questions = '* [Questions](#questions)';
  tableString = tableString + questions;

  return tableString;
}


// generates markdown Content with data
var markdownContent = data => {

//  TODO: Refactor to get rid of empty spaces
return `
${titleSection(data, renderLicenseBadge(data))}

## Descritption
${data.description}

## Table of Contents
${generateTable(data)}

${installSection(data)}

${usageSection(data)}

${creditsSection(data)}
${additionalSources(data)}

${licenseSection(data)}

${contributingSection(data)}

${testSection(data)}

${questionsSection(data)}
`;
};

module.exports = markdownContent;
