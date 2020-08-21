This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

1. Install [https://www.nodejs.org](https://www.nodejs.org) globally
2. Install `Yarn` globally `npm install -g yarn` 
3. Install `git`
4. Clone the repository into your local machine
5. Do `yarn install` to install dependencies
6. Do `yarn start` to run the server and the live app

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

- `yarn test` : executes testing script
- `yarn test:coverage` : executes tests and shows coverage

## Directory Structure

- `src/`
  - `assets/` Contains all the assets needed for the app
  - `components/` Contains all of unstated components (without redux connection)
  - `containers` Contains all the functional components which require redux connection
    - `componentName/`
      - `index.ts` encapsulator
      - `componentName.tsx` component itself
  - `store` Contains store managers
    - `actions` Actions definitions and actions creators
    - `reducers` Reducers, one as for now
    - `selectors` Store selector hooks
    - `dispatchers` Action dispatchers
  - `types` Types definitions for all components across site
  
## Store design

- `github` root reducer. Just a generic name given.
    - `loading` to handle spinner when requesting info to the backend
    - `error` to show any possible error when requesting info from github
    - `userData` <Array> to store all the items coming from backend regarding github users
    - `repoData` <Array> to store all the items coming from backend regarding github repos
    - `search` search textbox value
    - `dropdown` dropdown value

## Product Behavior

1. Implementation of `axios` for querying the backend and store the info inside redux to handle data. After requesting information to the backend, the `loading` state will change to `true` to show a `Spinner` on the `List` until github responds with data.
2. After data being retrieved, change the `loading` status to `false` to hide the spinner and let the `<ListCards />` component show the cards
3. The data will persist due to `redux-persist` functionality and if you refresh the page, you will get the cards without querying the backend again.
4. If you change the dropdown, you will send the same query string but with the second dropdown option
5. You can input as many chars as you want, but the system will only trigger backend query when you stop stroking keys per 1.5s
6. If you resize the screen items will change to match the screen size.

## Architecture

The main reason why I choose to keep two states for each repo and user information is to avoid re-querying the backend many times when changing the dropdown.

Separating types will make easily the inception of having all typing inside one single folder

Loading and Error states makes user interaction easily 

Store folder divided into 4 sections: actions, dispatchers, reducers and selectors. The idea behind this is for using hooks that can be reused for different components to have a simpler way of fetching info from store.
