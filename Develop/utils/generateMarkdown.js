function generateMarkdown(data) {
  return `
# ${data.projectName}

## Description 

${data.description}

## Installation

To install the required dependencies, run the following command: "${data.depCom}"

## Usage 

${data.needToKnow}

## Credits

${data.github}

## License

${ansURL} 

## Contributing

${data.contribute}

## Tests

To run my tests, run the following command: "${data.testCom}"

## Questions

Reach out to [egarcia1868](https://github.com/egarcia1868) for questions or concerns.
`

}

module.exports = generateMarkdown;
