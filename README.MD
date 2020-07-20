# Aurbit Mono Repo


### Scripts

- `yarn client:dev`: This will run the react application development server

### Monorepo Methodology

1) To add your own package, create a folder inside the `packages` folder and treat it as its own project by running `yarn init--yes` to create a basic `package.json` file
2) Take note of the name of your project ensure the name of the `folder` and the `name` inside the `package.json` file **match**
4) Add your **scripts** to run your project as you would any normal project in your `package.json`
3) In the **root** `package.json` add your script named after the script you made in your project to run what ever you need inside the project I.E
4) Install project dependant npm packages within the projects `package.json` its self
5) In the event you need global packages (I.E If we were going to use jest to test in many projects - instead of installing it at each project package level - you could install it at the root project level)

#### Example

## Folder Structure - Root Level
```
/node_modules
/packages
    /react-app
    /my-project
        index.js
        package.json (name inside this file is "my-project")
package.json
README.MD
```

#### Package.json - My Project
```
  "scripts": {
    "server:start": "node index.js",
  },
```

#### Package.json - Root Level
```
  "scripts": {
    "client:dev": "yarn workspace react-app start",
    "any:name": "yarn workspace my-project server:start"
  },
```
