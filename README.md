<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="./src/assets/img/logo.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Tenant Wizard</h3>

  <p align="center">
    An awesome wizard for tenant registration 🏠
    <br />
    <a href="https://tenant-wizard.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/JadRizk/tenant-wizard/issues">Report Bug</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#available-scripts">Available Scripts</a></li>
      </ul>
    </li>
    <li><a href="#developper-corner"> Developper Corner</a></li>
    <li><a href="#wizard-form-layout"> Wizard Form Layout</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is a solution to the Frontend Challenge Vo2.

> The aim of this challenge is to build an application form for tenants so that they can register with Home and start booking apartments.

Here is a quick overview of the solution proposed in this project:

- The tenant first lands on the welcome page 🛬. Nothing much happening on the screen except for the CTA button in primary color prompting the tenant to register. The logo and slogan are displayed as well on the page.
- If the tenant chooses to register 📝, he will be redirected to the registration form. A simple wizard form created using the `compound component` pattern in react. This wizard includes personal and financial information as well as a review step where the tenant can review the information he's entered.
- On successful submission ✅, the user will be routed to the success page. Notice the timestamp in the URL (we will come back to this later on). After a brief timeout, the user is redirected to the official `home.ht` website where he can start looking for his future home 🏡

This project leverage the power of the newly introduced features such as Context API and Hooks in React v16.8 to build a robust user experience. The components are built from the ground up using the notion of CSS-in-JS (styled-components). Coming to the stepper, we are using a react pattern known as compound components: The idea is that we have two or more components that work together to accomplish a task. In our case it's the progress indicator or as we like to call it the wizard 🧙‍♂️.

### Built With

To sum up our first section, here is a list of the tools we are using:

- [Create React App](https://github.com/facebook/create-react-app): Used to kickoff our react project without having to worry about webpack or babel configurations. `react-script` will take care of that for us.
- [TypeScript](): needs no introduction
- [React router dom](): Contains the DOM bindings for React Router. In other words, the router components for websites.
- [styled-components]():
  A flexible way to style React components with CSS. It provides out-of-the-box theming support using a wrapper component called, `<ThemeProvider>`. This component is responsible for providing the theme to all other React components that are wrapped within it.

<!-- GETTING STARTED -->

## Getting Started

If you are interested in launching the project locally and experiment 🧪 with it, follow these easy steps to get it up and running in no time 💥

### 📚 Prerequisites

---

Make sure you have the following tools updated and ready to be used before starting the installation process. This minimize the number of issues and misbehaviors.

For maximum compatibility, we recommend using VSCode for this project. If not, any text editor would do just fine.

- Local Environment:

  ```sh
  npm -v #Should be >= 6.14.6

  node -v #Should be >= v12.18.3
  ```

- Good to have VSCode extensions for a better development experience
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [TypeScript Importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)
  - [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

### 🦺 Installation

---

1. Start by cloning the project locally:

```sh
git clone https://github.com/JadRizk/tenant-wizard.git

cd tenant-wizard
```

2. Next, we will need to install our dependencies. Feel free to use any package manager you want. We would recommend using yarn.

```sh
yarn
            --OR--
npm install
```

3. Almost there, all we need to do now is start the project:

```sh
yarn start
```

### 📜 Available Scripts

---

In the project directory, you find the following scripts:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn lint`

Uses Eslint to find the linting issues in the code
Read more about eslint [here](https://eslint.org/).

### `yarn format`

Uses Prettier to format the codebase according the `.prettierrc` configs.
Install the [prettierr extension](https://prettier.io/) if you're using VSCode.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

<!-- USAGE EXAMPLES -->

## Developper Corner

Maintaining a state in our application is crucial. There is a lot of third-party libraries that provide a wide variety of state management techniques and patterns. However, for this project, we kept it simple and used the new React Context API. Combined with React Hooks and compound components pattern, we have everything we need to manage our internal state accross pages and component.
We are using a context for data related to the wizard component (`WizardContext`) and, another one for handling the tenant information (`TenantContext`)

To keep thing as light as possible, we leveraged the power of CSS-in-JS to style our application from the ground up. This is possible using `styled-components`.

### Dev tools used in the project:

- Husky: <br>
  This project uses [Husky](https://typicode.github.io/husky/#/) to maintain a consistent codebase. It provides access to git Hooks.

- Gitmoji: <br>
  Our commit messages follow the [gitmoji](https://gitmoji.dev/) naming convention

## Wizard Form Layout

Here is how the `TenantForm` Page is structured:

![Tenant Form Explained](./docs/img/tenantFormExplained.png)

1. `<MainWrapper />`
2. `<WizardSteps />`
3. `<WizardSteps.Stepper />`
4. `<WizardSteps.Panel />`
5. `actionButtons()`

<!-- ROADMAP -->

## Roadmap

- [ ] Add a toaster for better error reporting
- [ ] Prompt user before refreshing the page
- [ ] Add currency to review button
- [ ] Refactor form loader to display inside the submit button (UX enhancement)
- [ ] Fix the wizard transition animation ( make it fade horizontally )
- [ ] Add 🎊 confetti 🎊 to the `success` page

<!-- CONTACT -->

## Contact

🚀 Had a blast working on this project, hope you enjoy it 🚀

-- J.R
