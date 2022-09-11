# Vegetarian Recipes 

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#live-demo">Live Demo</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>


## About The Project

Vegetarian Recipes is a simple React application that allows the user to search vegetarian recipes, display random vegetarian recipes and view recipe's details.

### Live Demo

Follow the link and try the app online: https://vegetarian-recipes.netlify.app/


### Built With

* [React](https://it.reactjs.org/)
* [Redux](https://redux.js.org/)
* [Axios](https://github.com/axios/axios)
* [React Router](https://reactrouter.com/en/v6.3.0/getting-started/overview)


## Getting Started

Follow these simple steps to get a local copy and run it.

### Prerequisites

Running the application requires [Node](https://nodejs.org/en/) to be installed on your operating system.

You can install the latest version of npm from your terminal with the following command:
```sh
  npm install npm@latest -g
```

### Installation

1. Clone the repo locally with git clone command
   ```sh
    git clone https://github.com/ruohu/vegetarian-recipe-app.git
   ```
2. Install NPM packages
   ```sh
    npm install
   ```
3. Get you API key from [Spoonacular API](https://spoonacular.com/food-api) and enter it in the .env.example file
   ```sh
    REACT_APP_API_KEY="insert your API key here"
   ```

4. Rename the .env.example file to .env

5. Run the app
   ```sh
    npm start
   ```


## License

Distributed under the MIT License.


## Acknowledgements

* [Spoonacular API](https://spoonacular.com/food-api)
