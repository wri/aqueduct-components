const path = require('path');
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');

const webpackConfig = require('./styleguide.webpack.js');
const { name, version } = require('./package.json');

module.exports = {
  title: `AQ components | ${version}`,
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700'
        }
      ]
    }
  },
  styleguideComponents: {
    StyleGuideRenderer: path.join(__dirname, 'src/styleguide/components/styleGuide'),
  },
  sections: [
    {
      name: 'UI',
      components: () => ([ path.resolve(__dirname, 'src/components/ui/*', 'index.js') ])
    },
    {
      name: 'Form',
      components: () => ([ path.resolve(__dirname, 'src/components/form/*', 'index.js') ])
    }
  ],
  skipComponentsWithoutExample: true,
  getComponentPathLine: (componentPath) => {
    const dirname = path.dirname(componentPath, '.js');
    const componentName = upperFirst(camelCase(dirname.split('/').slice(-1)[0]));

    return `import { ${componentName} } from '${name}'`;
  },
  webpackConfig
};
