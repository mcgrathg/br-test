const path = require('path');

const pascalcase = require('pascalcase');

module.exports = {
  includePaths: [path.join(__dirname, 'app')],
  importGroups: ['react', 'react-dom', 'redux', 'react-redux', 'prop-types'],
  processDefaultName: filepath => pascalcase(path.parse(filepath).name),
};
