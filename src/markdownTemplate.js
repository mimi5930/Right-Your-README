const listMaker = string => {
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

const listAndLinkMaker = string => {
  let text = string;
    var textArr = text.split('*');
    let arrLength = textArr.length;
    var list = '';
    for (i = 0; i < arrLength; i++) {
      let stepText = textArr[i].trim()
      stepText = `[${stepText}](https://github.com/${stepText})`;
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
  if (install.includes('*')) {
    install = listMaker(install);
  }
  return `## Installation\n${install}`;
};

const usageSection = data => {
  var { usage } = data;
    if (usage.includes('*')) {
      usage = listMaker(usage);
    }
    return`## Usage\n${usage}`;
};

const creditsSection = data => {
  let { credits } = data;
    if (credits.includes('*')) {
      credits = listAndLinkMaker(credits);
    }
    
    return `## Credits\nAdditional contributors for this project:\n${credits}`;
};

const additionalSources = data => {
  let { sources } = data;
  if (sources.includes('*')) {
    sources = listMaker(sources);
  }
  return `### Additional Sources\n${sources}`;
}

// add license Section
const licenseSection = data => {
  let { license } = data;
    
  if(license === 'none') {
    return '';
  }

  let link = '';

  switch (license) {
    case 'MIT License':
      link = 'https://choosealicense.com/licenses/mit/';
      break;
    case 'GNU GPLv3 License':
      link = 'https://choosealicense.com/licenses/gpl-3.0/';
      break;
    case 'Apache License 2.0':
      link = 'https://choosealicense.com/licenses/apache-2.0/';
      break;
    case 'ISC License':
      link = 'https://choosealicense.com/licenses/isc/';
      break;
    }

   return `## License\nLicensed under the [${license}](${link}).`
}

// Test Section
const testSection = data => {
  if (tests.includes('*')) {
    tests = listMaker(tests);
  }
  return `## Test\n${tests}`;
}

// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let { license } = data;
  if (license === 'none') {
    return false;
  }
  let badgetitle = license.replace(' License', '');
  var badge = `![license](https://img.shields.io/badge/license-${badgetitle}-green)`;
  return badge;
}

const contributingSection = data => {
  let { confirmContributing, contributeOptions, customContribute } = data;
  if (confirmContributing) {
    if (contributeOptions) {
      return `## Contributing\nFor information about contributing to this project, please read through this agreement.\n- [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)`;
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
  let content = `## Questions\nTo reach out with any questions, please go to my [GitHub](https://github.com/${gitName}) page or email me at ${email}`
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
  let { description, install, usage, credits, sources, license, tests } = data;

  let markdownText = `${titleSection(data, renderLicenseBadge(data))}\n## Description\n${description}\n## Table of Contents\n${generateTable(data)}`;
  if(install) {
    markdownText = markdownText + `\n${installSection(data)}`;
  }
  if(usage) {
    markdownText = markdownText + `\n${usageSection(data)}`;
  }
  if(credits) {
    markdownText = markdownText + `\n${creditsSection(data)}`;
  }
  if(sources) {
    markdownText = markdownText + `\n${additionalSources(data)}`;
  }
  if(license) {
    markdownText = markdownText + `\n${licenseSection(data)}`;
  }
  markdownText = markdownText + `\n${contributingSection(data)}`;
  if(tests) {
    markdownText = markdownText + `\n${testSection(data)}`;
  }
  markdownText = markdownText + `\n${questionsSection(data)}`;
  return markdownText;
};

module.exports = markdownContent;
