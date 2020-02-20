function generateMarkdown(data) {
  return `
# ${data.projectName}

## Description 

${data.description}

## Installation

${data.depCom}

## Usage 

${data.needToKnow}

## Credits

${data.github}
----------------List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.



## License

${data.license}  vvprobably need to do something with this down there.

---


---------## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## Contributing

${data.contribute}

## Tests

${data.testCom}

}

module.exports = generateMarkdown;
