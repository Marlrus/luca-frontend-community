# Frontend Repo

Done with Create React App using TypeScript for the frontend. To manage state, I will use redux along with redux-thunk for async actions.

## Running the Repo

For the app to function, the server from the backend repo must be running locally.

### Requirements

- Node (14.x recommended)
- Yarn (recommended)

Without yarn, replace commands with npm install, npm run start.

### Instalation

`yarn install`

### Running the Repo

`yarn start`

## Folder Structure

- src/ contains everything react related
- components/ holds re-usable components as well as sections
- pages/ holds pages that contain sections
- redux/ holds everything related to redux state management

## Component Structure

Pages -> Sections -> Components

Pages are meant to contain sections, sections contain components. Components are meant to be almost single concern and re-usable, with spare logic.

## State Management Redux

Redux will be used for state management which is the go-to tool for state management in large apps. Files for each section of the pipeline are in their folders.

Since Types are mostly used in the state management tool, the types/ directory is in the redux/ directory.

Redux Thunk is used for async actions.

## Fonts

The Inter and Poppins fonts were added to the global css file and can be accesed on different weights accross the repo easily.

## Color codes

The StyleConstants.ts file holds all the colors used in the repo, which makes it easy to change a color accross the repo with the change of one variable.

## Icons and Logos

The IconstAndLogos.ts files holds all the paths to use all the icons from the project with a simple import statement. This makes working with logos a lot easier inside an img tag. All the icons were downloaded in SVG because it is the most flexible, lossless, and lightest way to store these kinds of icons.

## Styled Components

Styled components is a CSS in JS solution that allows for flexible styling and easier integration with props.

## Breakpoints

All breakpoints are managed from the size object in StyleConstants.ts, these breakpoints are used in media queries but also in react-responsive for conditional dynamic rendering. If the breakpoints were to change, altering the size object will do it accross the repo.
