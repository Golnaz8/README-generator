// A function that returns a license badge based on which license is passed in
// If there is no license, It returns an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return '';
    }
  
    const licenseBadges = {
      'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
      'GPL-3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
      'Apache-2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      'MPL-2.0': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
      'ISC': 'https://img.shields.io/badge/License-ISC-blue.svg',
    };
  
    return `![License](${licenseBadges[license]})`;
  }
  
  // A function that returns the license link
  // If there is no license, It returns an empty string
  function renderLicenseLink(license) {
    if (!license) {
      return '';
    }
  
    const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'GPL-3.0': 'https://www.gnu.org/licenses/gpl-3.0',
      'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
      'MPL-2.0': 'https://www.mozilla.org/en-US/MPL/2.0/',
      'ISC': 'https://opensource.org/licenses/ISC',
    };
  
    return `[License](${licenseLinks[license]})`;
  }
  
  // A function that returns the license section of README
  // If there is no license, It returns an empty string
  function renderLicenseSection(license) {
    if (!license) {
      return '';
    }
  
    return `
  ## License
  
  This project is licensed under the ${license} License. ${renderLicenseLink(license)}
  `;
  }
  
  // A function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  ${data.tableOfContents.join('\n')}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}

  ## tests
  ${data.tests}

  ## Questions
  If you have any question, feel free to contact through this email address:
  ${data.questions}
  `;
  }
  
  //to export generateMarkdown and use its data in another js file
 module.exports = {
    generateMarkdown,
  };
  