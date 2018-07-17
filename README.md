# Aqueduct Components 1.0 | Styleguide

Aqueduct Components is a collection of React components shared with all Aqueduct tools. 
The goal of this project is to centralize all common components and keep the consistency through the different apps.

## Requirements 🛠️
```
  node 8.11.2
```

## Getting Started 👨‍💻
---
Once you have the project locally, run `yarn` to install project's dependencies.

And that's all! No need of more setup.

To start working run `yarn start`. This will run [styleguidist](https://github.com/styleguidist/react-styleguidist) responsible of generating our styleguide. Now you are ready to code!


### Adding a new component 👾
To add a new component, go to `src/components`, you will see a bunch of first-level folders, those are the sections, then choose where you want to create your component (or create a new section, see below).

The component folder needs the following structure:
```
- index.js (entrypoint, ususally where the component is defined)
- readme.md (file used to define how styleguidist will render the component).
- styles.scss (optional, if there are styles to apply)
```

Feel free to create as many file as you need to make your component work once you have the mandatory ones.

### Adding a new section 📜
To add a new section, go to `styleguide.config.js` file, look for `sections` and add yours:
```
  {
    name: 'Awesome section',
    components: () => ([ path.resolve(__dirname, 'src/components/awesome-section/*', 'index.js') ])
  }
```


## Deploy 🚀
---
The deploy is set up with [gh-pages](https://github.com/tschaub/gh-pages). To deploy, styleguidist will generate a compiled and production-ready version and gh-pages will deploy it to the `gh-pages` branch automatically. 

Those steps can be run just typing `yarn run deploy`.

For more details, check `package.json`, `scripts` section.

## Recommendations 🐰
---

It's strongly recommended to use [nvm](https://github.com/creationix/nvm) for mananing different Node versions easily.





